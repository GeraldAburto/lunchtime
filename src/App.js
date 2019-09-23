import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

import TodayPage from './pages/today/today.page';
import Navbar from './components/navbar/navbar.component';
import CalendarPage from './pages/calendar/calendar.page';
import LoginPage from './pages/login/login.page';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <div className="container">
          <Switch>
            <Route exact path='/' component={TodayPage} />
            <Route exact path='/today' component={TodayPage} />
            <Route exact path='/calendar' component={CalendarPage} />
            <Route exact path='/login' component={LoginPage} />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
