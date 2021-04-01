class Personajes {
    
    getPersonajes= async() => {
        return await fetch(`https://rickandmortyapi.com/api/character`)

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    
    getPage2 = async() => {
        return await fetch(`https://rickandmortyapi.com/api/character?page=2`)
        
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }
    
    getPage3 = async() => {
        return await fetch(`https://rickandmortyapi.com/api/character?page=3`)
        
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }
    
    getPage4 = async() => {
        return await fetch(`https://rickandmortyapi.com/api/character?page=4`)
        
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }
    
    getPage5 = async() => {
        return await fetch(`https://rickandmortyapi.com/api/character?page=5`)
        
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    getIds = async(id) => {
        return await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }
    
}

class Episodios {

    getEpisodio = async(id) => {

        return await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }

    getAllEpi = async() => {

        return await fetch(`https://rickandmortyapi.com/api/episode`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data
        })
        .catch(function(err) {
            console.error(err);
        });
    }
}