
async function volver() {
    window.location.href = `index.html`
    
}

async function ListaPersonajes() {
    let verlista = document.getElementById("mostrar");

    const datas = new Personajes() 
    
    try {
        let lista = document.getElementById("lista");
        let data =await datas.getPersonajes()
        for (let i=0;i<data.results.length;i++) {
            let div = document.createElement("div");
            div.id = "listPersons"
            div.className = "listPersons"
            let array = data.results[i];
            div.innerHTML = array.id + ` - ` + array.name;
            
            div.onclick = ver
            lista.appendChild(div)
            verlista.addEventListener("click", function() {
                lista.removeChild(div)
            })
        }
        
    }catch(err) {
        console.log(err)
        return err
    }
}

async function ver(e) {
    const datas = new Personajes() 
    const episodios = new Episodios()
    try {
        let contenido = e.target.textContent
        let idsnumber = contenido.split(" ");
        let idtomado = idsnumber[0]

        let getids = await datas.getIds(idtomado);
        let Episodio = await episodios.getEpisodio(idtomado);
        
        let contenedor = document.getElementById("contimg");
        let lista = document.getElementById("lista");
    
        lista.addEventListener("click", function() {
            contenedor.classList.add(`active`)
        })
        contenedor.addEventListener("click", function() {
            contenedor.classList.remove(`active`)
        })

        let img = document.getElementById("img");
        img.src = getids.image

        let nombre = document.getElementById("nombre");
        nombre.innerText = getids.name
        let estado = document.getElementById("estado");
        estado.innerText = getids.status
        let especie = document.getElementById("especie");
        especie.innerText = getids.species
        let episodioid = document.getElementById("Episodios");
        episodioid.innerText = Episodio.name

    }catch(err) {
        return err
    }
}







