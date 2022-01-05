import AppBar from '@material-ui/core/AppBar';
import { Box, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledUl, UploadButton } from './Nav.Style';
import Google from '../Social/Google';

const Nav = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              <Link to="/main" style={{ color: 'white', textDecoration: 'none' }}>
                PP02
              </Link>
            </Typography>
            <StyledUl>
              <li>
                <UploadButton>
                  <Link to="/upload" style={{ color: 'white', textDecoration: 'none' }}>
                    UPLOADS
                  </Link>
                </UploadButton>
              </li>
              <li>
                <Google />
              </li>
            </StyledUl>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Nav;
