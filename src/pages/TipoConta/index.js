import { Link } from "react-router-dom";
import styles from "./styles.css";
import logo from "../../assets/imagens/logo_shugo.png"
export default function TipoConta() {


  return (
    <>
      <header class="tipo">
      <Link to="/home"><img src={logo} alt="" id="logo" /></Link>
      </header>

      <div id="inicio">
        <h1>Escolha o tipo de conta que deseja</h1>
      </div>

      <div class="botão">
        <div id="btn_container">
        <Link to="/cadastrousuario"><a href="/cadastrousuario">Cliente</a></Link>
          <p>Avalie estabelecimentos</p>
        </div>
      </div>

      <div class="botão">
        <div id="btn_container">
          <Link to="/cadastroloja"><a href="/cadastroloja"> Loja </a></Link>
          <p>Crie um perfil para seu estabelecimento</p>
        </div>
      </div>

    </>
  );
}

