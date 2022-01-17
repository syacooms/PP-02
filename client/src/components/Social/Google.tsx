import { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../../features/user';
import { RootState } from '../../redux/store';
import { LoginButton, LogoutButton } from './Google.style';
import google from '../../img/google.png';

// Types
export type userType = {
  name: string;
  email: string;
  imageUrl: string;
};

const Google = () => {
  const googleClientId = '527957848261-4kamrrn3qscjmc2j9cvec76188lhv2cq.apps.googleusercontent.com';
  //const googleClientId = process.env.REACT_APP_CLIENT_ID ?? '';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.value);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  useEffect(() => {
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

    localStorage.setItem('email', res.profileObj.email);
    localStorage.setItem('name', res.profileObj.name);
    localStorage.setItem('imageUrl', res.profileObj.imageUrl);

    dispatch(login(userObj));
    navigate('/main');
  };
  const onFailureSuccess = (res: any) => {
    console.log('Login Failed:', res);
  };
  const onSignOutSuccess = () => {
    localStorage.clear();
    alert('성공적으로 로그아웃 하였습니다.');

    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={googleClientId}
          render={(renderProps) => (
            <LoginButton onClick={renderProps.onClick}>
              <img className="icon" alt="" src={google} />
              Google
            </LoginButton>
          )}
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
        />
      ) : null}
      {showLogoutButton ? (
        <GoogleLogout
          clientId={googleClientId}
          render={(renderProps) => (
            <LogoutButton onClick={renderProps.onClick} color="inherit">
              logout
            </LogoutButton>
          )}
          buttonText="Logout"
          onLogoutSuccess={onSignOutSuccess}
        />
      ) : null}
    </div>
  );
};

export default Google;
