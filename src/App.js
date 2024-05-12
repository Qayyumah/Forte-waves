import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Savings from './components/Savings';
import SavingsNew from './components/SavingsNew';
import SavingsPurpose from './components/SavingsPurpose';
import SavingsPrice from './components/SavingsPrice';
import SavingsPlan from './components/SavingsPlan';
import SavingsImage from './components/SavingsImage';
import SavingsDone from './components/SavingsDone';
import SavingsSuccess from './components/SavingsSuccess';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route exact path='/' element={<Savings/>}/>
          <Route exact path='/savingsnew' element={<SavingsNew/>}/>
          <Route exact path='/savingspurpose' element={<SavingsPurpose/>}/>
          <Route exact path='/savingsprice' element={<SavingsPrice/>}/>
          <Route exact path='/savingsplan' element={<SavingsPlan/>}/>
          <Route exact path='/savingsimage' element={<SavingsImage/>}/>
          <Route exact path='/savingsdone' element={<SavingsDone/>}/>
          <Route exact path='/savingssuccess' element={<SavingsSuccess/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
