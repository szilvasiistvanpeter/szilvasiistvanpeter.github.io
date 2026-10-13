import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { teachingCourses } from '../const';

export default function Teaching() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('nav.teaching');
  }, [t]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 1.5 }}
          >
            {t('teaching.eyebrow')}
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 750, letterSpacing: '-0.04em' }}
          >
            {t('teaching.title')}
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
            {t('teaching.subtitle')}
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {teachingCourses.map((course) => (
            <Grid size={{ xs: 12, md: 6 }} key={course.title}>
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
                <CardContent
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    '&:last-child': { pb: { xs: 2.5, sm: 3 } },
                  }}
                >
                  <Stack spacing={2} sx={{ height: '100%' }}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          p: 1,
                          borderRadius: 2,
                          color: 'primary.light',
                          bgcolor: 'action.hover',
                        }}
                      >
                        {course.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 700, lineHeight: 1.35 }}>
                          {t(course.title)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          {t(course.description)}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                      {course.topics.map((topic) => (
                        <Chip
                          key={topic}
                          size="small"
                          label={topic}
                          sx={{ bgcolor: 'action.hover', color: 'text.secondary' }}
                        />
                      ))}
                    </Stack>

                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={1}
                      sx={{ mt: 'auto' }}
                    >
                      <Button
                        component="a"
                        href={course.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<ArrowOutwardRoundedIcon />}
                      >
                        {t('teaching.repository')}
                      </Button>
                      <Button
                        component="a"
                        href={course.courseInfo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        startIcon={<MenuBookOutlinedIcon />}
                      >
                        {t('teaching.courseInfo')}
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
