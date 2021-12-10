import * as React from 'react';
// styles
import { AvatarFix, Wrapper } from './Login.style';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Google from '../Social/Google';

const Login = () => {
  return (
    <Wrapper>
      <AvatarFix>
        <LockOutlinedIcon color="secondary" />
      </AvatarFix>
      <Typography variant="h5">Login</Typography>
      <Google />
    </Wrapper>
  );
};

export default Login;
