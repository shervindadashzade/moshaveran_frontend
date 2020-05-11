export function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));

    if(user && user.token){
        return { 'api_token' : user.token };
    }else{
        return {};
    }
}