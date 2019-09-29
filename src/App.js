import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import 'materialize-css/dist/css/materialize.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

import TodayPage from './pages/today/today.page';
import Navbar from './components/navbar/navbar.component';
import CalendarPage from './pages/calendar/calendar.page';
import LoginPage from './pages/login/login.page';
import Footer from './components/footer/footer.component';
import RegisterPage from './pages/register/register.page';

class App extends React.Component {
  unsubscribeFromAuth  = null;
  constructor() {
    super();

    this.state = {
      currentUser: undefined,
      version: 'v0.1.2'
    };

  }

  componentDidMount() {
    this.unsubscribeFromAuth  = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser, version } = this.state;
    return (
      <div className='app'>
        <Navbar currentUser={currentUser} />
        <main>
          <div className="container">
            <Switch>
              <Route exact path='/' component={() => <TodayPage currentUser={currentUser} />} />
              <Route exact path='/today' component={() => <TodayPage currentUser={currentUser} />} />
              <Route exact path='/calendar' component={CalendarPage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/register' component={RegisterPage} />
            </Switch>
          </div>
        </main>
        <Footer version={version} />
      </div>
    );
  }

}

export default App;
