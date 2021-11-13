
import './App.css';
import LoginPage from './components/login';
import Header from './components/header';
import {BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import Details from './components/details';

function App() {
  const { authorized } = useSelector(state => state.authReducer)
  console.log('AUTH', authorized)
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact render={() => authorized ? <Redirect to='/dashboard' /> :<LoginPage />} />
          <Route path='/dashboard'  render={() => authorized ? <Dashboard /> : <Redirect to='/' />} />
          <Route path='/employee/:id'  render={() => authorized ? <Details /> : <Redirect to='/' />}  />

       </Switch>
     </Router>
    </div>
  );
}

export default App;
