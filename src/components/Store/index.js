import { useHistory, Link } from "react-router-dom";


import styles from "./styles.css";

export default function Store({ loja }){
	return(
	    <div className="container-store" onClick={() => irLoja()}>
			<img src={loja.image} width={44}/>
			<div className="infos">
				<span className="name">{loja.name}</span>
				<span className="slogan">{loja.slogan}</span>
			</div>
		</div>
	);

    const history = useHistory()
function irLoja(){
    
    localStorage.setItem("/index/store", JSON.stringify(loja));
window.location.replace("http://localhost:3000/loja");
history.push("loja");

}
}
