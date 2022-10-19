import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

function Forms() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email === "" || password === "") {
      alert("Field should not be empty !");
      setValidate(false);
    } else setValidate(true);
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center">Forms</h1>
      <p className="text-center">
        <u>This is to show the form system using bootstrap</u>
      </p>
      <Form noValidate validated={validate} onSubmit={handleSubmit}>
        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please Enter Correct Email
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel className="mb-3" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Password
          </Form.Control.Feedback>
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
