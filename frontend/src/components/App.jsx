import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Homepage } from 'pages/Home/Homepage';
import { DiaryPage } from 'pages/Diary/DiaryPage';
import { CalculatorPage } from 'pages/Calculator/CalculatorPage';
import { LoginPage } from 'pages/Login/LoginPage';
//import { RegistrationPage } from 'pages/Registration/RegistrationPage';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
		<Route>
			<Route path='/' element={ <SharedLayout />}>
				<Route path='/' index element={ <Homepage />} />
				<Route path='/diary' element={ <DiaryPage />} />
				<Route path='/calculator' element={ <CalculatorPage />} />
				<Route path='/login' element={ <LoginPage />} />
				<Route path='*' element={ <PageNotFound />} />
			</Route>
		</Route>
	 </Routes>
    
  );
}

export default App;
