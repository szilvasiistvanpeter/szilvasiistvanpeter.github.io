import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import TerminalIcon from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { techStack } from '../const';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Project() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('nav.project');
  }, []);

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid size={{ xs: 12, md: 10, lg: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              bgcolor: 'background.paper',
              borderRadius: 4,
              border: '1px solid', borderColor: 'divider',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                bgcolor: 'rgba(233, 184, 111, 0.14)',
                borderRadius: '50%',
                filter: 'blur(30px)',
              }}
            />

            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 1, color: 'primary.light' }}
            >
              Portfolio Project
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
              {t('project.title')}
            </Typography>

            <Divider sx={{ bgcolor: 'divider', mb: 3 }} />

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <TerminalIcon
                    fontSize="small"
                    sx={{ color: 'primary.light' }}
                  />{' '}
                  {t('project.subtitle')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'text.primary', textAlign: 'justify', mb: 2 }}
                >
                  {t('project.description')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                  {t('project.subdescription')}
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/szilvasiistvanpeter/introduction"
                    target="_blank"
                    sx={{
                      bgcolor: 'primary.light',
                      '&:hover': { bgcolor: 'primary.dark' },
                    }}
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DescriptionIcon />}
                    href="https://szilvasiistvanpeter.github.io/docs/"
                    target="_blank"
                    sx={{ color: 'text.primary', borderColor: 'divider' }}
                  >
                    MkDocs
                  </Button>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <IntegrationInstructionsIcon
                    fontSize="small"
                    sx={{ color: 'primary.light' }}
                  />{' '}
                  Stack & Tools
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {techStack.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        bgcolor: 'action.hover',
                        color: 'text.primary',
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>

                <Paper
                  sx={{
                    mt: 3,
                    p: 2,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.light',
                      fontWeight: 'bold',
                      display: 'block',
                      mb: 1,
                    }}
                  >
                    CI/CD WORKFLOW
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: '#888', display: 'block' }}
                  >
                    • Prettier & Linting
                    <br />
                    • GitHub Actions build
                    <br />• MkDocs
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
