import api from "../../services/api";

export default function Forgot() {
  <>
    <header>
      <img src="/imagens/Group 1.png" alt="" id="logo" />
    </header>

    <div id="inicio">
      <img src="/imagens/user.png" alt="" />
      <h1>Recuperar senha</h1>
    </div>

    <div id="barrinha">
      <hr />
      <p>Você receberá um email para alterar a senha</p>
      <hr />
    </div>

    <div id="dados">
      <p>Digite seu email para confirmação</p>
      <input type="text" id="email" />
      <button id="login" onClick={()=> {}}>Solicitar</button>
    </div>
  </>
}