import { useHistory, Link } from "react-router-dom";

import styles from "./styles.css";
import logo from "../../assets/imagens/logo_shugo.png"

export default function EditPerfil() {

  return (

    <>
      <header class="edit"><Link to="/home"><img src={logo} alt="" id="logo" /></Link>
      </header>

      <div id="capa">
        <img   alt="" />
        <div id="hora_func">
          <h3>Horário de Funcionamento</h3>
          <div id="horario">
            <ul id="seg">seg</ul>
            <div id="time">
              <input type="time" id="seg1" />
              <p>às</p>
              <input type="time" id="seg2" />
              <button id="segB">add</button>
            </div>
          </div>
          <div id="horario">
            <ul>ter</ul>
            <div id="time">
              <input type="time" id="ter1" />
              <p>às</p>
              <input type="time" id="ter2" />
              <button id="terB">add</button>
            </div>
          </div>
          <div id="horario">
            <ul>qua</ul>
            <div id="time">
              <input type="time" id="qua1" />
              <p>às</p>
              <input type="time" id="qua2" />
              <button id="quaB">add</button>
            </div>
          </div>
          <div id="horario">
            <ul>qui</ul>
            <div id="time">
              <input type="time" id="qui1" />
              <p>às</p>
              <input type="time" id="qui2" />
              <button id="quiB">add</button>
            </div>
          </div>
          <div id="horario">
            <ul>sex</ul>
            <div id="time">
              <input type="time" id="sex1" />
              <p>às</p>
              <input type="time" id="sex2" />
              <button id="sexB">add</button>
            </div>
          </div>
          <div id="horario">
            <ul>sab</ul>
            <div id="time">
              <input type="time" id="sab1" />
              <p>às</p>
              <input type="time" id="sab2" />
              <button id="sabB">add</button>
            </div>
          </div>
          <div id="horario">
            <ul>dom</ul>
            <div id="time">
              <input type="time" id="dom1" />
              <p>às</p>
              <input type="time" id="dom2" />
              <button id="domB">add</button>
            </div>
          </div>
        </div>
      </div>

      <div id="foto">
        <img src="/imagens/menu.png" alt="" />
      </div>

      <div id="nome_slogan">
        <div id="n">
          <p id="nome">Nome da loja</p>
          <input type="text" id="nom" />
          <button id="addN" onClick={() => addNome()}>
            add
          </button>
        </div>
        <div id="s">
          <p id="slogan">Slogan da loja</p>
          <input type="text" id="slog" />
          <button id="addS" onClick={() => addSlogan()}>
            add
          </button>
        </div>


        <div id="categorias">
          <p>Selecione a categoria</p>
          <select name="Categoria">
            <option>Alimentação</option>
            <option>Saude</option>
            <option>Vestuário</option>

          </select>
        </div>
      </div>

      <div class="catalogo">
        <div id="titulo">
          <h2>Catálogo</h2>
          <button id="add" onClick={() => qualquer_ai()}>
            Adicionar item
          </button>
        </div>
        <div class="itens">
        
        </div>
      </div>

      <div id="descricao">
      <h3>Descrição</h3>
      <input type="text" id="desc" />
      <button id="addD">add</button>
      <p id="d">Adicionar descrição</p>

      <input type="text" id="ender" />
      <button id="addE">add</button>
      <p id="e">Adicionar endereço</p>

      <input type="text" id="telef" />
      <button id="addT">add</button>
      <p id="t">Adicionar telefone</p>
    </div>      
    </>
  );
}

function qualquer_ai() {
  var btn = document.querySelector("#add");
  var item = document.querySelector(".itens");
  var itemNovo = document.createElement("div");
  itemNovo.style.display= "flex";
  itemNovo.style.width= "250px";
  itemNovo.style.height= "110px";
  itemNovo.style.flexDirection= "row";
  itemNovo.style.alignItems= "center";
  itemNovo.style.justifyContent= "space-between";
  itemNovo.style.margin="20px 40px";
  itemNovo.style.background= "#FFF";
  itemNovo.style.boxShadow= "1px 2px 4px #33333320";
  itemNovo.style.borderRadius= "6px";
  item.appendChild(itemNovo);
}

function addDescricao() {
  var btnD = document.querySelector("#addD");
  var iptD = document.querySelector("#desc");
  var descricao = document.querySelector("#d");
  var p = iptD.value;
  descricao.innerHTML = p;
}

function addEndereco() {
  var btnE = document.querySelector("#addE");
  var iptE = document.querySelector("#ender");
  var endereco = document.querySelector("#e");
  var p = iptE.value;
  endereco.innerHTML = p;
}

function addTelefone() {
  var btnT = document.querySelector("#addT");
  var iptT = document.querySelector("#telef");
  var telefone = document.querySelector("#t");
  var p = iptT.value;
  telefone.innerHTML = p;
}

function addNome() {
  var btnN = document.querySelector("#addN");
  var iptN = document.querySelector("#nom");
  var nome = document.querySelector("#nome");

  var p = iptN.value;
  nome.innerHTML = p;
}

function addSlogan() {
  var btnS = document.querySelector("#addS");
  var iptS = document.querySelector("#slog");
  var slogan = document.querySelector("#slogan");

  var j = iptS.value;
  slogan.innerHTML = j;
}
 function addHora(){
  var btnseg = document.querySelector("#segB");
  var iptSeg1 = document.querySelector("#seg1");
  var iptSeg2 = document.querySelector("#seg2")
  
    var x = []
    var startTime= iptSeg1.value;
    var endTime = iptSeg2.value;
    var start = startTime.split(":")
    var end = endTime.split(":")

    var obj = {
      start:{
        hours: parseInt(start[0]),
        minutes: parseInt(start[1])
      },
      end:{
        hours: parseInt(end[0]),
        minutes: parseInt(end[1])
      },
      dia: "Segunda",
      index: 2
    };
    

    var x = [obj]
    
    console.log(x)
  
 }