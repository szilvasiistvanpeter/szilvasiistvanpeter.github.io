import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  MenuItem,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { pages } from '../const';

export default function ResponsiveAppBar() {
  const { t, i18n } = useTranslation('translation', { useSuspense: false });
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'hu' ? 'en' : 'hu';
    i18n.changeLanguage(newLang);
  };

  return (
    <AppBar
      className="site-header"
      position="sticky"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: 1,
        borderColor: 'divider',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/favicon.svg"
            alt=""
            sx={{
              display: { xs: 'none', lg: 'flex' },
              width: 32,
              height: 32,
              mr: 1,
              borderRadius: 1,
            }}
          />

          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('welcome')}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label={t('nav.menu')}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', lg: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  selected={location.pathname === page.path}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: 'inherit',
                      textAlign: 'center',
                      width: '100%',
                    }}
                  >
                    {t(page.name)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', lg: 'flex' },
              gap: { md: 0, lg: 0.5 },
            }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Button
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    px: { md: 0.8, lg: 1.2 },
                    color: isActive ? 'primary.light' : 'text.secondary',
                    display: 'block',
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                    fontWeight: isActive ? 700 : 500,
                    borderBottom: isActive
                      ? '2px solid'
                      : '2px solid transparent',
                    borderBottomColor: isActive ? 'primary.main' : 'transparent',
                    borderRadius: 0,
                    '&:hover': {
                      color: 'text.primary',
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  {t(page.name)}
                </Button>
              );
            })}
          </Box>

          <Button
            onClick={toggleLanguage}
            sx={{ color: 'text.primary', ml: { xs: 1, md: 2 }, minWidth: 42 }}
          >
            {i18n.language === 'hu' ? 'EN' : 'HU'}
          </Button>
          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              alt="Szilva"
              src="/me.jpg"
              sx={{ border: '2px solid', borderColor: 'primary.dark' }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
