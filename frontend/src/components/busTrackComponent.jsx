import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Typography, TextField, Button, Grid, AppBar, Toolbar } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// Define custom theme
const theme = createTheme({
    palette: {
        background: '#f0f0f0', // Background color
    },
});

const StyledAppBar = styled(AppBar)({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f0f0f0', // Background color for the navbar
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

// Styled button with custom background color
const StyledButton = styled(Button)({
    backgroundColor: '#A7FF4A', // Custom background color for buttons
    '&:hover': {
        backgroundColor: '#90cc3e', // Custom hover background color
    },
});

const BusTrackingMap = () => {
    const [routeNumber, setRouteNumber] = useState('');
    const [busLocation, setBusLocation] = useState(null); // Initialize as null
    const [showMarker, setShowMarker] = useState(false); // State to control marker visibility
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        // Update bus location using geolocation
        const intervalId = setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setBusLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                }
            );
        }, 5000); // Update every 5 seconds

        return () => clearInterval(intervalId);
    }, []); // Runs only once on component mount

    const handleTrackBus = () => {
        // Display marker after button click
        setShowMarker(true);
    };

    const handleNavigateToBusTrack = () => {
        // Navigate to /busTrack route
        navigate('/');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StyledAppBar>
                    <StyledToolbar>
                        <Typography variant="h6" fontWeight="bold" component="div" color="black">
                            FindYourBus
                        </Typography>
                        <div>
                            <StyledButton style={{ color: 'black' }} variant="contained" onClick={handleNavigateToBusTrack}>Home</StyledButton>
                        </div>
                    </StyledToolbar>
                </StyledAppBar>
                <Typography variant="h4" align="center" gutterBottom>Bus Tracking Map</Typography>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item>
                        <TextField style={{ marginTop: '30px' }} id="routeNo" label="Enter Bus Route Number" variant="outlined" value={routeNumber} onChange={(e) => setRouteNumber(e.target.value)} required />
                    </Grid>
                    <Grid item>
                        <StyledButton style={{ marginTop: '30px', color: 'black' }} variant="contained" onClick={handleTrackBus}>Track Bus</StyledButton>
                    </Grid>
                </Grid>
                <LoadScript googleMapsApiKey="AIzaSyDhrItJrXh-Tpf15zjY6mB_mX3bHzi5ZL8">
                    <GoogleMap
                        mapContainerStyle={{ marginTop: '10px', height: '400px', width: '100%' }}
                        center={busLocation} // Center map on bus location
                        zoom={12}
                    >
                        {showMarker && busLocation && <Marker position={busLocation} title="Bus Location" />}
                    </GoogleMap>
                </LoadScript>
            </Container>
        </ThemeProvider>
    );
};

export default BusTrackingMap;
