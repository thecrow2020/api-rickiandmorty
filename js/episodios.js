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
        let contenido = e.target.textContent
        let idsnumber = contenido.split(" ");
        let idtomado = idsnumber[0]

        let traerEpisodios = await episodios.getEpisodio(idtomado)

        let EpisodioSeleccionado = document.getElementById("Episelect");
        EpisodioSeleccionado.innerText = traerEpisodios.name

        let nombres = document.getElementById("nombre");
        for (let personajes=0;personajes<traerEpisodios.characters.length;personajes++) {
            let todosLosPersonajes = traerEpisodios.characters[personajes]
            let tomarID = todosLosPersonajes.split("https://rickandmortyapi.com/api/character/")
            let IDlimpio = tomarID[1]
            
            let div = document.createElement("div")
            nombres.appendChild(div)

            let identificarPersonaje = await personas.getIds(IDlimpio)

            div.innerText = identificarPersonaje.name
        }        
    }catch(err) {
        return err
    }
}