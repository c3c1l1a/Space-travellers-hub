import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Profile from './components/profile/Profile';
import Missions from './components/missions/Missions';
import Rockets from './components/rockets/Rockets';

import './App.css';

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Route path="/rockets" element={<Rockets />} />
      <Profile />
      <Missions missions={state.missions} />
    </div>
  );
}

export default App;
