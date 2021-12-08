import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Google from './google/google';
import { login } from '../features/user';
import AppBar from '@material-ui/core/AppBar';
import { Box, Grid, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';
import Item from './Item/Item';

// Types
export type userType = {
  name: string;
  email: string;
  imageUrl: string;
};

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const Main = () => {
  const dispatch = useDispatch();
  const loginChk = useSelector((state: RootState) => state.user.value);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const handleAddToCart = (clickedItem: CartItemType) => {};

  React.useEffect(() => {
    //local
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
  }, [dispatch, loginChk.email, loginChk.imageUrl, loginChk.name]);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>what ...????</div>;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              Project02
            </Typography>
            <Google />
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={3}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Main;
