
export const usarFetch = (dir) => (

    fetch(dir)
        .then(
            response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
        })

)