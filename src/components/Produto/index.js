
import "./styles.css";

export default function Produto({ produto }){
	return(
		<div className="container-produto">
			<img src={produto.image} width={44}/>
			<div className="infos">
				<span className="name">{produto.name}</span>
				<span className="price">R$ {produto.price}</span>
			</div>
		</div>
	);
	
}