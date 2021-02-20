import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
//import { deleteItem } from './Components/Order/OrderListItem';

const firebaseConfig = {
  apiKey: "AIzaSyAvsMf3MhLBiht4sPHyIYpGO0JCsqThqQg",
  authDomain: "mrdonalds-5457e.firebaseapp.com",
  projectId: "mrdonalds-5457e",
  storageBucket: "mrdonalds-5457e.appspot.com",
  messagingSenderId: "531741883443",
  appId: "1:531741883443:web:55f11f4902b670abf5f746"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;

  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
        <NavBar { ...auth }/>
        <Order 
          { ...orders }
          { ...openItem }
          { ...auth }
          firebaseDatabase = {firebase.database}
        />
        <Menu { ...openItem }/>
        { openItem.openItem && <ModalItem { ...openItem } { ...orders }/> }
    </>
  );
}

export default App;
