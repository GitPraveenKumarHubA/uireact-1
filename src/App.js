import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { GlobalProvider } from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
			<GlobalProvider>
				<Router>
					<Routes>
						<Route path='/add' element={<AddUser />} />
						<Route path='/edit/:id' element={<EditUser />} />
						<Route path='/' element={<Home />} />
					</Routes>
				</Router>
			</GlobalProvider>
		</div>
	);
}

export default App;
