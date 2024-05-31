import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, AppBar, Toolbar, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate, Link } from 'react-router-dom';
import icon from '../images/logo.png';
import { DotLottiePlayer } from '@dotlottie/react-player'; // Import DotLottiePlayer component
import '@dotlottie/react-player/dist/index.css'; // Import styles for DotLottiePlayer
import RoutesComponent from '../components/routesComponent'; // Correct import name for RoutesComponent

// Define custom color palette
const theme = createTheme({
    palette: {
        primary: {
            main: '#f0f0f0', // Pastel purple
        },
    },
});

// Styled components for custom styling
const StyledContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

const StyledButton = styled(Button)({
    margin: '1rem',
    background: '#A7FF4A',
    alignSelf: 'flex-end',
    color: 'black', // Change the text color to black
});

const StyledAppBar = styled(AppBar)({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const StyledDotLottiePlayer = styled(DotLottiePlayer)({
    width: '50%',
    height: '67%', // Decrease width
    marginRight: '30%', // Float to the left
});

const FlexContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // Align items to the right
    justifyContent: 'center', // Center items horizontally
    marginTop: '1rem',
    marginRight: '1rem', // Add right margin
    width: '50%', // Set width to 50%
    textAlign: 'right', // Align text to the right
});

const StyledCaption = styled(Typography)({
    fontSize: '1.5rem', // Increase font size
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
});

const StyledLoginMessage = styled(Typography)({
    fontSize: '1rem', // Decrease font size
    color: '#434141', // Set color to match button color
    marginTop: '0.5rem', // Add top margin
});

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken') !== null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('authToken') !== null);
    }, []);

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        navigate('/login');
    };

    // Function to handle navigation to bus tracking
    const handleTrackBus = () => {
        navigate('/busTrack');
    };

    return (
        <ThemeProvider theme={theme}> {/* Apply custom theme */}
            <>
                <StyledAppBar color="primary"> {/* Use primary color */}
                    <StyledToolbar>
                        <Typography variant="h6" fontWeight="bold" component="div" color="black">
                            FindYourBus
                        </Typography>
                        <div>
                            {isLoggedIn ? (
                                <>
                                    <Link to="/" style={{ color: 'black', textDecoration: 'none', marginRight: '1rem' }}>
                                        <Button variant="text" color="inherit">
                                            Home
                                        </Button>
                                    </Link>
                                    <Link to="/busRoutes" style={{ color: 'black', textDecoration: 'none', marginRight: '1rem' }}>
                                        <Button variant="text" color="inherit">
                                            Routes
                                        </Button>
                                    </Link>
                                    <Link to="/aboutUs" style={{ color: 'black', textDecoration: 'none', marginRight: '1rem' }}>
                                        <Button variant="text" color="inherit">
                                            About Us
                                        </Button>
                                    </Link>
                                    <StyledButton variant="contained" color="primary" onClick={handleLogout}>
                                        Logout
                                    </StyledButton>
                                </>
                            ) : (
                                <StyledButton variant="contained" color="primary" onClick={() => navigate('/login')}>
                                    Login
                                </StyledButton>
                            )}
                        </div>
                    </StyledToolbar>
                </StyledAppBar>
                <StyledContainer>
                    <StyledDotLottiePlayer
                        src="https://lottie.host/bdd581ec-b24d-4913-a067-bf47cf237b77/YbqTflfZRZ.lottie"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    />
                    <FlexContainer>
                        <StyledCaption gutterBottom>
                            Stay on track, follow your bus with ease.
                        </StyledCaption>
                        {!isLoggedIn && (
                            <StyledLoginMessage gutterBottom>
                                Please login to continue.
                            </StyledLoginMessage>
                        )}
                        {isLoggedIn && (

                            <Button variant="contained" style={{ background: '#A7FF4A', color: '#323240' }} onClick={handleTrackBus}>
                                Track Your Bus
                            </Button>

                        )}
                    </FlexContainer>
                </StyledContainer>
            </>
        </ThemeProvider>
    );
}

export default Dashboard;
