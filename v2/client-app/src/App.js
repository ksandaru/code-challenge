import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import CommentList from './Components/CommentList';
import CommentSection from './Components/CommentSection';
function App() {
  return (
    <div className='container'>
      <UserList/>
      <CommentSection/>
      <CommentList/>
    </div>
  );
}

export default App;
