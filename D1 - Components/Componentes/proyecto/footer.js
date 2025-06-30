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

        footer.textContent =  copy;
    }

    mount(targetId = 'footer'){

        const mountpoint= document.getElementById(targetId){
            if(!mountPoint){
                console.error (`no se encontro el elemento de id = ${footer})
            }
        }
    }


}