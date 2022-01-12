import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>SNEAKERS PAGE</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>WOMENS PAGE</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>MENS PAGE</h1>
  </div>
);

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        
          console.log(this.state);
        });
      }    
      this.setState({currentUser: userAuth});    
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/signin' element={<SignInAndSignUpPage/>} />
          <Route path='/sneakers' element={<SneakersPage/>} />
          <Route path='/jackets' element={<JacketsPage/>} />
          <Route path='/womens' element={<WomensPage/>} />
          <Route path='/mens' element={<MensPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
