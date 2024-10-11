import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Input validation
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Process the data
    const url = 'http://localhost:3000/i-notebook/api/v1/user/login-user';
    const data = { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.status !== 'success') {
        setError(responseData.message);
        return;
      }

      // Success
      localStorage.setItem('inotebook-token', responseData.data._token);
      setError('');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Login</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formPassword' className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-3'>
          Submit
        </Button>
      </Form>
      <div className=''>
        <p className='mt-3'>
          Don&apos;t have an account?{' '}
          <Link to='/register' className='text-decoration-none'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
