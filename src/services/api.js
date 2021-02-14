import axios from "axios";


var dataToken = localStorage.getItem("APITOKEN") ;
var tokenLocal = JSON.parse(dataToken);




const api = tokenLocal? 
 axios.create({
  baseURL: "http://localhost:3333",
  	headers: {
  		authorization: "Bearer"+tokenLocal.data
  	}
}) : axios.create({
	baseURL: "http://localhost:3333"
  }) 

export default api;