
const btnAmigos = document.querySelector('#boton');
const ulAmigos =document.querySelector('#lista');
btnAmigos.addEventListener('click', function(e){
    fetch('http://localhost:5000/amigos') //request por default hace un get
    .then(res => res.json())
    .then(amigos => {
        for (let i=0; i< amigos.length;i++){
            let li = document.createElement ('li');
            li.innerText = amigos[i].name;
            ulAmigos.append(li);

        }
    })
});

const inputAmigo = document.querySelector('#input');
const btnSearch = document.querySelector('#search');
const spanAmigo = document.querySelector('#amigo');

btnSearch.addEventListener('click',function(e){
   let idAmigo = inputAmigo.value;
   fetch(`http://localhost:5000/amigos/${idAmigo}`)
   .then (res => res.json())
   .then (amigo => {
       spanAmigo.innerText = amigo.name;
   })
});

const inputDelete = document.querySelector('#inputDelete');
const btnDelete = document.querySelector ('#delete');

btnDelete.addEventListener('click',function(){
    let idAmigo = inputDelete.value;
    fetch(`http://localhost:5000/amigos/${idAmigo}`,{method: 'DELETE'
    })
    .then (res => res.json())
    .then (data => {
        console.log (data);
    })
 });
