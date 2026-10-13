import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { contactLinks } from '../const';

export default function Contacts() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('nav.contact');
  }, [t]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 }, maxWidth: 720 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 1.5 }}
          >
            {t('contacts.eyebrow')}
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 750, letterSpacing: '-0.04em' }}
          >
            {t('contacts.title')}
          </Typography>
          <Typography color="text.secondary">
            {t('contacts.subtitle')}
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {contactLinks.map((link) => {
            const isExternal = link.href.startsWith('https://');
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={link.label}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderColor: 'divider',
                    borderRadius: 3,
                    transition: 'border-color 160ms ease, transform 160ms ease',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Button
                    component="a"
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    fullWidth
                    sx={{
                      minHeight: 112,
                      p: 2.5,
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.primary',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ width: '100%', alignItems: 'center' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          p: 1.25,
                          borderRadius: 2,
                          color: 'primary.light',
                          bgcolor: 'action.hover',
                        }}
                      >
                        {link.icon}
                      </Box>
                      <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                        <Typography
                          variant="overline"
                          color="text.secondary"
                          sx={{ lineHeight: 1.5 }}
                        >
                          {t(link.label)}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ overflowWrap: 'anywhere', fontWeight: 600 }}
                        >
                          {link.value}
                        </Typography>
                      </Box>
                      {isExternal && (
                        <ArrowOutwardRoundedIcon
                          fontSize="small"
                          sx={{ color: 'text.secondary' }}
                        />
                      )}
                    </Stack>
                  </Button>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Card
          variant="outlined"
          sx={{
            mt: 2,
            p: { xs: 2, sm: 2.5 },
            display: 'flex',
            gap: 1.5,
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderColor: 'divider',
            borderRadius: 3,
          }}
        >
          <LocationOnOutlinedIcon sx={{ color: 'secondary.main' }} />
          <Typography variant="body2" color="text.secondary">
            {t('contacts.location')}
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
