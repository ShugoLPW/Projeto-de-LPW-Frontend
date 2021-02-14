import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroLoja from "./pages/CadastroLoja";
import EditPerfil from "./pages/EditPerfil";
import Loja from "./pages/Loja";
import TipoConta from "./pages/TipoConta"
export default function Routes(){
	return(
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/tipoconta" exact>
					<TipoConta />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/home">
					<Home />
				</Route>

				<Route path="/cadastrousuario">
					<CadastroUsuario />
				</Route>

				<Route path="/cadastroloja">
					<CadastroLoja />
				</Route>

				<Route path="/edit">
					<EditPerfil/>
					</Route>

					<Route path="/loja">
					<Loja/>
					</Route>
			</Switch>
		</Router>
	);
}