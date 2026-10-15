import { useEffect, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Chip, Container, Divider, Link, Stack, Typography } from '@mui/material';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { contactLinks, education, jobs, teachingCourses } from '../const';
import './Cv.css';

export default function Cv() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('cv.title');
  }, [t]);

  return (
    <Box className="cv-page" sx={{ flexGrow: 1, bgcolor: 'background.default', py: { xs: 3, md: 6 } }}>
      <Container maxWidth="md">
        <Stack className="cv-controls" direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ alignItems: { sm: 'center' }, justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography variant="overline" color="primary.light" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>{t('cv.eyebrow')}</Typography>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 750 }}>{t('cv.title')}</Typography>
            <Typography color="text.secondary">{t('cv.printHint')}</Typography>
          </Box>
          <Button variant="contained" startIcon={<PictureAsPdfOutlinedIcon />} onClick={() => window.print()}>{t('cv.download')}</Button>
        </Stack>

        <Box component="article" className="cv-sheet">
          <Box className="cv-header">
            <Typography component="h1" className="cv-name">Szilvási István Péter</Typography>
            <Typography className="cv-role">{t('about.role')} · {t('cv.lecturerRole')}</Typography>
            <Stack className="cv-contact" direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 0.5 }}>
              {contactLinks.map((contact) => (
                <Link key={contact.href} href={contact.href} color="inherit" underline="none">{contact.value}</Link>
              ))}
            </Stack>
          </Box>

          <CvSection title={t('cv.profile')}>
            <Typography className="cv-body">{t('cv.summary')}</Typography>
          </CvSection>

          <CvSection title={t('cv.experience')}>
            <Stack spacing={1.5}>
              {jobs.map((job) => (
                <Box key={job.company} className="cv-entry">
                  <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography className="cv-entry-title">{job.role && t(job.role)} · {job.company}</Typography>
                    <Typography className="cv-period">{job.period.replace('jelenleg', t('jobs.present'))}</Typography>
                  </Stack>
                  {job.courses && <Typography className="cv-body cv-detail">{job.courses.map((course) => t(course)).join(' · ')}</Typography>}
                  <Typography className="cv-body cv-detail">{job.tech}</Typography>
                </Box>
              ))}
            </Stack>
          </CvSection>

          <CvSection title={t('cv.education')}>
            <Stack spacing={1.25}>
              {education.map((item) => (
                <Box key={item.period + item.degree} className="cv-entry">
                  <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography className="cv-entry-title">{t(item.degree)}</Typography>
                    <Typography className="cv-period">{item.period}</Typography>
                  </Stack>
                  <Typography className="cv-body">{item.institution}</Typography>
                  <Typography className="cv-body cv-detail">{t(item.description)}</Typography>
                </Box>
              ))}
            </Stack>
          </CvSection>

          <CvSection title={t('cv.teaching')}>
            <Stack spacing={1.25}>
              {teachingCourses.map((course) => (
                <Box key={course.title} className="cv-entry">
                  <Typography className="cv-entry-title">{t(course.title)}</Typography>
                  <Typography className="cv-body">{t(course.description)}</Typography>
                  <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                    {course.topics.map((topic) => <Chip className="cv-topic" key={topic} size="small" label={topic} />)}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </CvSection>
        </Box>
      </Container>
    </Box>
  );
}

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box component="section" className="cv-section">
      <Typography component="h2" className="cv-section-title">{title}</Typography>
      <Divider className="cv-divider" />
      {children}
    </Box>
  );
}
