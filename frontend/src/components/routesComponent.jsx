import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, AppBar, Toolbar, Table, TableHead, TableBody, TableRow, TableCell, createTheme, ThemeProvider } from '@mui/material';
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

function RoutesComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken') !== null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('authToken') !== null);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <>
                <StyledAppBar color="primary">
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
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Bus Routes
                    </Typography>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Route No</TableCell>
                                <TableCell>Driver Name</TableCell>
                                <TableCell>Mobile Number</TableCell>
                                <TableCell>Routes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>Laxma Reddy</TableCell>
                                <TableCell>9948029392</TableCell>
                                <TableCell>@Suraram 6.50 AM- Jeedimetla-Shapur- Chintal -IDPL- Balanagar X Road -Peeroz Guda- Boji Function Hall (Balanagar) - Bowenpally (CMR Function Hall)- Bapuji Nagar (Sarojini Pulla Reddy Hospital)- Diamond Point -JBS - Sangeeth - College</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>Ramachandraiah</TableCell>
                                <TableCell>7731914909</TableCell>
                                <TableCell>Indira Park – 7:05AM - TDP Office - Ashok Nagar X Road (Before Khaman) - RTC X Road Sandhya Theatre- Bus Bhavan – Ramnagar Gundu- Vidya Nagar- Shivam Road- Amberpet- Ramanthapur Bharat Petrol pump- Alkapuri- Rock Town- Kamineni-College.</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>3</TableCell>
                                <TableCell>Khaleel</TableCell>
                                <TableCell>9885026686</TableCell>
                                <TableCell>Masab Tank Under Flyover-7.00AM- NMDC- Mehdipatnam (Before Rythu Bazar) - Rathibowli- Raya Dharga-Gachibowli- APPA Junction-TSPA- Rajendra Nagar- College.</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>Ramachandraiah</TableCell>
                                <TableCell>7731914909</TableCell>
                                <TableCell>Indira Park – 7:05AM - TDP Office - Ashok Nagar X Road (Before Khaman) - RTC X Road Sandhya Theatre- Bus Bhavan – Ramnagar Gundu- Vidya Nagar- Shivam Road- Amberpet- Ramanthapur Bharat Petrol pump- Alkapuri- Rock Town- Kamineni-College.</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>Ramachandraiah</TableCell>
                                <TableCell>7731914909</TableCell>
                                <TableCell>Indira Park – 7:05AM - TDP Office - Ashok Nagar X Road (Before Khaman) - RTC X Road Sandhya Theatre- Bus Bhavan – Ramnagar Gundu- Vidya Nagar- Shivam Road- Amberpet- Ramanthapur Bharat Petrol pump- Alkapuri- Rock Town- Kamineni-College.</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>Ramachandraiah</TableCell>
                                <TableCell>7731914909</TableCell>
                                <TableCell>Indira Park – 7:05AM - TDP Office - Ashok Nagar X Road (Before Khaman) - RTC X Road Sandhya Theatre- Bus Bhavan – Ramnagar Gundu- Vidya Nagar- Shivam Road- Amberpet- Ramanthapur Bharat Petrol pump- Alkapuri- Rock Town- Kamineni-College.</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>2</TableCell>
                                <TableCell>Ramachandraiah</TableCell>
                                <TableCell>7731914909</TableCell>
                                <TableCell>Indira Park – 7:05AM - TDP Office - Ashok Nagar X Road (Before Khaman) - RTC X Road Sandhya Theatre- Bus Bhavan – Ramnagar Gundu- Vidya Nagar- Shivam Road- Amberpet- Ramanthapur Bharat Petrol pump- Alkapuri- Rock Town- Kamineni-College.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </StyledContainer>
            </>
        </ThemeProvider>
    );
}

export default RoutesComponent;
