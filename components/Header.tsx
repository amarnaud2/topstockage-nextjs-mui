import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/config/navigation';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'primary.main',
        top: 0,
        zIndex: theme.zIndex.appBar
      }}
      component="header"
      role="banner"
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ justifyContent: 'space-between' }}
          component="nav"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link 
            href="/" 
            style={{ display: 'flex', alignItems: 'center' }}
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/logo.png"
              alt="Logo Top Stockage"
              width={isMobile ? 150 : 200}
              height={isMobile ? 45 : 60}
              priority
            />
          </Link>

          {/* Menu mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="Ouvrir le menu"
              aria-controls={Boolean(anchorElNav) ? 'menu-appbar' : undefined}
              aria-expanded={Boolean(anchorElNav)}
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              role="menu"
              aria-label="Menu de navigation"
            >
              {mainNavigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={handleCloseNavMenu}
                >
                  <MenuItem
                    selected={pathname === item.href}
                    role="menuitem"
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.title}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* Menu desktop */}
          <Box 
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}
            role="menubar"
            aria-label="Menu de navigation"
          >
            {mainNavigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{ textDecoration: 'none' }}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                <Button
                  role="menuitem"
                  sx={{
                    color: 'white',
                    display: 'block',
                    position: 'relative',
                    '&:hover': {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'white',
                      },
                    },
                    ...(pathname === item.href && {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'white',
                      },
                    }),
                  }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
