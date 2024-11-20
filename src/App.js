import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './AppBar.js';
import Grid from './Grid.js';
import TemporaryDrawer from './SideBar.js';

function App() {
  return (
    <div className="App">
      <div>
      <ButtonAppBar />
      <TemporaryDrawer/>
      </div>

      <div>
        <Grid />
      </div>
    </div>
  );
}

export default App;
