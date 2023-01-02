import './App.css';
import { Banner, NavBar, Skills } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
