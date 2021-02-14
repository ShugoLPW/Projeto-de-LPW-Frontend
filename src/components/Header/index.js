import { Link } from "react-router-dom";
import logo from "../../assets/imagens/logo_shugo.png";

import "./styles.css";

import {isAuthenticated} from '../../routes/Auth.js';
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Header({children}) {

	const [type, setType] = useState('none');
	const [logado, setLogado] = useState(false);
	const [array, setArray] = useState('');

	useEffect(()=> {
		async function getComponet(){
			var data = localStorage.getItem("APITOKEN");
			var tokenLocal = JSON.parse(data);

			if (tokenLocal !== null) {
				if(tokenLocal.type === "store") {

					var data = localStorage.getItem("storeID");
					var storeID = JSON.parse(data);

					console.log(storeID);
					const response = await api.get('/show/store', { headers: {_id: storeID}});

					setArray(response.data)
					setType('store');
					setLogado(true);
			
				} else {
					var data = localStorage.getItem("userID");
					var userID = JSON.parse(data);

					const response = await api.get('/show/user', { headers: {_id: userID}});

					console.log(response.data);
					setArray(response.data)
					setType('user');
					setLogado(true);

				}
			}

			
		}

		getComponet();
	}, [])




	return(
		<div className="header">
		<header className="container">
			<div className="logo">
				<Link to="/cadastrousuario"><img src={logo} width={200}/></Link>
			</div>
			<div>
				<div className="search-container">
					<input type="text" className="input"/>
					<button>
						<img src="https://img.icons8.com/android/16/000000/search.png" width={16}/>
					</button> 
				</div>
			</div>
			{ logado ? 
			
				(type==="user") ? 
					(<div className="strongName">
						<strong>						
							{array.name}
							{console.log(logado)}
						</strong>
					</div>)  :  (<div className="strongName">
						<strong>{array.name}</strong>
						<Link to="/edit"><button className="buttons-auth sing-up">EDITAR</button></Link>
					
					</div> ) : ( 
						
				<div className="auth-container">
					<Link to="/login"><button className="buttons-auth">ENTRAR</button></Link>
					<Link to="/tipoconta"><button className="buttons-auth sing-up">CADASTRAR</button></Link>
				</div>
			)}
			
		</header>
		{children}
		</div>
	);
}