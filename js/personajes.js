
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
    
    try {
        let lista = document.getElementById("lista");
        let page2 = await datas.getPage2()
        
        for (let page=0;page<page2.results.length;page++) {
            let div = document.createElement("div");
            div.id = "listPersons"
            div.className = "listPersons"
            let array = page2.results[page];
            div.innerText = array.id + ` - ` + array.name
            lista.appendChild(div)            
        }
    }catch (err) {
        return err
    }

    try {
        let lista = document.getElementById("lista");
        let page3 = await datas.getPage3()
    
        for (let page=0;page<page3.results.length;page++) {
            let div = document.createElement("div");
            div.id = "listPersons"
            div.className = "listPersons"
            let array = page3.results[page];
            div.innerText = array.id + ` - ` + array.name
            lista.appendChild(div)  
        }
    }catch (err) {
        return err
    }

    try {
        let lista = document.getElementById("lista");
        let page4 = await datas.getPage4()
    
        for (let page=0;page<page4.results.length;page++) {
            let div = document.createElement("div");
            div.id = "listPersons"
            div.className = "listPersons"
            let array = page4.results[page];
            div.innerText = array.id + ` - ` + array.name
            lista.appendChild(div)  
        }
    }catch (err) {
        return err
    }

    try {
        let lista = document.getElementById("lista");
        let page5 = await datas.getPage5()
        
        for (let page=0;page<page5.results.length;page++) {
            let div = document.createElement("div");
            div.id = "listPersons"
            div.className = "listPersons"
            let array = page5.results[page];
            div.innerText = array.id + ` - ` + array.name
            lista.appendChild(div)  
        }
    }catch (err) {
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
    
        console.log(getid2)
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







