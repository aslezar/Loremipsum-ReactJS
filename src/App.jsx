import React, { useState } from "react";
import data from "./data";
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);
		amount = amount <= 0 ? 1 : amount > 8 ? 8 : amount;
		setText(data.slice(0, amount));
	};
	return (
		<section className="section-center">
			<h3>Bored of Boring Lorem ipsum?...</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">Paragraphs: </label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button type="submit" className="btn">
					Generate
				</button>
			</form>
			<article className="lorem-text">
				{text.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</section>
	);
	return <h2>lorem ipsum project setup</h2>;
}

export default App;
