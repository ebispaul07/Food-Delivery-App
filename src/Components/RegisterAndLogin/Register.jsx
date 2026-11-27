import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); 

    const user = { username, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    setUsername('');
    setEmail('');
    setPassword('');
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h4 className="mb-3">Register</h4>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formUsername">
            <Form.Label column sm="3">
              Username
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formEmail">
            <Form.Label column sm="3">
              Email
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPassword">
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="9">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <div className="text-center">
            <Button type="submit" onClick={handleRegister}>Sign up</Button>
          </div>
          <p className="mt-3 text-center">
            Already have an Account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
