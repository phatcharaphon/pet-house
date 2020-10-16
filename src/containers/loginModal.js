import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { Modal, Button, Form } from "../components";

import * as ROUTES from "../constants/routes";

export default function LoginModal({ display = false, toggleModal }) {
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = (e) => {
    e.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        toggleModal();
        history.push(ROUTES.HOME);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Modal display={display ? "block" : "none"}>
      <Modal.Base id="modal">
        <Form.Base onSubmit={handleLogin} method="POST">
          <Form.Icon src="/images/logo.png" size="75" />

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Row>
            <Form.Icon src="/icons/customer.png" />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
          </Form.Row>

          <Form.Row>
            <Form.Icon src="/icons/key.png" />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </Form.Row>

          <Button disabled={isInvalid} type="submit">
            Sign In
          </Button>
        </Form.Base>

        <Modal.Link href={ROUTES.SIGN_UP} onClick={toggleModal}>
          Create an account
        </Modal.Link>

        <Modal.Close onClick={toggleModal}>&times;</Modal.Close>
      </Modal.Base>
    </Modal>
  );
}
