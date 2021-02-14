import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "./styles.css";

import shugoLogo from "../../assets/imagens/logo_shugo.png";
import userIcon from "../../assets/imagens/user.png";

import api from "../../services/api";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const history = useHistory();

  async function loginUser(){

    try {

      const response = await api.post("/shugo/authenticate/user", { email, password});

      if(response.status == 400) {
        alert("erro no login, veja se seus dados estão certos");
        return 
      }

        var token = {
          data : response.data.token,
          type: "user"
        }

        localStorage.setItem("APITOKEN", JSON.stringify(token));
        localStorage.setItem("userID", JSON.stringify(response.data.user._id));
        history.push("home");
        window.location.replace("http://localhost:3000/home");

    } catch (error) {
      console.log(error);
      localStorage.setItem("tokenLocal", JSON.stringify(null));
    }

  }

  async function loginStore(){
    const response = await api.post("/shugo/authenticate/user",{
      body: {
        email,
        password
      }
    })

    if(response.status == 400) {
      alert("erro no login, veja se seus dados estão certos");
      return 
    }

      var token = {
        data : response.data.token,
        type: "store"
      }

      localStorage.setItem("APITOKEN", JSON.stringify(token));
      localStorage.setItem("storeID", JSON.stringify(response.data.store._id));
      history.push("home");
      window.location.replace("http://localhost:3000/home");
  }

  function login(e){
    e.preventDefault();

    var select = document.getElementById('selectCheck');
		var option = select.options[select.selectedIndex];

    if(option.value === "store") loginStore();
    if(option.value === "user") loginUser();
  }

	return(
		<>
    <header class="login">
      <img src={shugoLogo} alt="" id="logo"/>
    </header>
    <div id="inicio">
      <img src={userIcon} alt="" />
      <h1>Login de usuário</h1>
    </div>

    <div id="barrinha">
      <hr /><p>Entre com seus dados</p><hr/>
    </div>

    <form className="formLogin" onSubmit={e => login(e)}>
        <div id="dados">
        
          <div id="check">
            <p>Selecione sua conta</p>
            <select id="selectCheck">
              <option value="user">Cliente</option>
              <option value="store">Loja</option>
            </select>
          </div>

          <p>Email</p>
          <input  
              type="text" 
              id="email" 
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

          <p>Senha</p>
          <input type="password" 
            id="senha"
            value={password}
            required
            onChange={event => setPassword(event.target.value)}/>
        
          <button id="login" type="submit">Login</button>
      </div>
    </form>
    

    <div id="direcionar">
        <p>Não tem um cadastro? </p>
        <Link to="cadastro">Cadastre-se</Link>
    </div>
    <p id="rodapé">Ao continuar com o acesso, você concorda com a nossa política de privacidade</p>
  </>
	);
}