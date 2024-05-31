import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link, Paper, FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
});

const StyledPaper = styled(Paper)({
    padding: '2rem',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    width: '80%',
    maxWidth: '400px',
});

const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
});

const StyledTextField = styled(TextField)({
    marginBottom: '1.5rem',
    width: '100%',
    '& .MuiInputBase-root': {
        borderRadius: '8px',
    },
});

const StyledButton = styled(Button)({
    marginTop: '1rem',
    width: '100%',
    padding: '12px',
    backgroundColor: '#A7FF4A', // Set button background color to light green
    color: '#323240', // Set button text color to match background
    '&:hover': {
        backgroundColor: '#83cc3e', // Darker shade of light green for hover
    },
});

const StyledTypography = styled(Typography)({
    marginTop: '1rem',
    '& a': {
        color: '#000', // Set link color to black
        textDecoration: 'none', // Remove underline
    },
});


function Register() {
    const [registerAs, setRegisterAs] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [busRouteNo, setBusRouteNo] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const requestBody = {
                username,
                email,
                password,
            };

            if (registerAs === 'driver') {
                requestBody.busRouteNo = busRouteNo;
            }

            const response = await fetch(`http://localhost:1234/api/auth/${registerAs}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error('Error response:', errorData);
                throw new Error(`Registration failed: ${errorData}`);
            }

            console.log('User registered successfully');
            navigate('/login');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <StyledContainer>
            <StyledPaper>
                <Typography variant="h5" align="center" gutterBottom>
                    Register
                </Typography>
                <StyledForm noValidate autoComplete="off">
                    <FormControl fullWidth>
                        <Select
                            value={registerAs}
                            onChange={(e) => setRegisterAs(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Register As
                            </MenuItem>
                            <MenuItem value="user">User</MenuItem>
                            <MenuItem value="driver">Driver</MenuItem>
                        </Select>
                    </FormControl>
                    <StyledTextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <StyledTextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <StyledTextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {registerAs === 'driver' && (
                        <StyledTextField
                            label="Bus Route No"
                            variant="outlined"
                            value={busRouteNo}
                            onChange={(e) => setBusRouteNo(e.target.value)}
                        />
                    )}
                    <StyledButton variant="contained" color="primary" onClick={handleRegister}>
                        Register
                    </StyledButton>
                    <StyledTypography variant="body2" align="center">
                        Already a member? <Link href="/login">Login</Link>
                    </StyledTypography>
                </StyledForm>
            </StyledPaper>
        </StyledContainer>
    );
}

export default Register;
