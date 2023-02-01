showNavbar()
function showNavbar(){
    let token = localStorage.getItem('token')
    if(!token){
 
        $("#navBar").html(
            `<button onclick="showFormLogin()">Login</button>
    <button onclick="showFormRegister()">Register</button>`
        
       
    )}       
    else{
        $("#navBar").html(
            `<button onclick="showHome()">Home</button>
    <button onclick="showFormAdd()">Add</button>
    <button onclick="logout()">Logout</button>
    `
        )
    }
}