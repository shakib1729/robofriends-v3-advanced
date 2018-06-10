import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{  //const { robots } =props; we are destructuring the 'props' directly inside the brackets

	return (
	<div>
		{
			robots.map((user,i) => {
				return (  
					<Card 
						key={robots[i].id} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					/>
				);
			   }                                
			)
		}
	</div>
	);
}

export default CardList;