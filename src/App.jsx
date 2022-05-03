import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import InputForm from './components/inputForm';
import IncomeList from './components/incomeList';

function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++){
      temp += parseInt(income[i].price)
    }

    setTotalIncome(temp);
  }, [income])
	return (
    <React.Fragment>
      <Header totalIncome={totalIncome}/>
      <InputForm setIncome={setIncome} income={income} />
      <IncomeList income={income} setIncome={setIncome} />
    </React.Fragment>
  )
}

export default App;
