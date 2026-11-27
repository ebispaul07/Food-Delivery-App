import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let savedUser = null;

    try {
      savedUser = JSON.parse(localStorage.getItem('registeredUser'));
    } catch {
      savedUser = null;
    }

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      window.dispatchEvent(new Event('auth-change'));
      navigate('/products', { replace: true });
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Form onSubmit={handleLogin}>
          <h4 className="mb-3">Login</h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Email</Form.Label>
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

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Password</Form.Label>
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
            <Button type="submit">Login</Button>
          </div>

          <p className="mt-3 text-center">
            Don't have an Account? <Link to="/register">Sign up</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
