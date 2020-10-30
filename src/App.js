import React from 'react';
import CreateFirstList from './components/firstList';
import SecondList from './components/secondList/secondList';
import './components/app.css';

function App() {
	return (
		<div className = 'myProject'>
			<CreateFirstList />
			<SecondList />
		</div>
	);
}

export default App;
