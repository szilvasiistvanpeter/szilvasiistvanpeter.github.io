import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ResponsiveFooter() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: { xs: 3, md: 4 },
        bgcolor: 'transparent',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          {t('footer.text')}
        </Typography>
      </Container>
    </Box>
  );
}
