import React from 'react';
import {
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  FormInput,
  ModalFooter,
  Button,
} from 'shards-react';

const LoginForm = () => {
  return (
    <div>
      <Form>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>
              <strong>USERNAME</strong>
            </label>
            <FormInput id="username" />
          </FormGroup>
          <FormGroup>
            <label>
              <strong>PASSWORD</strong>
            </label>
            <FormInput id="password" type="password" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" theme="danger">
            Submit
          </Button>
        </ModalFooter>
      </Form>
    </div>
  );
};

export default LoginForm;
