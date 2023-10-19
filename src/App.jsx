import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import { useState } from "react";

// <Button text="Botón simple" number="1"/>

const App = () => {
	const [checked, setChecked] = useState(false);

	const users = [
		{name:'Carlos',age:33},
		{name:'Juan',age:45},
		{name:'María',age:20}
	];

	const cards = [
		{
			title: 'Basik',
			price: ["$19.99","$199.99"],
			option1: '500 GB Storage',
			option2: '2 users allowed',
			option3: 'Send up to 3 GB'			
		},
		{
			title: 'Professional',
			price: ["$29.99","$299.99"],
			option1: '1 TB Storage',
			option2: '5 users allowed',
			option3: 'Send up to 10 GB'			
		},
		{
			title: 'Master',
			price: ["$39.99","$399.99"],
			option1: '2 GB Storage',
			option2: '10 users allowed',
			option3: 'Send up to 20 GB'			
		}		
	];


	return (
		<>
			<GlobalStyles/>
		
			<Header setChecked={setChecked } />
			{/* checked ? <h1>Hola</h1> : <h1>Adios</h1> */}

			<label>
				<p>
					<input type="checkbox" onChange={(event)=>setChecked(event.target.checked)} />
					Monthly
				</p>
			</label>

			<h1>Lista de usuarios: </h1>

			{
				users.map(user => {
					return (
						<>
							<p>usuario: <b>{user.name} </b> age: <b>{user.age}</b> </p>
						</>
					)
				})
			}






			<h1>Lista de Cards: </h1>

			<div className="wr_cards">

				{
				cards.map(card => {
					const price = (checked) ? card.price[0] : card.price[1] ;	
					
					return (
							<Card title={card.title} price={price} option1={card.option1} option2={card.option2} option3={card.option3} btn_action="btn_action"/>
						)
					})
				}

				<Card title='Basik' price={checked ? "$19.99" : "$199.99"} option1="500 GB Storage" option2="2 users allowed" option3="Send up to 3 GB" btn_action="btn_action"/>
				<Card title='Professional' price={checked ? "$24.99" : "$299.99"} option1="1 TB Storage" option2="5 users allowed" option3="Send up to 10 GB" btn_action="btn_action"/>
				<Card title='Master' price={checked ? "$39.99" : "$399.99"} option1="2 GB Storage" option2="10 users allowed" option3="Send up to 20 GB" btn_action="btn_action"/>

			</div>


			<div className="wr_cards">

				<Card title='Basik' price={checked ? "$19.99" : "$199.99"} option1="500 GB Storage" option2="2 users allowed" option3="Send up to 3 GB" btn_action="btn_action"/>
				<Card title='Professional' price={checked ? "$24.99" : "$299.99"} option1="1 TB Storage" option2="5 users allowed" option3="Send up to 10 GB" btn_action="btn_action"/>
				<Card title='Master' price={checked ? "$39.99" : "$399.99"} option1="2 GB Storage" option2="10 users allowed" option3="Send up to 20 GB" btn_action="btn_action"/>

			</div>

			
		</>
	);
	
};

const increment = (number, setNumber) => {
    setNumber(number + 1);
}
const increment2 = (number, setNumber) => {
    setNumber(number + 2);
}
const decrement = (number, setNumber) => {
    setNumber(number - 1);
}
const decrement2 = (number, setNumber) => {
    setNumber(number - 2);
}

const reset = (number, setNumber) => {
    setNumber(0);
}


export default App;

