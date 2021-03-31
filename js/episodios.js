function volver() {
    window.location.href= `index.html`
}


async function GetEpiAll() {

    const episodios = new Episodios ()

    try {
        let data = await episodios.getAllEpi();

        let listaEpi = document.getElementById("listaEpi");

        for (let i=0;i<data.results.length;i++) {
            let todo = data.results[i];
            let Epis = document.createElement("div");
            Epis.className = "epi"
            Epis.id = "Epis"
            Epis.innerText = todo.id + ` -` + todo.name;
            listaEpi.appendChild(Epis);
            Epis.onclick = verEpi
        }
    }catch(err) {
        return err
    }
} 

async function verEpi(e) {

    const episodios = new Episodios()
    const personas = new Personajes()

    try {
        let listaPersons = document.getElementById("todo");
        let contenedor = document.getElementById("contenedor");
        let contenido = e.target.textContent
        let idsnumber = contenido.split(" ");
        let idtomado = idsnumber[0]

        let labelEpi = document.createElement("label");
        contenedor.appendChild(labelEpi)

        let label = document.createElement("label");
        label.textContent = "PERSONAJES QUE APARECEN EN ESTE EPISODIO"
        label.className = "label"
        listaPersons.appendChild(label)
        
        let data = await episodios.getEpisodio(idtomado);

        let mostrarinfo = document.getElementById("contimg");
        let Epis = document.getElementById("Epis");

        
        let Episelect = document.getElementById("Episelect");
        Episelect.textContent = data.name
        
        for (let i=0;i<data.characters.length;i++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            
            li.id = "li"
            a.className = "personsEpi"
            listaPersons.appendChild(li)
            
            let persInt = data.characters[i];
            let persons = persInt.split("https://rickandmortyapi.com/api/character/");
            let final = persons[1]
            let persona = await personas.getIds(final);
            
            let img = document.getElementById("img");
            
            a.innerText = persona.name            
            li.appendChild(a)
        }
        let li = document.getElementById("li");
        Epis.addEventListener("click", function() {
            mostrarinfo.classList.add(`active`);
            listaPersons.removeChild(li)
        })
        mostrarinfo.addEventListener("click", function() {
            mostrarinfo.classList.remove(`active`)
        })
    }catch(err) {
        return err
    }
}