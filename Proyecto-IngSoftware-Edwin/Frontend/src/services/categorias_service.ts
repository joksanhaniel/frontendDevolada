import axios from "axios";

const query: string = "http://localhost:9000";


export function getCategorias(){
    return axios.get(`${query}/api/categorias`);
}


// export function getLogin(data:any):Promise<any>{
    // return new Promise<any>((resolve) => {
        // axios.get(`${query}users/`);
        
    // })
// }


