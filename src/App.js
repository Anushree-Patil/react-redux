import React from 'react';
import logo from './logo.svg';
import store from './redux/store'
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux'
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer'
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <UserContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <NewCakeContainer/>
      <IceCreamContainer/>
        <CakeContainer /> */}
       
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
