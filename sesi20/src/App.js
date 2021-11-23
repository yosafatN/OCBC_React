import logo from './logo.svg';
import './App.css';
import PersonalInformation from './components/personal-information';
import FatchComponent from './components/fatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <PersonalInformation></PersonalInformation> */}
        <FatchComponent></FatchComponent>
      </header>
    </div>
  );
}

export default App;
