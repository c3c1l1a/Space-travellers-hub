/* eslint-disable */
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Profile from './components/profile/Profile';
import Missions from './components/missions/Missions';
//import Rockets from './components/rockets/Rockets';

import './App.css';

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        {/*<Route path="/rockets" element={<Rockets />} />*/}
        <Route path="/missions" element={<Missions missions={state.missions} />} />
        <Route path="/profile" element={ <Profile />} />
      </Routes>
      
    </div>
  );
}

export default App;
