import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <div>
      {/* NavBar */}
      <NavBar />
      {/* SideBar */}
      <SideBar />
      {/* Main */}
      <Main /> 
      </div>
    </div>
  );
}

export default App;
