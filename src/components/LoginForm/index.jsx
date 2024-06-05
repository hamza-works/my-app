import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';
import { UserContext } from '../../context/UserContext';
import { StyledForm } from './style';

const LoginForm = () => {
    const { setUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (!name || !email || !password) {
            setError('All fields are required');
            return false;
        }
        // Simple email regex for basic validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setUser({ name, email });
            navigate('/dashboard');
        }
    };

    return (
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                <Typography variant="h4" component="h1" textAlign="center">
                    Login
                </Typography>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                />
                <TextField
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                />
                {error && (
                    <Typography variant="body2" color="error" textAlign="center">
                        {error}
                    </Typography>
                )}
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </StyledForm>
        </Container>
    );
};

export default LoginForm;
