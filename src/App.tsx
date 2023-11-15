import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skill } from './layout/sections/skills/skill/Skill';


function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <Skill/>
        </div>
    );
}



export default App;


