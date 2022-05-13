import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import Map from './Map';
import CityPage from './CityPage';
import CreateCity from './CreateCity';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserOnLoad() {
      const user = await getUser();

      if (user) {
        setUser(user);
      }
    }

    getUserOnLoad();
  }, []);

  async function handleLogout() {
    await logout();

    setUser(null);
  }

  return (
    <Router>
      <div className='App'>

        {/* Adding a header if the user is logged in */}
        {user && 
          <header>
            <div>
              <NavLink className='navLink' exact to={'/map'}>Map</NavLink>
              <NavLink className='navLink' exact to={'/createCity'}>Create City</NavLink>
            </div>
            <button onClick={handleLogout}>Logout</button>
          </header>}

        {/* Main body of the single page app. Includes declarations for auth page, map page, create city and update city */}
        <main>
          <Switch>
            <Route exact path="/">
              {user
                ? <Redirect to="/map"/>
                : <AuthPage setUser={setUser}/>}
            </Route>
            <Route exact path="/map">
              {user
                ? <Map />
                : <Redirect to="/"/>}
            </Route>
            <Route exact path="/city/:id">
              {user
                ? <CityPage />
                : <Redirect to="/"/>}
            </Route>
            <Route exact path="/createCity">
              {user
                ? <CreateCity />
                : <Redirect to="/"/>}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
