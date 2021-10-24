import './App.css';
import {useContext, useState} from 'react';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import NoteContext from './Context/NoteContext';

function App() {
  const {setSearchText} = useContext(NoteContext)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
          <Header ToggleDarkMode={setDarkMode} />
          <SearchBar handleSearchText={setSearchText} />
          <NoteList />
      </div>
    </div>
  );
}

export default App;
