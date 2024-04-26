import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
	const [nest, setNest] = useState('wait...');

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_NEST_URL}`)
			.then(res => {
				setNest(res.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<div className="App">
				<h1>{nest}</h1>
			</div>
		</>
	);
}
