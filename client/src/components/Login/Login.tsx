import * as React from 'react';
// styles
import { AvatarFix, Container, Wrapper } from './Login.style';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Google from '../Social/Google';

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <AvatarFix>
          <LockOutlinedIcon style={{ color: 'black' }} />
        </AvatarFix>
        <Typography variant="h5">Login</Typography>
        <Google />
      </Container>
    </Wrapper>
  );
};

export default Login;
