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
import { useTitle } from './Components/Hooks/useTitle';
//import { useDB} from './Components/Hooks/useDB';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm} from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';
//import { deleteItem } from './Components/Order/OrderListItem';

/* const firebaseConfig = {
  apiKey: "AIzaSyAvsMf3MhLBiht4sPHyIYpGO0JCsqThqQg",
  authDomain: "mrdonalds-5457e.firebaseapp.com",
  projectId: "mrdonalds-5457e",
  storageBucket: "mrdonalds-5457e.appspot.com",
  messagingSenderId: "531741883443",
  appId: "1:531741883443:web:55f11f4902b670abf5f746"
}; */
const firebaseConfig = {
  apiKey: "AIzaSyAvsMf3MhLBiht4sPHyIYpGO0JCsqThqQg",
  authDomain: "mrdonalds-5457e.firebaseapp.com",
  databaseURL: "https://mrdonalds-5457e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-5457e",
  storageBucket: "mrdonalds-5457e.appspot.com",
  messagingSenderId: "531741883443",
  appId: "1:531741883443:web:55f11f4902b670abf5f746"
};

firebase.initializeApp(firebaseConfig);

function App() {
  //const authFirebase = firebase.auth;

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  //const database = firebase.database();
  useTitle(openItem.openItem);
  //const dbMenu = useDB(database);
  
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database
    }}>
      <GlobalStyle />
        <NavBar />
        <Order />
        <Menu/>
        { openItem.openItem && <ModalItem /> }
        { orderConfirm.openOrderConfirm && <OrderConfirm /> }
    </Context.Provider>
  );
}

export default App;
