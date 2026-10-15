import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { contactLinks, education, jobs, teachingCourses } from '../const';
import './Cv.css';

export default function Cv() {
  const { t, i18n } = useTranslation();
  const [cvLanguage, setCvLanguage] = useState<'hu' | 'en'>(
    i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'hu',
  );
  const cvT = i18n.getFixedT(cvLanguage);

  useEffect(() => {
    document.title = t('cv.title');
  }, [t]);

  const selectCvLanguage = (_event: MouseEvent<HTMLElement>, language: 'hu' | 'en' | null) => {
    if (language) setCvLanguage(language);
  };

  return (
    <Box className="cv-page" sx={{ flexGrow: 1, bgcolor: 'background.default', py: { xs: 3, md: 6 } }}>
      <Container maxWidth="md">
        <Stack
          className="cv-controls"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { sm: 'center' }, justifyContent: 'space-between', mb: 3 }}
        >
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
              {t('cv.eyebrow')}
            </Typography>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 750 }}>
              {t('cv.title')}
            </Typography>
            <Typography color="text.secondary">{t('cv.printHint')}</Typography>
          </Box>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={cvLanguage}
              onChange={selectCvLanguage}
              aria-label={t('cv.language')}
            >
              <ToggleButton value="hu" aria-label={t('cv.hungarian')}>HU</ToggleButton>
              <ToggleButton value="en" aria-label={t('cv.english')}>EN</ToggleButton>
            </ToggleButtonGroup>
            <Button variant="contained" startIcon={<PictureAsPdfOutlinedIcon />} onClick={() => window.print()}>
              {t('cv.download')}
            </Button>
          </Stack>
        </Stack>

        <Box component="article" className="cv-sheet" lang={cvLanguage}>
          <Box className="cv-header">
            <Typography component="h1" className="cv-name">Szilvási István Péter</Typography>
            <Typography className="cv-role">{cvT('about.role')} · {cvT('cv.lecturerRole')}</Typography>
            <Stack className="cv-contact" direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 0.5 }}>
              {contactLinks.map((contact) => (
                <Link key={contact.href} href={contact.href} color="inherit" underline="none">{contact.value}</Link>
              ))}
            </Stack>
          </Box>

          <CvSection title={cvT('cv.profile')}>
            <Typography className="cv-body">{cvT('cv.summary')}</Typography>
          </CvSection>

          <CvSection title={cvT('cv.experience')}>
            <Stack spacing={1.5}>
              {jobs.map((job) => (
                <Box key={job.company} className="cv-entry">
                  <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography className="cv-entry-title">{cvT(job.role)}</Typography>
                    <Typography className="cv-period">{job.period.replace('jelenleg', cvT('jobs.present'))}</Typography>
                  </Stack>
                  <Typography className="cv-company">{job.company}</Typography>
                  {job.courses && (
                    <Typography className="cv-body cv-detail">
                      {job.courses.map((course) => cvT(course)).join(' · ')}
                    </Typography>
                  )}
                  <Typography className="cv-body cv-detail">{job.tech}</Typography>
                </Box>
              ))}
            </Stack>
          </CvSection>

          <CvSection title={cvT('cv.education')}>
            <Stack spacing={1.25}>
              {education.map((item) => (
                <Box key={item.period + item.degree} className="cv-entry">
                  <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <Typography className="cv-entry-title">{cvT(item.degree)}</Typography>
                    <Typography className="cv-period">{item.period}</Typography>
                  </Stack>
                  <Typography className="cv-company">{item.institution}</Typography>
                  <Typography className="cv-body cv-detail">{cvT(item.description)}</Typography>
                </Box>
              ))}
            </Stack>
          </CvSection>

          <CvSection title={cvT('cv.teaching')}>
            <Stack spacing={1.25}>
              {teachingCourses.map((course) => (
                <Box key={course.title} className="cv-entry">
                  <Typography className="cv-entry-title">{cvT(course.title)}</Typography>
                  <Typography className="cv-body">{cvT(course.description)}</Typography>
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
