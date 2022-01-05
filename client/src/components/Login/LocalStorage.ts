import { login } from '../../features/user';

interface userType {
  name: string;
  email: string;
  imageUrl: string;
}

export const loginAccess = (dispatch: any, loginChk: any) => {
  //login
  if (localStorage.getItem('email') === null) {
    console.log('empty check');
    localStorage.setItem('email', loginChk.email);
    localStorage.setItem('name', loginChk.name);
    localStorage.setItem('imageUrl', loginChk.imageUrl);
  } else {
    let userObj = {
      email: '',
      name: '',
      imageUrl: '',
    };

    let email = localStorage.getItem('email');
    let name = localStorage.getItem('name');
    let imageUrl = localStorage.getItem('imageUrl');

    userObj = {
      ...userObj,
      email: email,
      name: name,
      imageUrl: imageUrl,
    } as userType;

    dispatch(login(userObj));
  }
};
