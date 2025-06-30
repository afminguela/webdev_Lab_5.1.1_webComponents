// class UserCard{
//     constructor({name="", email=""} = {}){
//         this.name = name;
//         this.email= email;
//     }

//     injectStyles(){
//        const style = document.createElement('style');
//     style.textContent = `
//     .usercard__container{
//     display:flex;
//     flex-direction: row ;
//     background-color: #ea2353;
//     }
//     .usercard{
//      border: 5px solid #ea5fea;
//      border-radius: 25px;
//      padding:15px;
//      margin:10px;
//      background-color: lightgreen;
//     }
//     .usercard__h3{
//      color: white
//     }
    
//     .usercard__p{
//     font-family: Arial;
//     }` ;

//     document.head.appendChild(style);
//     }

//     render(){


//     }

//     mount(){}
// }

// new UserCard (
    
// ).mount('card-container')


// // lo mismo pero sin clase. 




function UserCard(name, email){
 const card = document.createElement('div'); 
 // esta parte inject style.
card.style.border = "1px solid #ccc";
  card.style.padding = "16px";
  card.style.margin = "10px";
  card.style.borderRadius = "8px";
  card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// este trozo es el render()
  const title = document.createElement('h3')
  title.textContent = name;

  const mail = document.createElement('p');
  mail.textContent = email;

  card.appendChild(title);
  card.appendChild(mail);
return card;
}
// esto corresponde a Mount. 
const app = document.getElementById('app');

// dentro del appendChild estoy ejeco la funcion de creación de la usercard
app.appendChild(UserCard({name: "Joseluis", email:"jl@gmail.com"}));
app.appendChild(UserCard({name:"Maricarmen", email:"MC@Jmail.com"}));