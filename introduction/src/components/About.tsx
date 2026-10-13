import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
  Stack,
  Container,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('nav.about');
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 2, md: 4 },
        bgcolor: '#0a1929',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: 'center',
                bgcolor: '#132f4c',
                color: 'white',
                borderRadius: 4,
                border: '1px solid #1e4976',
              }}
            >
              <Avatar
                src="/me.jpg"
                sx={{
                  width: 150,
                  height: 150,
                  m: '0 auto 20px',
                  border: `4px solid 'var(--brand-blue)'`,
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Szilvási Péter
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--brand-blue)', mb: 2 }}
              >
                Senior Full-Stack Developer
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{ mb: 2, justifyContent: 'center' }}
              >
                <Chip
                  icon={<LocationOnIcon sx={{ color: 'white !important' }} />}
                  label="Eger"
                  sx={{ bgcolor: 'var(--brand-blue)', color: 'white' }}
                />
                <Chip
                  icon={<FavoriteIcon sx={{ color: '#ff1744 !important' }} />}
                  label={t('about.relationship')}
                  sx={{
                    bgcolor: 'rgba(255,23,68,0.1)',
                    color: 'white',
                    border: '1px solid #ff1744',
                  }}
                />
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#132f4c',
                color: 'white',
                borderRadius: 4,
                border: '1px solid #1e4976',
                height: '100%',
              }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 3, fontWeight: 'bold', color: 'var(--brand-blue)' }}
              >
                {t('about.title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, textAlign: 'justify', mb: 3 }}
              >
                {t('about.content')}
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <PetsIcon sx={{ color: 'var(--brand-blue)' }} />
                    <Typography variant="body2">{t('about.pet')}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <SportsEsportsIcon sx={{ color: 'var(--brand-blue)' }} />
                    <Typography variant="body2">{t('about.gamer')}</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <DnsOutlinedIcon sx={{ color: 'var(--brand-blue)' }} />
                    <Typography variant="body2">{t('about.homelab')}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
