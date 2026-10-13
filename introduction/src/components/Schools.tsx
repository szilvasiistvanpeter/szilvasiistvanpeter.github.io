import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Paper,
  Container,
  Stack,
} from '@mui/material';
import { education } from '../const';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Schools() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('nav.schools');
  }, [t]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 1.5 }}
          >
            {t('education.eyebrow')}
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 750, letterSpacing: '-0.04em' }}>
            {t('education.title')}
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
            {t('education.subtitle')}
          </Typography>
        </Stack>

        {education.map((item, index) => (
          <Box key={item.degree} sx={{ display: 'flex', mb: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 1,
                  borderRadius: '50%',
                  display: 'flex',
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                {item.icon}
              </Paper>
              {index !== education.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ width: 1, bgcolor: 'divider', my: 1 }}
                />
              )}
            </Box>

            <Card
              variant="outlined"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                borderColor: 'divider',
                borderRadius: 3,
                borderLeft: '4px solid',
                borderLeftColor: 'primary.main',
              }}
            >
              <CardContent>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 'bold', color: 'text.secondary' }}
                >
                  {item.period}
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: 'bold', my: 0.5 }}
                >
                  {t(item.degree)}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary.light"
                  sx={{ fontWeight: 500, mb: 1 }}
                >
                  {t(item.institution)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(item.description)}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
