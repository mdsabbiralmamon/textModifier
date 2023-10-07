import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='Text Modifier' navItem1='Home' navItem2='About us' navItem3='Contact us' />
      <TextForm heading ="Paste Your Texts Here" details ="Enter your texts here which you want to modify" />
    </>
  );
}

export default App;
