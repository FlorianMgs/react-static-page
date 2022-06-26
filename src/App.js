import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/main_content/MainContent';
import './App.css';


function App() {
  const [toggleDarkmode, setToggleDarkmode] = useState(false);

  function handleChange() {
    setToggleDarkmode(!toggleDarkmode);
  }

  const styles = {
    backgroundColor: toggleDarkmode ? '#000' : '#fff',
    color: toggleDarkmode ? '#fff' : '#000',
  }
  return (
    <div className="App" style={styles}>
        <Header handleChange={handleChange} isDarkmode={toggleDarkmode} /> 
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;
