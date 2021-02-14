import styles from "./styles.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import logoShugo from "../../assets/imagens/logo_shugo.png";
import userIcon from "../../assets/imagens/user.png";

import api from "../../services/api";


export default function CadastroUsuario() {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [nome,setNome]= useState("");
  
  async function cadastrarUsuario(){
    api.post('/register/user',{
      body: {
        email,
        password,
        nome
      }
    });
  }

	return(
		<>
    <header class="cad">
    <Link to="/home"><img src={logoShugo} alt="" id="logo" /></Link>   </header>

    <div id="inicio">
      <img src={userIcon} alt="" />
      <h1>Cadastre-se</h1>
    </div>

    <div id="barrinha">
      <hr />
      <p>Preencha o formulário abaixo</p>
      <hr />
    </div>

    <div class="dados">
      <div id="dados1">
        <p>Nome</p>
        <input type="text"
          value={nome}
          onChange={event => setNome(event.target.value)} />
        
      </div>

      <div id="dados2">
        <p>Email</p>
        <input type="text" 
          value={email}
          onChange={event => setEmail(event.target.value)}/>
        <p>Senha</p>
        <input type="text" 
          value={password}
          onChange={event => setPassword(event.target.value)} />
        <Link to="/" ><button id="botao" onClick={() => cadastrarUsuario()}>Cadastrar</button></Link>
      </div>
    </div>

    <div id="direcionar">
      <p>Já tem uma conta?</p>
      <Link to="/login">Entrar</Link>
    </div>

    <p id="rodapé">
      Ao continuar com o acesso, você concorda com a nossa política de
      privacidade
    </p>
  </>
	);
}