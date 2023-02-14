/*DOM que voy a utilizar*/

/*const botonComprar = document.getElementById("btnComprar"),
	  botonMostrarFicha = document.getElementById("btnMostrarFicha");*/
const botonComprar = document.getElementById(this.id);
const autos = [];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

class Auto{
	constructor(img,titulo,id,descripcion){
		this.img = img,
		this.titulo = titulo,
		this.id = id,
		this.descripcion = descripcion;
	}

	mostrarAutos(){
		const tarjetas = `<div class="col">
							<div class="row row-cols-1 row-cols-md-3 g-4">
								<div class="card h-100 card">
									<img src="${this.img}" class="card-img-top perfilFoto" alt="">
									<div class="card-body">
										<h5 class="card-title">"${this.titulo}"</h5>
									</div>
									<div class="card-footer">
										<button  id=${this.id} class= "btn btn-primary">Comprar</button>
										<button id= "btnMostrarFicha" class="btn btn-primary">Ver Ficha</button>
									</div>
								</div>
							</div>
						</div>
		
		`
		const contenedor = document.getElementById("contenedorCards");
		contenedor.innerHTML += tarjetas
	}
	
	agregarEvent(){
		const botonComprar = document.getElementById(this.id);
		const botonMostrarFicha = document.getElementById("btnMostrarFicha");
		const encontrarAuto = autos.find(p => p.id == this.id);
		botonComprar.addEventListener("click", ()=> agregarAlCarro(encontrarAuto))
	}
	

}




fetch("../data.json")
	.then((res) => res.json())
	.then((data)=>{
		data.forEach(aut => {
			let newAuto = new Auto(aut.img, aut.titulo, aut.id,aut.descripcion)
			autos.push(newAuto)
		}),
		autos.forEach(e =>{
			e.mostrarAutos()
		})
		autos.forEach(e =>{
			e.agregarEvent()
		})

	})
	.catch(err => console.log(err));



function mostrarFicha(){
		const ficha = `<div class= col-lg-6>
					   		<h2>"${this.titulo}"</h2>
							<img scr= "${this.img}">		
					   </div>
					   <div class= col-lg-6>
					   		<p>"${this.descripcion}"</p>
					   </div>
		`
		const estante = document.getElementById("contenedorFicha");
		estante.innerHTML = ficha
}

function agregarAlCarro(auto){
	const enCarrito = carrito.find(aut => aut.id === autos.id);
	if(!enCarrito){
		carrito.push({...auto})
		localStorage.setItem("enCarrito",JSON.stringify(carrito))
	} else{
		let carritoFilt = carrito.filter(aut => aut.id != auto.id);
		carrito =[...carritoFilt]
	}
	/*
	if(autos.some(auto => auto.id === idBoton)){
		const index = autos.findIndex(auto => auto.id === idBoton);
		autos.push[index].cantidad++;
	} else {
		productoAgregado.cantidad = 1;
		autos.push(productoAgregado);
	}*/
}



/*function limpiarHTML(){
	contenedorCarrito.innerHTML = "";
}

function eliminarAuto(e){
	if(e.target.classList.contains("btn-danger")){
		let autoID = e.target.getAttribute("id");
		carrito = carrito.filter(
			(auto)=>auto.id != autoID
		);

	carritoHTML();
	}

}*/

/*contenedorCarrito.addEventListener("click", eliminarAuto);*/
		