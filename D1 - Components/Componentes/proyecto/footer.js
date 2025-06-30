class Footer{
    constructor( {copy = "© 2025 Mi Sitio Web"} = {}){
        this.copy = copy;
    }

    injectStyles(){
        const style = document.createElement('style');
            style.textContent = `
            .footer{
            color: green;
            text-align: center;
            }`
        document.head.appendChild(style);
    }

    render(){
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.textContent = this.copy;

        document.body.appendChild(footer)
    }

    mount(targetId = 'footer'){

        const mountPoint= document.getElementById(targetId);
            if(!mountPoint){
                console.error (`no se encontro el elemento de id = ${targetId}`)
                return;
            }
        

        this.injectStyles();
        mountPoint.innerHTML ='';
        mountPoint.appendChild(this.render())
    }


}

new Footer({
    
}).mount('footer');