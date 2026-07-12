const status = document.getElementById("status");
const userData = document.getElementById("userdata");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>{

    if (!response.ok){
        throw new Error("Error");
    }
    return response.json();
})
.then(users=>{
    status.textContent="";
    users.forEach(user=>{
        let row ='
        <tr>
        <td>${user.Name}</td>
        <td>${user.Email}</td>
        <td>${user.address.street}</td>, ${user.address.street}</td>
        </tr>
        ';
        userData.innerHTML += row;
        
 });
})
.catch(error =>{
    status.textContent= "failet to load data";
});