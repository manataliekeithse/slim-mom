import { useState, useEffect } from "react";

export const App = () => {
	const [dbData, setDbData] = useState('');

	useEffect(() => {
		fetch("http://localhost:3500/")
		.then(res => res.json())
		.then(data => setDbData(data.message));
	}, []);
	
	return (
		<div>{dbData}</div>
	)
}
