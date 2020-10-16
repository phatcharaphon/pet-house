import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
// import { FirebaseContext } from '../context/firebase';

import { PageContent, Form, Button } from "../src/components";
import * as ROUTES from "../src/constants/routes";

export default function Signup() {
  // const { firebase } = useContext(FirebaseContext);

  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [call, setCall] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const router = useRouter();

    // console.log(firebase);

    // return firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(emailAddress, password)
    //   .then((result) =>
    //     result.user
    //       .updateProfile({
    //         displayName: name,
    //         photoURL: Math.floor(Math.random() * 5) + 1,
    //       })
    //       .then(() => {
    //         router.push(ROUTES.HOME);
    //       })
    //   )
    //   .catch((error) => {
    //     setName('');
    //     setEmailAddress('');
    //     setPassword('');
    //     setCall('');
    //     setError(error.message);
    //   });
  };

  const isInvalid =
    name === "" || password === "" || emailAddress === "" || call === "";

  return (
    <PageContent direction="column">
      <Form>
        <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Icon src="/images/logo.png" size={75} />

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Row>
            <Form.Icon src="/icons/customer-check.png" />
            <Form.Input
              placeholder="First Name - Last Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </Form.Row>

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

          <Form.Row>
            <Form.Icon src="/icons/call.png" />
            <Form.Input
              placeholder="Call"
              value={call}
              onChange={({ target }) => setCall(target.value)}
            />
          </Form.Row>

          <Form.Text color="#36882B">กรุณายืนยันตัวตนเพื่อเริ่มเช่า</Form.Text>

          <Form.Icon src="/images/identification.png" size={300} />

          <Form.Row onClick={() => alert("Choosing file")} clickable={true}>
            <Form.Icon src="/images/identification.png" size={50} />
            <Form.Text color="#36882B">Choose File</Form.Text>
          </Form.Row>

          <br />
          <br />

          <Button type="submit" disabled={isInvalid}>
            ยืนยัน
          </Button>
        </Form.Base>
      </Form>
    </PageContent>
  );
}
