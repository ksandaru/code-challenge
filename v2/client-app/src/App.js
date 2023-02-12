import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import CommentList from './Components/CommentList';

function App() {
  return (
    <div className="App">
      <UserList/>
      <commentSection/>
      <CommentList/>
    </div>
  );
}

export default App;
