// import React, { useState, useEffect } from 'react';
// import { Container, Typography, TextField, Button, Link, Paper, FormControl, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
// import { useNavigate } from 'react-router-dom';

// const StyledContainer = styled(Container)({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     width: '100vw', // Ensure the container covers the full width of the screen
// });

// const StyledPaper = styled(Paper)({
//     padding: '2rem',
//     boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//     borderRadius: '12px',
//     width: '80%',
//     maxWidth: '400px',
// });

// const StyledForm = styled('form')({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
// });

// const StyledTextField = styled(TextField)({
//     marginBottom: '1.5rem',
//     width: '100%',
//     '& .MuiInputBase-root': {
//         borderRadius: '8px',
//     },
// });

// const StyledButton = styled(Button)({
//     marginTop: '1rem',
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#A7FF4A', // Set button background color to light green
//     color: '#323240', // Set button text color to match background
//     '&:hover': {
//         backgroundColor: '#83cc3e', // Darker shade of light green for hover
//     },
// });

// const StyledTypography = styled(Typography)({
//     marginTop: '1rem',
//     '& a': {
//         color: '#000', // Set link color to black
//         textDecoration: 'none', // Remove underline
//     },
// });


// function Login() {
//     const [loginAs, setLoginAs] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (loginAs === 'driver' && navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(position => {
//                 const { latitude, longitude } = position.coords;
//                 localStorage.setItem('latitude', latitude);
//                 localStorage.setItem('longitude', longitude);
//             });
//         }
//     }, [loginAs]);

//     const handleLogin = async () => {
//         try {
//             const response = await fetch(`http://localhost:1234/api/auth/${loginAs}/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });

//             if (!response.ok) {
//                 const errorData = await response.text();
//                 console.error('Error response:', errorData);
//                 throw new Error(`Login failed: ${errorData}`);
//             }

//             const { token } = await response.json();

//             localStorage.setItem('authToken', token);
//             navigate('/');
//         } catch (error) {
//             console.error('Error logging in:', error.message);
//         }
//     };

//     return (
//         <StyledContainer>
//             <StyledPaper>
//                 <Typography variant="h5" align="center" gutterBottom>
//                     Login
//                 </Typography>
//                 <StyledForm noValidate autoComplete="off">
//                     <FormControl fullWidth>
//                         <Select
//                             value={loginAs}
//                             onChange={(e) => setLoginAs(e.target.value)}
//                             displayEmpty
//                             inputProps={{ 'aria-label': 'Without label' }}
//                         >
//                             <MenuItem value="" disabled>
//                                 Login As
//                             </MenuItem>
//                             <MenuItem value="user">User</MenuItem>
//                             <MenuItem value="driver">Driver</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <StyledTextField
//                         label="Email"
//                         variant="outlined"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <StyledTextField
//                         label="Password"
//                         type="password"
//                         variant="outlined"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <StyledButton variant="contained" color="primary" onClick={handleLogin}>
//                         Login
//                     </StyledButton>
//                     <StyledTypography variant="body2" align="center">
//                         Not a member? <Link href="/signup">Sign Up</Link>
//                     </StyledTypography>
//                 </StyledForm>
//             </StyledPaper>
//         </StyledContainer>
//     );
// }

// export default Login;


import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Link, Paper, FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw', // Ensure the container covers the full width of the screen
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

function Login() {
    const [loginAs, setLoginAs] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (loginAs === 'driver' && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                localStorage.setItem('latitude', latitude);
                localStorage.setItem('longitude', longitude);
            });
        }
    }, [loginAs]);

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://localhost:1234/api/auth/${loginAs}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message); // Set error message
                return; // Stop execution
            }

            const { token } = await response.json();

            localStorage.setItem('authToken', token);
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <StyledContainer>
            <StyledPaper>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <StyledForm noValidate autoComplete="off">
                    <FormControl fullWidth>
                        <Select
                            value={loginAs}
                            onChange={(e) => setLoginAs(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Login As
                            </MenuItem>
                            <MenuItem value="user">User</MenuItem>
                            <MenuItem value="driver">Driver</MenuItem>
                        </Select>
                    </FormControl>
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
                    {error && (
                        <Typography variant="body2" color="error">
                            {error}
                        </Typography>
                    )}
                    <StyledButton variant="contained" color="primary" onClick={handleLogin}>
                        Login
                    </StyledButton>
                    <StyledTypography variant="body2" align="center">
                        Not a member? <Link href="/signup">Sign Up</Link>
                    </StyledTypography>
                </StyledForm>
            </StyledPaper>
        </StyledContainer>
    );
}

export default Login;
