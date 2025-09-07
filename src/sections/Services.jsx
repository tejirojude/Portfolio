import { Container, Grid, Card, CardContent, Box, Typography } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import SettingsIcon from '@mui/icons-material/Settings'
import GroupIcon from '@mui/icons-material/Group'
import PsychologyIcon from '@mui/icons-material/Psychology'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Services() {
  const services = [
    {
      title: 'Business Setup & Launch',
      description: 'Step-by-step guidance to establish your domiciliary care service, from registration to readiness.',
      icon: <BusinessIcon sx={{ fontSize: 50, color: '#00d9ff' }} />,
    },
    {
      title: 'CQC & Ofsted Excellence',
      description: 'Hands-on support to meet and exceed regulatory standards with policies, audits, and compliance frameworks.',
      icon: <VerifiedUserIcon sx={{ fontSize: 50, color: '#8b5cf6' }} />,
    },
    {
      title: 'Digital Integration',
      description: 'Tech-forward strategies for record-keeping, scheduling, and data analytics tailored to your service.',
      icon: <SettingsIcon sx={{ fontSize: 50, color: '#ff6b35' }} />,
    },
    {
      title: 'Team Development & Training',
      description: 'Staff inductions, safeguarding training, PBS approaches, and conflict resolution to build strong teams.',
      icon: <GroupIcon sx={{ fontSize: 50, color: '#00d9ff' }} />,
    },
    {
      title: 'Specialist Support',
      description: 'Support models for individuals with autism, learning disabilities, mental health conditions, and complex needs.',
      icon: <PsychologyIcon sx={{ fontSize: 50, color: '#8b5cf6' }} />,
    },
    {
      title: 'Quality Assurance & Audits',
      description: 'Robust quality assurance processes, outcome-based care planning, and ongoing service reviews.',
      icon: <CheckCircleIcon sx={{ fontSize: 50, color: '#ff6b35' }} />,
    },
  ]

  return (
    <Box id="services" sx={{ py: 10, background: 'linear-gradient(135deg, #0a0e27 0%, #1e293b 100%)' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" color="white" gutterBottom sx={{ mb: 8 }}>
          Expert Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
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
  )
}
