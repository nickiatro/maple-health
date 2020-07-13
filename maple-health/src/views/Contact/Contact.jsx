import React from 'react';
import { Form, FormGroup, FormInput, Button, FormTextarea } from 'shards-react';
import { useState } from 'react';
import axios from 'axios';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [validName, setValidName] = useState(null);
  const [validEmail, setValidEmail] = useState(null);
  const [validSubject, setValidSubject] = useState(null);
  const [validMessage, setValidMessage] = useState(null);

  const [disabled, setDisabled] = useState(true);

  const validateForm = () => {
    if (name.length == 0) {
      setValidName(false);
    } else {
      setValidName(true);
    }
    if (
      !email.match(
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      )
    ) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
    if (subject.length == 0) {
      setValidSubject(false);
    } else {
      setValidSubject(true);
    }
    if (message.length == 0) {
      setValidMessage(false);
    } else {
      setValidMessage(true);
    }
    if (
      name.length > 0 &&
      email.match(
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      ) &&
      subject.length > 0 &&
      message.length > 0
    ) {
      setDisabled(false);
    } else setDisabled(true);
  };
  return (
    <div>
      <br />
      <h1>We're always here to help!</h1>
      <p>Fill out the form below and we'll contact you as soon as possible.</p>
      <Form className="col offset-2 col-8 offset-lg-4 col-lg-4">
        <FormGroup>
          <label>
            <strong>NAME</strong>
          </label>
          <FormInput
            id="name"
            value={name}
            valid={validName}
            invalid={validName == null ? null : !validName}
            onChange={e => {
              setName(e.target.value);
            }}
            onBlur={() => {
              validateForm();
            }}
          />
        </FormGroup>
        <FormGroup>
          <label>
            <strong>EMAIL ADDRESS</strong>
          </label>
          <FormInput
            id="email"
            value={email}
            valid={validEmail}
            invalid={validEmail == null ? null : !validEmail}
            onChange={e => {
              setEmail(e.target.value);
            }}
            onBlur={() => {
              validateForm();
            }}
          />
        </FormGroup>
        <FormGroup>
          <label>
            <strong>SUBJECT</strong>
          </label>
          <FormInput
            id="subject"
            value={subject}
            valid={validSubject}
            invalid={validSubject == null ? null : !validSubject}
            onChange={e => {
              setSubject(e.target.value);
            }}
            onBlur={() => {
              validateForm();
            }}
          />
        </FormGroup>
        <FormGroup>
          <label>
            <strong>MESSAGE</strong>
          </label>
          <FormTextarea
            rows="6"
            id="message"
            value={message}
            valid={validMessage}
            invalid={validMessage == null ? null : !validMessage}
            onChange={e => {
              setMessage(e.target.value);
            }}
            onBlur={() => {
              validateForm();
            }}
          />
        </FormGroup>
        <Button
          theme="danger"
          disabled={disabled}
          onClick={() => {
            axios({
              method: 'POST',
              url: '/api/send',
              data: {
                name: name,
                email: email,
                subject: subject,
                message: message,
              },
            });
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Contact;
