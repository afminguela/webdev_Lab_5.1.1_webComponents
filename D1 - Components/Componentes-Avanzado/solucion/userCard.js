function UserCard({ name, email }) {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "16px";
    card.style.margin = "10px";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  
    const title = document.createElement("h3");
    title.textContent = name;
  
    const mail = document.createElement("p");
    mail.textContent = email;
  
    card.appendChild(title);
    card.appendChild(mail);
  
    return card;
  }
  
  const app = document.getElementById("app");
  app.appendChild(UserCard({ name: "Juan Pérez", email: "juan@mail.com" }));
  app.appendChild(UserCard({ name: "Ana García", email: "ana@mail.com" }));