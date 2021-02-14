import jwt from 'jsonwebtoken';

export const isAuthenticated =  () => {
    const secret = "U2h1Z29Db3Jwb3JhdGlvbiBieSBBTFc";

    var authenticated = false;

    var data = localStorage.getItem("APITOKEN");
    var tokenLocal = JSON.parse(data);

    if(tokenLocal === null || tokenLocal === undefined) {
        authenticated = false;
        
    } else{
        if(tokenLocal.type === "store"){
            jwt.verify(tokenLocal.data, secret, (err, decoded) => {
                if(err) authenticated = false;
                else {
                    authenticated = true;
                    localStorage.setItem("myID_storeToken", JSON.stringify(decoded.idStore));
                }
            }) 
        }

        if(tokenLocal.type === "user"){
            jwt.verify(tokenLocal.data, secret, (err, decoded) => {
                if(err) authenticated = false;
                else {
                    authenticated = true;
                    localStorage.setItem("myID_storeUser", JSON.stringify(decoded.idUser));
                }
            }) 
        }
        
    }

    return authenticated;
    
};