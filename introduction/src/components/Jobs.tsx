import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { jobs } from '../const';

export default function Jobs() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('nav.jobs');
  }, [t]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 1.5 }}
          >
            {t('jobs.eyebrow')}
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 750, letterSpacing: '-0.04em' }}>
            {t('jobs.title')}
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
            {t('jobs.subtitle')}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {jobs.map((job, index) => (
            <Box
              key={job.company}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '20px minmax(0, 1fr)', sm: '180px 20px minmax(0, 1fr)' },
                columnGap: { xs: 1.5, sm: 2.5 },
                alignItems: 'stretch',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  pt: 2.2,
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                  {job.period}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 12,
                    height: 12,
                    mt: 2.5,
                    borderRadius: '50%',
                    bgcolor: job.current ? 'primary.light' : 'text.disabled',
                    boxShadow: job.current ? '0 0 0 5px rgba(100, 181, 246, 0.12)' : 'none',
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                />
                {index < jobs.length - 1 && (
                  <Box sx={{ width: '1px', flexGrow: 1, bgcolor: 'divider', mt: 1.5 }} />
                )}
              </Box>

              <Card
                variant="outlined"
                sx={{
                  bgcolor: 'background.paper',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'border-color 160ms ease, transform 160ms ease',
                  '&:hover': { borderColor: 'primary.dark', transform: 'translateY(-2px)' },
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 2.5 }, '&:last-child': { pb: { xs: 2, sm: 2.5 } } }}>
                  <Stack spacing={1.5}>
                    <Stack
                      direction={{ xs: 'column-reverse', sm: 'row' }}
                      spacing={1}
                      sx={{ justifyContent: 'space-between', alignItems: { sm: 'flex-start' } }}
                    >
                      <Box>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                          {job.company}
                        </Typography>
                        <Typography color="primary.light" sx={{ mt: 0.5, fontWeight: 600 }}>
                          {t(job.role)}
                        </Typography>
                      </Box>
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        {job.current && (
                          <Chip size="small" color="success" variant="outlined" label={t('jobs.current')} />
                        )}
                        <Chip
                          size="small"
                          icon={<CalendarMonthOutlinedIcon />}
                          label={job.period}
                          sx={{ display: { xs: 'inline-flex', sm: 'none' }, maxWidth: '100%' }}
                        />
                      </Stack>
                    </Stack>

                    {job.courses && (
                      <>
                        <Divider />
                        <Box>
                          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                            <SchoolOutlinedIcon fontSize="small" color="primary" />
                            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                              {t('jobs.coursesTitle')}
                            </Typography>
                          </Stack>
                          <Stack direction="row" useFlexGap flexWrap="wrap" gap={1}>
                            {job.courses.map((course) => (
                              <Chip key={course} size="small" label={t(course)} variant="outlined" color="primary" />
                            ))}
                          </Stack>
                        </Box>
                      </>
                    )}

                    <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                      <WorkOutlineIcon fontSize="small" sx={{ color: 'text.secondary', mt: 0.25 }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.75 }}>
                          {t('jobs.technologies')}
                        </Typography>
                        <Stack direction="row" useFlexGap flexWrap="wrap" gap={0.75}>
                          {job.tech.split(',').map((technology) => (
                            <Chip
                              key={technology.trim()}
                              size="small"
                              label={technology.trim()}
                              sx={{ bgcolor: 'action.hover', color: 'text.secondary' }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
