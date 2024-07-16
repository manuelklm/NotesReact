import logo from './logo.svg';
import './App.css';
import NotesApp from './components/NotesApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NotesApp/>
      </header>
      <footer className='App-footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
