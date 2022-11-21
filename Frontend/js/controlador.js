//JSON
var empresas =[
 /***********Comida-Restaurantes***************/ 
  {
         /*Little caesars-Res*/ 
        nombreEmpresa: "Little Caesars",
        imagen: "./Frontend/img/empresas/1.res.png",
        calificacion: 5,
       
    },
     /*KFC-Res*/ 
        {
            nombreEmpresa: "KFC",
            imagen: "./Frontend/img/empresas/2.res.png",
            calificacion: 4,
           
        },
        /*Burger king-Res*/ 
        {
            nombreEmpresa: "Burger King",
            imagen: "./Frontend/img/empresas/3.res.png",
            calificacion: 5,
        
        },
        /*Taco Bell-Res*/ 
        {
            nombreEmpresa: "Taco Bell",
            imagen: "./Frontend/img/empresas/4.res.png",
            calificacion: 5,
           
        
    
}
];
 var productos = [
    
            {
                nombreProducto: "KING JR. HAMBURGUESA",
                urlImagen: "../Frontend/img/productos/1.king.png",
                descripcion: "Lorem ipsum, Dolore, modi!",
                precio: 150.00
            },
                {
                    nombreProducto: "WHOPPER",
                    urlImagen: "./Frontend/img/productos/3.whopper.png",
                    descripcion: "Lorem ipsum, Dolore, modi!",
                    precio: 99.99
                },
                {
                    nombreProducto: "SUNDAE",
                    urlImagen: "./Frontend/img/productos/2.sundae.png",
                    descripcion: "Lorem ipsum, Dolore, modi!",
                    precio: 59.99
                },
                {
                    nombreProducto: "WHOPPER DOBLE",
                    urlImagen: "./Frontend/img/productos/3.whopper.png",
                    descripcion: "Lorem ipsum, Dolore, modi!",
                    precio: 209.99
                }

 ];
 //Local Storage empresas
var localStorageEmpresas = window.localStorage;


if(localStorageEmpresas.getItem('empresas')==null){
    localStorage.setItem('empresas', JSON.stringify(empresas));
} else {
    empresas = JSON.parse(localStorageEmpresas.getItem('empresas'))
}
// Local storage productos
var localStorageProductos = window.localStorage;
if(localStorageProductos.getItem('productos')==null){
    localStorage.setItem('productos', JSON.stringify(productos));
} else {
    productos = JSON.parse(localStorageProductos.getItem('productos'))
}

//Funcion contenidos 
const opcionNav = 1 ; //opcion para ver el contenido despues del inico de sesión
const opcionLanding = 2; 
const opcionModalIni= 3;
const opcionModalReg = 4;
const opcionEmpresas = 5;
const opcionProductos = 6;


function selecionContenido(opcion){
    switch (opcion){
        case opcionNav:
            
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionLanding:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "block";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionModalIni:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "block";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionModalReg:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "block";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionEmpresas:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionProductos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "block";
            break;
    }
}
/******************************************************************************************** */
//Función para contenido de submenus izq
const opcionNoti = 1;
const opcion2 = 2;
const opcion3 = 3;

function opcionesSubmenu (opcion){
    switch (opcion) {
        case opcionNoti:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "block";
            document.getElementById('sub-opcion2').style.display = "none";
            break;
        case opcion2:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-opcion2').style.display = "block";
            break;
    
        default:
            break;
    }
}
//Ventana modal formulario inicio sesión
function modalInicio () {
        document.getElementById ('modalInicio').innerHTML += `
        <div class="modal-container ">
    <form id="formularioInicio" class="modal-form" onsubmit="noRecargo(event)">
    <h5>Inicio de sesión</h5>
    <input id="mail" class="mt-2" type="text">
    <input type="password" id="pass" class="mt-2" type="text">
    <button class="btn-modal" onclick="selecionContenido(1),selecionContenido(5), generarEmpresa()">Iniciar sesión</button>
    </form>
  </div> `
}
function modalRegistro () {
    document.getElementById ('modalRegistro').innerHTML += `
    <div class="modal-container ">
<form id="formularioRegistro"  class="modal-form" onsubmit="noRecargo(event)">
<h5>Registro</h5>
<input id="mail" class="mt-2" type="text">
<input type="password" id="pass" class="mt-2" type="text">
<button class="btn-modal" onclick="selecionContenido(1),selecionContenido(5), generarEmpresa()">Iniciar sesión</button>
</form>
</div>
     `
}
//Función para evitar el recargo por defecto del navegador al enviar formulario
function noRecargo(event){
    event.preventDefault();
}
//Genera las categorías 
function generarEmpresa() { 
    document.getElementById('empresa').innerHTML = ''; 
    empresas.forEach(function (emp) { 
        //para la calificacion con estrellas
        let estrellas = '';
        for (let i = 0; i < emp.calificacion; i++) {
            estrellas += '<i class="fa-solid fa-star"></i>';  
        }for (let i = 0; i < 5-emp.calificacion; i++) {
            estrellas += '<i class="fa-regular fa-star"></i>';  
        }
        document.getElementById('empresa').innerHTML += `
    <div class="card card-Emp" style="width: 18rem;" onclick="generarProductos(),selecionContenido(6)">
        <h6 class="nombre-restaurant">${emp.nombreEmpresa}</h6>
        <div class="color-star">
        ${ estrellas}
        </div>
        <img src="${emp.imagen}" class="card-img-top img-fluid  img-res" alt="...">
        <div class="card-body">
         
        </div>
    </div>
           
            `;
    }) 
} 
//background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% );
//Genera los productos de cada empresa
function generarProductos() { 
    document.getElementById('prod').innerHTML = ''; 
    productos.forEach(function (producto) { 
        document.getElementById('prod').innerHTML += `
        <div class=" card-prod" style="">
        
         
            <img src="${producto.urlImagen}" class="img-fluid rounded-start img-prod" alt="...">
              <h6 id="texto" class="card-title ">${producto.nombreProducto}
              <p id="" class="card-text">${producto.descripcion}</p>
              </h6>
      </div>
           
            `;
    }) 
} 
//Genera contenido de notificaciones
function GeneraNotificaciones() {
    document.getElementById('sub-notificacion').innerHTML += `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sequi.</p>
    
    `; 
}