import styles from "./styles.css";
import logo from "../../assets/imagens/logo_shugo.png"
import user from "../../assets/imagens/user.png"
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

export default function CadastroLoja() {
  const history = useHistory();
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [slogan,setSlogan]= useState("");
  const [description,setDescription]= useState("");
  const [CPF_CNPJ,setCPF_CNPJ]= useState("");
  const [address,setAddress]= useState("");
  const [phone, setPhone]= useState("");
  const [category,setCategory]= useState("");
  
  async function cadastrarStore(e){
    e.preventDefault();

    var select = document.getElementById('selectCadastroLoja');
		var option = select.options[select.selectedIndex];
    
    const response = await api.post('/shugo/register/store', {
        name,
        email,
        password,
        slogan,
        description,
        CPF_CNPJ,
        address,
        phone,
        category: option.value
      });

      var token = {
        data : response.data.token,
        type: "store"
      }

      console.log(response.data);
      localStorage.setItem("APITOKEN", JSON.stringify(token));
      localStorage.setItem("storeID", JSON.stringify(response.data.NewStore._id));
      history.push("home");
      window.location.replace("http://localhost:3000/home");
  }

	return(
	<>
    <header class="cadLoj">
      <Link to="/home"><img src={logo} alt="" id="logo" /></Link>
    </header>

    <div id="inicioLoja">
      <img src={user} alt="" />
      <h1>Cadastre-se</h1>
    </div>

    <div id="barrinhaLoja">
      <hr />
      <p>Preencha o formulário abaixo</p>
      <hr />
    </div>

    <form className="cadastroLoja" onSubmit={e => cadastrarStore(e)}>
        <div class="dadosLoja">
        
          <div id="dados1Loja">

          <div id="categoriasCad">
          <p>Selecione a categoria</p>
          <select name="Categoria" id="selectCadastroLoja">
            <option>Alimentação</option>
            <option>Saude</option>
            <option>Vestuário</option>
              
          </select>
        </div>

            <p>Endereço</p>
            <input type="text" 
            value={address}
            onChange={event => setAddress(event.target.value)}/>

            <p>Telefone</p>
            <input type="text" 
            value={phone}
            onChange={event => setPhone(event.target.value)}/>

            <p>CPF</p>
            <input type="text" 
            value={CPF_CNPJ}
            onChange={event => setCPF_CNPJ(event.target.value)}/>
          </div>

          <div id="dados2Loja">
            <p>Email</p>
            <input type="text" 
            value={email}
            onChange={event => setEmail(event.target.value)}/>

            <p>Senha</p>
            <input type="text" 
            value={password}
            onChange={event => setPassword(event.target.value)}/>

            <p>Nome</p>
            <input type="text" 
            value={name}
            onChange={event => setName(event.target.value)}/>

            <p>Slogan</p>
            <input type="text" 
            value={slogan}
            onChange={event => setSlogan(event.target.value)}/>

            <button id="botaoLoja">Cadastrar</button>
          </div>
        </div>

       
    
    </form>  

    <div id="direcionarLoja">
      <p>Já tem uma conta?</p>
      <a href="login.html">Entrar</a>
    </div>

    <p id="rodapéLoja">
      Ao continuar com o acesso, você concorda com a nossa política de
      privacidade
    </p>

  </>
	);
}