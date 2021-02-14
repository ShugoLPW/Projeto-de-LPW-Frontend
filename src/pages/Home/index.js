import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Store from "../../components/Store";
import menuLogo from "../../assets/imagens/menu.png";
import bannerImage1 from "../../assets/imagens/shugo1.png";
import bannerImage2 from "../../assets/imagens/Frame 12.png";
import bannerImage3 from "../../assets/imagens/Shugo 2.png";

import logo from "../../assets/imagens/logo_shugo.png";
import api from "../../services/api";
import styles from "./styles.css";
import stylesCarrosel from "./styles_carrosel.css";


export default function Home() {
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [image, setImage] = useState("");
  
  const[array,setArray] = useState("")
  useEffect(() => {
    async function chamaAPI() {
        const response = await api.get("/index/store");
        setArray(response.data)
    }

    chamaAPI();
  }, []);
  return (
    <>
      <Header>
        <>
          <div className="parte_branca">
            <div class="filtro" onClick={() => open_options()}>
              <img src={menuLogo} />
              <h4>Procure por departamentos</h4>
            </div>
          </div>

          <div style={{ display: "none" }} id="options">
            <button onClick={() => close_options()} id="close">
              Close &times;
            </button>
            <div class="food">
              <p>Alimentação</p>
              <br></br>
              <div class="subcategorias">
                <a>Pizza</a>
                <br></br>
                <a>Hambúguer</a>
                <br></br>
                <a>Doces</a>
                <br></br>
                <a>Salgados</a>
                <br></br>
                <a>Oriental</a>
                <br></br>
                <a>Massas</a>
                <br></br>
                <a>Sorvete e Açaí</a>
                <br></br>
                <a>Vegano</a>
                <br></br>
              </div>
            </div>
            <div class="health">
              <p>Farmacia</p>
              <br></br>
              <div class="subcategorias">
                <a>Medicamentos</a>
                <br></br>
                <a>Perfumaria</a>
                <br></br>
              </div>
            </div>
            <div class="clothing">
              <p id="categoria">Vestuário</p>
              <br></br>
              <div class="subcategorias">
                <ul>Blusas</ul>
                <br></br>
                <ul>Calças</ul>
                <br></br>
                <ul>Infantil</ul>
                <br></br>
                <ul>Feminino</ul>
                <br></br>
                <ul>Masculino</ul>
                <br></br>
                <ul>Calçados</ul>
                <br></br>
                <ul>Acessórios</ul>
              </div>
            </div>
          </div>
        </>
      </Header>
      <Carousel showThumbs={false} dynamicHeight>
        <div>
          <img src={bannerImage3} />
        </div>
        <div>
          <img src={bannerImage2} />
        </div>
        <div>
          <img src={bannerImage1} />
        </div>
      </Carousel>
      <div className="perfis  ">
        <div className="itens perfis">
        {array &&
            array.map( loja => <Store loja={loja}/>)}
        </div>
      </div>
    </>
  );
}

function open_options() {
  document.getElementById("options").style.display = "block";
}

function close_options() {
  document.getElementById("options").style.display = "none";
}
