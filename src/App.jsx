import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Paper,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import { useState } from 'react';

const backgroundImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // Example Unsplash image

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    handleMenuClose();
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #0a0e27 0%, #1e293b 50%, #0f172a 100%)',
      minHeight: '100vh'
    }}>
      {/* Navigation Bar */}
            {/* Navigation */}
      <AppBar position="sticky" sx={{ 
        backgroundColor: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #00d9ff 30%, #8b5cf6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              Jude Health & Social Care Consulting
            </Typography>
            
            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        color: '#00d9ff',
                        background: 'rgba(0, 217, 255, 0.1)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                sx={{ 
                  color: '#00d9ff',
                  '&:hover': {
                    background: 'rgba(0, 217, 255, 0.1)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Mobile Menu Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  background: 'rgba(10, 14, 39, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  mt: 1
                }
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.id)}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(0, 217, 255, 0.1)',
                      color: '#00d9ff',
                    },
                    minWidth: 120,
                    py: 1.5
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section with 3D Effects */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(135deg, #0a0e27 0%, #1e293b 50%, #0f172a 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          pt: 8,
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 6, textAlign: 'center' }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ color: 'white', mb: 4, textAlign: 'center' }}>
                <Box sx={{ 
                  mb: 3, 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img 
                    src="/logo.png"
                    alt="Jude Health & Social Care Consulting Logo"
                    style={{
                      height: '120px',
                      width: 'auto',
                      filter: 'brightness(0) saturate(100%) invert(65%) sepia(78%) saturate(2947%) hue-rotate(169deg) brightness(103%) contrast(101%)'
                    }}
                  />
                </Box>
                <Typography variant="h1" component="h1" gutterBottom sx={{ 
                  textShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
                  lineHeight: 1.2,
                  mb: 3
                }}>
                  Jude Health & Social Care Consulting
                </Typography>
                <Typography variant="h5" sx={{ 
                  color: '#94a3b8', 
                  mb: 4,
                  fontWeight: 400,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  Empowering Care Providers Through Expert Guidance, Digital Innovation & CQC Excellence
                </Typography>
                <Button 
                  variant="contained" 
                  size="large" 
                  href="#contact"
                  sx={{ 
                    mt: 2, 
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #00d9ff 0%, #8b5cf6 100%)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0, 217, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'perspective(1000px) rotateX(0deg)',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateX(-5deg) translateY(-4px)',
                      boxShadow: '0 16px 48px rgba(0, 217, 255, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Book Your Free Consultation
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={8} sx={{ 
                  p: 4, 
                  borderRadius: 4, 
                  maxWidth: 500,
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg) scale(1.02)',
                  },
                  transition: 'all 0.4s ease'
                }}>
                  <Typography variant="h4" component="h2" color="primary" fontWeight={600} gutterBottom sx={{ textAlign: 'center' }}>
                    Your Success Journey Starts Here
                  </Typography>
                  <List sx={{ mt: 2 }}>
                    {[
                      { text: "Start Your Domiciliary Care, Supported Living or Residential Care Business", icon: <BusinessIcon sx={{ color: '#00d9ff' }} /> },
                      { text: "Achieve CQC Inspection & Compliance Excellence", icon: <VerifiedUserIcon sx={{ color: '#8b5cf6' }} /> },
                      { text: "Integrate Smart Digital Systems", icon: <SettingsIcon sx={{ color: '#ff6b35' }} /> },
                      { text: "Meet Quality Standards with Confidence", icon: <CheckCircleIcon sx={{ color: '#00d9ff' }} /> },
                      { text: "Build a Trained, Resilient Workforce", icon: <GroupIcon sx={{ color: '#8b5cf6' }} /> },
                      { text: "Get Help with Recruitment", icon: <GroupIcon sx={{ color: '#ff6b35' }} /> },
                      { text: "Resolve Conflicts & Strengthen Teams", icon: <GroupIcon sx={{ color: '#00d9ff' }} /> }
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ 
                        py: 1.5,
                        '&:hover': {
                          transform: 'translateX(8px)',
                          transition: 'all 0.3s ease'
                        }
                      }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.text} 
                          sx={{ 
                            '& .MuiListItemText-primary': { 
                              fontSize: '1rem',
                              fontWeight: 500,
                              color: 'white'
                            } 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 10, background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" color="primary" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
            About Me
          </Typography>
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    mx: 'auto',
                    mb: 3,
                    background: 'linear-gradient(135deg, #00d9ff 0%, #8b5cf6 100%)',
                    fontSize: '4rem',
                    fontWeight: 700,
                    boxShadow: '0 20px 60px rgba(0, 217, 255, 0.3)',
                    transform: 'perspective(1000px) rotateX(-10deg)',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateX(0deg) scale(1.05)',
                    },
                    transition: 'all 0.4s ease'
                  }}
                >
                  J
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={6} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'white', textAlign: 'left' }}>
                  I am a dedicated Health and Social Care Consultant with extensive experience in both adult and children's services, helping providers meet the highest standards of care delivery and compliance.
                </Typography>
                
                <Typography variant="h6" sx={{ color: '#00d9ff', mt: 3, mb: 2, textAlign: 'left', fontWeight: 600 }}>
                  🎓 My Qualifications:
                </Typography>
                <Box sx={{ my: 3, textAlign: 'left' }}>
                  {[
                    "Level 5 Diploma in Health & Social Care (Adults and Children)",
                    "PBS (Positive Behaviour Support) Level 4 Specialist", 
                    "BSc in Mathematics",
                    "Background in Software Engineering",
                    "More than 10 years working with vulnerable adults, and individuals with severe learning disability and autism"
                  ].map((qualification, index) => (
                    <Typography key={index} variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#94a3b8', mb: 1, pl: 2 }}>
                      • {qualification}
                    </Typography>
                  ))}
                </Box>
                
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'white', textAlign: 'left', mt: 3 }}>
                  This unique combination of care sector experience, academic rigour, and technical expertise enables me to deliver consultancy that is person-centred, data-informed, and digitally efficient.
                </Typography>
                
                <Typography variant="h6" sx={{ color: '#8b5cf6', mt: 3, mb: 2, textAlign: 'left', fontWeight: 600 }}>
                  I specialise in:
                </Typography>
                <Box sx={{ my: 3, textAlign: 'left' }}>
                  {[
                    "Helping new providers register and launch successfully",
                    "Preparing services for CQC and Ofsted inspections",
                    "Introducing technology that improves care and compliance",
                    "Supporting teams with conflict resolution, training, and leadership development",
                    "Creating documents, delivering training, communication with local authorities"
                  ].map((specialization, index) => (
                    <Typography key={index} variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#94a3b8', mb: 1, pl: 2 }}>
                      • {specialization}
                    </Typography>
                  ))}
                </Box>
                
                <Box sx={{ 
                  mt: 4, 
                  p: 3, 
                  borderRadius: 3, 
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  border: '1px solid rgba(0, 217, 255, 0.2)'
                }}>
                  <Typography variant="body1" sx={{ 
                    fontSize: '1.1rem', 
                    lineHeight: 1.7, 
                    color: '#00d9ff', 
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontWeight: 500
                  }}>
                    "My mission is to empower care providers to build safe, sustainable, and impactful services that put people first."
                  </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={3}>
                    {[
                      { icon: <SchoolIcon sx={{ color: '#00d9ff' }} />, text: "Level 5 Health & Social Care Diploma" },
                      { icon: <PsychologyIcon sx={{ color: '#8b5cf6' }} />, text: "PBS Level 4 Specialist" },
                      { icon: <SettingsIcon sx={{ color: '#ff6b35' }} />, text: "Technology Integration Expert" },
                      { icon: <DescriptionIcon sx={{ color: '#00d9ff' }} />, text: "Documentation & Training Specialist" }
                    ].map((item, index) => (
                      <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box sx={{ 
                          textAlign: 'center', 
                          p: 2,
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            transition: 'all 0.3s ease'
                          }
                        }}>
                          <Box sx={{ mb: 1 }}>{item.icon}</Box>
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {item.text}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 10, background: 'linear-gradient(135deg, #0a0e27 0%, #1e293b 100%)' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" color="white" gutterBottom sx={{ mb: 8 }}>
            Expert Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Business Setup & Launch",
                description: "Step-by-step guidance to establish your domiciliary care service, from registration to readiness.",
                icon: <BusinessIcon sx={{ fontSize: 50, color: '#00d9ff' }} />
              },
              {
                title: "CQC & Ofsted Excellence", 
                description: "Hands-on support to meet and exceed regulatory standards with policies, audits, and compliance frameworks.",
                icon: <VerifiedUserIcon sx={{ fontSize: 50, color: '#8b5cf6' }} />
              },
              {
                title: "Digital Integration",
                description: "Tech-forward strategies for record-keeping, scheduling, and data analytics tailored to your service.",
                icon: <SettingsIcon sx={{ fontSize: 50, color: '#ff6b35' }} />
              },
              {
                title: "Team Development & Training",
                description: "Staff inductions, safeguarding training, PBS approaches, and conflict resolution to build strong teams.",
                icon: <GroupIcon sx={{ fontSize: 50, color: '#00d9ff' }} />
              },
              {
                title: "Specialist Support",
                description: "Support models for individuals with autism, learning disabilities, mental health conditions, and complex needs.",
                icon: <PsychologyIcon sx={{ fontSize: 50, color: '#8b5cf6' }} />
              },
              {
                title: "Quality Assurance & Audits",
                description: "Robust quality assurance processes, outcome-based care planning, and ongoing service reviews.",
                icon: <CheckCircleIcon sx={{ fontSize: 50, color: '#ff6b35' }} />
              }
            ].map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card elevation={6} sx={{ 
                  height: '100%', 
                  borderRadius: 4,
                  transform: 'perspective(1000px) rotateX(5deg)',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateX(0deg) translateY(-10px)',
                  },
                  transition: 'all 0.4s ease'
                }}>
                  <CardContent sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ mb: 3 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom color="primary" fontWeight={600} sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#94a3b8', flexGrow: 1 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" textAlign="center" color="white" gutterBottom sx={{ mb: 4 }}>
            Let's Work Together
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ color: '#94a3b8', mb: 6, mx: 'auto', maxWidth: 600 }}>
            Ready to elevate your service or start your care business? Let's connect and build something that makes a difference.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={8} sx={{ 
              p: 6, 
              borderRadius: 4,
              textAlign: 'center',
              maxWidth: 600,
              width: '100%',
              transform: 'perspective(1000px) rotateX(-5deg)',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(0deg) scale(1.02)',
              },
              transition: 'all 0.4s ease'
            }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Box sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                  border: '1px solid rgba(0, 217, 255, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 35px rgba(0, 217, 255, 0.2)',
                  },
                  transition: 'all 0.3s ease'
                }}>
                  <Typography variant="h6" sx={{ color: '#00d9ff', mb: 1 }}>📧 Email</Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>jude@ablewaysupport.co.uk</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(255, 107, 53, 0.1) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 35px rgba(139, 92, 246, 0.2)',
                  },
                  transition: 'all 0.3s ease'
                }}>
                  <Typography variant="h6" sx={{ color: '#8b5cf6', mb: 1 }}>📞 Phone</Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>07706 782821</Typography>
                </Box>
              </Grid>
            </Grid>
            <Button 
              variant="contained" 
              size="large" 
              href="https://wa.me/447706782821"
              target="_blank"
              sx={{ 
                mt: 4, 
                py: 2,
                px: 6,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '12px',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get In Touch Today
            </Button>
            </Paper>
          </Box>
        </Container>
      </Box>      {/* Footer */}
      <Box component="footer" sx={{ 
        py: 6, 
        background: 'linear-gradient(135deg, #0a0e27 0%, #1e293b 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                  Jude Health & Social Care Consulting
                </Typography>
                <Typography variant="body1" sx={{ color: '#94a3b8', mb: 2 }}>
                  © 2025 Jude Health & Social Care Consulting. All rights reserved.
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b' }}>
                  Professional Healthcare Consulting • CQC Compliance • Technology Integration
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                <Button 
                  variant="outlined" 
                  href="https://wa.me/447706782821"
                  target="_blank"
                  sx={{ 
                    borderColor: '#00d9ff',
                    color: '#00d9ff',
                    '&:hover': {
                      borderColor: '#8b5cf6',
                      color: '#8b5cf6',
                      background: 'rgba(139, 92, 246, 0.1)'
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default App
