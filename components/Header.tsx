'use client';

import * as React from 'react';
import { 
  Box, 
  IconButton, 
  Link as MuiLink,
  Menu, 
  MenuItem, 
  Toolbar, 
  useMediaQuery 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const theme = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box 
            component={Link} 
            href="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >
            <Image
              src="/logo.png"
              alt={title}
              width={200}
              height={60}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Box>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: 'center',
          overflowX: 'auto',
          display: 'flex',
          flexWrap: 'nowrap',
        }}
      >
        {!isMounted ? (
          // Show desktop view by default during SSR
          sections.map((section) => (
            <Box
              key={section.title}
              component={Link}
              href={section.url}
              sx={{
                color: 'inherit',
                p: 1,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {section.title}
            </Box>
          ))
        ) : isMobile ? (
          <Box sx={{ width: '100%' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {sections.map((section) => (
                <MenuItem 
                  key={section.title} 
                  onClick={handleClose}
                  component={Link}
                  href={section.url}
                  sx={{ 
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                >
                  {section.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          sections.map((section) => (
            <Box
              key={section.title}
              component={Link}
              href={section.url}
              sx={{
                color: 'inherit',
                p: 1,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {section.title}
            </Box>
          ))
        )}
      </Toolbar>
    </React.Fragment>
  );
}
