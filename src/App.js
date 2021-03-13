import './App.css';
import Profile from './profile/Profile'
import logo from './logo.svg'



function App() {
  const handleName = () =>{
    alert('bassem')
  }
  return (
    <div class="center">
      <Profile fullName="basem" bio="ins" pro="insc" ba={handleName}>{logo}</Profile>
      <Profile fullName="basemrrr" bio="ins" pro="insc"></Profile>
                                                      
</div>
  );
}

export default App;
