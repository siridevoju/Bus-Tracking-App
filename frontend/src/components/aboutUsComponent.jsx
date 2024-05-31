import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, AppBar, Toolbar, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';

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
    padding: '2rem',
});

const StyledTitle = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'left', // Align titles to the left
});

const StyledParagraph = styled(Typography)({
    fontSize: '1rem',
    marginBottom: '1rem',
    textAlign: 'justify',
});

const StyledList = styled('ul')({
    listStyleType: 'disc',
    marginLeft: '2rem',
});

const StyledAppBar = styled(AppBar)({
    position: 'static',
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const StyledButton = styled(Button)({
    margin: '1rem',
    background: '#A7FF4A',
    alignSelf: 'flex-end',
});

function AboutUs() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken') !== null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('authToken') !== null);
    }, []);

    return (
        <ThemeProvider theme={theme}> {/* Apply custom theme */}
            <>
                <StyledAppBar color="primary"> {/* Use primary color */}
                    <StyledToolbar>
                        <Typography variant="h6" fontWeight="bold" component="div" color="black">
                            FindYourBus
                        </Typography>
                        <div>
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
                            {isLoggedIn ? (
                                <StyledButton variant="contained" color="primary" onClick={() => navigate('/login')}>
                                    Logout
                                </StyledButton>
                            ) : (
                                <StyledButton variant="contained" color="primary" onClick={() => navigate('/login')}>
                                    Login
                                </StyledButton>
                            )}
                        </div>
                    </StyledToolbar>
                </StyledAppBar>
                <StyledContainer>
                    <StyledTitle variant="h2" gutterBottom>
                        Our Mission
                    </StyledTitle>
                    <StyledParagraph gutterBottom>
                        At BusTracker, we are dedicated to providing reliable and efficient bus tracking services to our users. Our mission is to make transportation easier and more convenient for everyone.
                    </StyledParagraph>
                    <StyledTitle variant="h2" gutterBottom>
                        What We Offer
                    </StyledTitle>
                    <StyledParagraph gutterBottom>
                        BusTracker offers a comprehensive range of services designed to enhance the travel experience for our users. Our services include real-time bus tracking, route planning, and user-friendly mobile applications.
                    </StyledParagraph>
                    <StyledList>
                        <li>Real-time Bus Tracking</li>
                        <li>Route Planning</li>
                        <li>User-friendly Mobile Applications</li>
                        <li>Notifications and Alerts</li>
                    </StyledList>
                    <StyledTitle variant="h2" gutterBottom>
                        Our Commitment to Safety
                    </StyledTitle>
                    <StyledParagraph gutterBottom>
                        Safety is our top priority at BusTracker. We ensure that all our buses are well-maintained and adhere to strict safety standards. Our drivers are experienced professionals who prioritize the safety and comfort of our passengers.
                    </StyledParagraph>
                    <StyledTitle variant="h2" gutterBottom>
                        Join Us Today
                    </StyledTitle>
                    <StyledParagraph gutterBottom>
                        Join BusTracker today and experience the convenience of real-time bus tracking. Whether you're a student, commuter, or traveler, BusTracker is here to make your journey easier and more enjoyable.
                    </StyledParagraph>
                </StyledContainer>
            </>
        </ThemeProvider>
    );
}

export default AboutUs;
