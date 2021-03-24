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

    getId = async() => {
        return await fetch(`https://rickandmortyapi.com/api/character/`)

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

