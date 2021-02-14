import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import api from "../../services/api";

import Produto from "../../components/Produto";
import  "./styles.css";

import estrela1 from "../../assets/imagens/star_escura.png";
import estrela2 from "../../assets/imagens/star_clara.png";

import Header from "../../components/Header";

export default function Loja() {
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
      <Header></Header>

      <div id="capa">
        <img src="/imagens/menu.png" alt="" />
        <div id="hora_func">
          <h3>Horário de Funcionamento</h3>
          <ul>seg</ul>
          <ul>ter</ul>
          <ul>qua</ul>
          <ul>qui</ul>
          <ul>sex</ul>
          <ul>sab</ul>
          <ul>dom</ul>
        </div>
      </div>

      <div id="foto">
        <img src="/imagens/menu.png" alt="" />
      </div>

      <div id="nome_slogan">
        <h3>Nome da loja</h3>
        <h3>Slogan da loja</h3>
      </div>

      <div className="catalogo">
        <div id="nome">
          <h2>Catálogo</h2>
          <br />
        </div>
        <div className="itens">
        {array &&
            array.map( produto => <Produto produto={produto}/>)}
        </div>
      </div>

      <div id="nota">
        <h4>Média de Avaliações</h4>
        
      </div>

      <div id="avaliacao">
        <h4>Avalie essa loja</h4>
		<div id="estrelas" >
          <img src={estrela1} id="um" onClick={() =>mudarcor1()}/>

          <img src={estrela1} id="dois" onClick={() =>mudarcor2()}/>

          <img src={estrela1} id="tres"onClick={() =>mudarcor3()}/>

          <img src={estrela1} id="quatro"onClick={() =>mudarcor4()}/>

          <img src={estrela1} id="cinco"onClick={() =>mudarcor5()}/>
		
		</div>
		<h1 id="n"></h1>
	  </div>

      <div id="descricao">
        <h3>Descrição</h3>
      </div>
    </>
  );
}
function mudarcor1(){
	var star = document.querySelector("#um");
	star.setAttribute('src', estrela2)
	var nota = document.querySelector("#n")
	nota.innerHTML = "1"
}

function mudarcor2(){
	var star = document.querySelector("#um");
	var star2 = document.querySelector("#dois");
	star.setAttribute('src', estrela2)
	star2.setAttribute('src', estrela2)
	var nota = document.querySelector("#n")
	nota.innerHTML = "2"
}
function mudarcor3(){
	var star = document.querySelector("#um");
	var star3 = document.querySelector("#tres");
	var star2 = document.querySelector("#dois");
	star.setAttribute('src', estrela2)
	star2.setAttribute('src', estrela2)
	star3.setAttribute('src', estrela2)
	var nota = document.querySelector("#n")
	nota.innerHTML = "3"
}
function mudarcor4(){
	var star = document.querySelector("#um");
	var star3 = document.querySelector("#tres");
	var star2 = document.querySelector("#dois");
	var star4 = document.querySelector("#quatro");
	star.setAttribute('src', estrela2)
	star2.setAttribute('src', estrela2)
	star3.setAttribute('src', estrela2)
	star4.setAttribute('src', estrela2)
	var nota = document.querySelector("#n")
	nota.innerHTML = "4"
}
function mudarcor5(){
	var star = document.querySelector("#um");
	var star3 = document.querySelector("#tres");
	var star2 = document.querySelector("#dois");
	var star4 = document.querySelector("#quatro");
	var star5 = document.querySelector("#cinco");
	star.setAttribute('src', estrela2)
	star2.setAttribute('src', estrela2)
	star3.setAttribute('src', estrela2)
	star4.setAttribute('src', estrela2)
	star5.setAttribute('src', estrela2)
	var nota = document.querySelector("#n")
	nota.innerHTML = "5"
}