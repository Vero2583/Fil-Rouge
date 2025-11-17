

export function navBar() {
    
    const nav = document.createElement("nav");
    nav.innerHTML = `
    
          <a href="">Developpeur Web</a>
          <a href="">Cybersecurité</a>
          <a href="">Accessibilité</a>
          <a href="">Eco-Conception</a>
        

    `;

    document.body.append(nav); 

}