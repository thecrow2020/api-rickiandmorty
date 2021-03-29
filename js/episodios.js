function volver() {
    window.location.href= `index.html`
}


async function GetEpi() {

    const episodios = new Episodios ()

    try {
        let data = await episodios.getEpisodio();

        let listaEpi = document.getElementById("listaEpi");

        for (let i=0;i<data.results.length;i++) {
            let todo = data.results[i]
            let Epis = document.createElement("div");
            Epis.className = "epi"
            Epis.innerText = todo.name;
            Epis.innerText = todo.
            listaEpi.appendChild(Epis);

            console.log(todo)
        }
    
        // console.log(data.results)

    }catch(err) {
        return err
    }
} 