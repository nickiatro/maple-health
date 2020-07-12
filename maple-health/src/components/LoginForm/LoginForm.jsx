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
            <label>USERNAME</label>
            <FormInput id="username" />
          </FormGroup>
          <FormGroup>
            <label>PASSWORD</label>
            <FormInput id="password" />
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
