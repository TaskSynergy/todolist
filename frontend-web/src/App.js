import logo from './logo.svg';
import './App.css';

//redirect to login page if not logged in
import { Navigate } from 'react-router-dom';

function App() {

  const isLoggedIn = false;

  return (
    <div className="App">
      <title>TaskSynergy</title>
      <header className="App-header">
        {/* redirect to login page if not logged in */}
        {!isLoggedIn ? <Navigate to="/login" /> : <Navigate to="/home" />}
        
      </header>
    </div>
  );
}

export default App;
