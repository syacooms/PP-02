import * as React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../../features/user';
import { RootState } from '../../redux/store';

// Types
export type userType = {
  name: string;
  email: string;
  imageUrl: string;
};

const Google = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const googleClientId: string =
    '527957848261-n5rc46nhljj1k3fmmpdd2h467ei275p1.apps.googleusercontent.com';
  const user = useSelector((state: RootState) => state.user.value);
  const [showLoginButton, setShowLoginButton] = React.useState(true);
  const [showLogoutButton, setShowLogoutButton] = React.useState(false);

  React.useEffect(() => {
    if (user.name !== '') {
      setShowLoginButton(false);
      setShowLogoutButton(true);
    } else {
      setShowLoginButton(true);
      setShowLogoutButton(false);
    }
  }, [user.name]);

  const onLoginSuccess = (res: any) => {
    let userObj = {
      email: '',
      name: '',
      imageUrl: '',
    };

    userObj = {
      ...userObj,
      email: res.profileObj.email,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
    };

    dispatch(login(userObj));
    navigate('/main');
  };
  const onFailureSuccess = (res: any) => {
    console.log('Login Failed:', res);
  };
  const onSignOutSuccess = () => {
    alert('성공적으로 로그아웃 하였습니다.');

    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={googleClientId}
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId={googleClientId}
          render={(renderProps) => <button onClick={renderProps.onClick}>logout</button>}
          buttonText="Logout"
          onLogoutSuccess={onSignOutSuccess}
        />
      ) : null}
    </div>
  );
};

export default Google;
