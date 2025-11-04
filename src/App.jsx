import './App.css';
import  Main  from './components/Main/Main.jsx';
import  Header  from './components/Header/Header.jsx';
import  PopNewCard  from './components/popups/PopNewCard/PopNewCard.jsx';
import  PopBrowse  from './components/popups/PopBrowse/PopBrowse.jsx';
import  PopUser  from './components/popups/PopUser/PopUser.jsx'; 

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="wrapper">
        <Main /> 
        </div>
        <PopNewCard />
        <PopBrowse />
        <PopUser />  
      </div>
    </>
  );
}

export default App;
