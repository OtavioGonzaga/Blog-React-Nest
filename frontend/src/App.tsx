import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './components/Loading/Loading';

export default function App() {
	const [nest, setNest] = useState(false);

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
			<div className="App">{!nest ? <Loading /> : <h1>{nest}</h1>}</div>
		</>
	);
}
