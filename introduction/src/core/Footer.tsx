import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { contactLinks } from '../const';
import { useTranslation } from 'react-i18next';

export default function ResponsiveFooter() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: { xs: 3, md: 4 },
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2.5}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{ alignItems: { xs: 'flex-start', sm: 'center' } }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mr: 1 }}>
              {t('footer.connect')}
            </Typography>
            <Stack
              direction="row"
              useFlexGap
              sx={{ flexWrap: 'wrap', gap: 1 }}
            >
              {contactLinks.map((link) => {
                const isExternal = link.href.startsWith('https://');
                return (
                  <Button
                    key={link.label}
                    component="a"
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    variant="outlined"
                    size="small"
                    startIcon={link.icon}
                    aria-label={link.value}
                    sx={{
                      color: 'text.primary',
                      borderColor: 'divider',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    {link.value}
                  </Button>
                );
              })}
            </Stack>
          </Stack>

          <Typography variant="caption" color="text.secondary">
            {t('footer.text')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
