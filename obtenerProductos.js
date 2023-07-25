const busca = await fetch("./productos2.json")
.then((respuesta) => {
    return respuesta.json()
}).then(
    (respuesta) =>{console.table(respuesta)}
)
    .catch((err) => {
    console.log(err)
});

console.log(busca.Inicio.Favoritos[0].nombre);