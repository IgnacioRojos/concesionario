const autosEnCarrito = JSON.parse(localStorage.getItem("enCarrito"));

      /*contenedorParaCarrito = document.getElementsByClassName("prueba"),*/
      
const contenedorParaCarrito = document.getElementById("prueba")

console.log(autosEnCarrito);

if (autosEnCarrito) {
    autosEnCarrito.forEach((a) => {
        const articulo = document.createElement("div");
        articulo.innerHTML = `
                <div class="col">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="card h-100 card">
                            <img src="${a.img}" class="card-img-top perfilFoto" alt="">
                            <div class="card-body">
                                <h5 class="card-title">"${a.titulo}"</h5>
                            </div>
                            <div class="card-footer">
                                <button id= "${a.id}" class="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        contenedorParaCarrito.appendChild(articulo);
        
    });

} 
    



    
