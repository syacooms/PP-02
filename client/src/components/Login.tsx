import * as React from 'react';
// styles
import { AvatarFix, Wrapper } from './Login.style';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Google from './google/google';

const Login = () => {
  return (
    <Wrapper>
      <AvatarFix>
        <LockOutlinedIcon color="secondary" />
      </AvatarFix>
      <Typography variant="h5">로그인</Typography>
      <Google />
    </Wrapper>
  );
};

export default Login;
