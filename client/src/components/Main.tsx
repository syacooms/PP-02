import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Google from './Social/Google';
import { login } from '../features/user';
import AppBar from '@material-ui/core/AppBar';
import { Badge, Box, Drawer, Grid, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useQuery } from 'react-query';
import Item from './Item/Item';
import Cart from './Cart/Cart';
import { StyledButton } from './Main.Style';

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
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item,
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[]),
    );
  };

  useEffect(() => {
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
  }, [dispatch, loginChk.email, loginChk.imageUrl, loginChk.name]);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>what ...????</div>;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              PP02
            </Typography>
            <Google />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error" style={{ position: 'sticky' }}>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
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
