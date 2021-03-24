
async function volver() {
    window.location.href = `index.html`
    
}

async function dale() {

    const datas = new Personajes() 
    
    try {
        let lista = document.getElementById("lista");
        let data =await datas.getPersonajes()
        for (let i=0;i<data.results.length;i++) {
            let div = document.createElement("div");
            let array = data.results[i];
            div.innerHTML = array.id + ` - ` + array.name;
            div.onclick = ver
            lista.appendChild(div)
        }
        
    }catch(err) {
        console.log(err)
        return err
    }
}

async function ver(e) {
    const datas = new Personajes() 
    try {
        let data = await datas.getId();
        let ids = data.results
        let contenido = e.target.textContent
        let id = contenido.split(" ");
        let img = document.getElementById("img");

        console.log(contenido)
        console.log(id)
        console.log(ids.id)
    
        

    }catch(err) {
        return err
    }
}







