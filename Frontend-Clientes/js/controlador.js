

//JSON
/******************************************************************************************** */
//!Usuarios
var usuarios = [{
    nombre: "Lisa NewHoses",
    apellido: "NewHoses",
    ordenes: [{
        nombreProducto: "KING JR. HAMBURGUESA",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        cantidad: 2,
        precio: 49.99
    },
        {
            nombreProducto: "KING JR. HAMBURGUESA",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            cantidad: 2,
            precio: 49.99
        }
    ]
},
    {
        nombre: "Pam",
        apellido: "Vdel",
        ordenes: [{
            nombreProducto: "KFC",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            cantidad: 2,
            precio: 49.99
        },
            {
                nombreProducto: "SUNDAE",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 2,
                precio: 49.99
            }
        ]
    },

];

//!EMPRESAS

var empresas =[
 /***********Comida-Restaurantes***************/ 
  {
         /*Little caesars-Res*/ 
        nombreEmpresa: "Little Caesars",
        imagen: "img/empresas/1.res.png",
        calificacion: 5,
       
    },
     /*KFC-Res*/ 
        {
            nombreEmpresa: "KFC",
            imagen: "img/empresas/2.res.png",
            calificacion: 4,
           
        },
        /*Burger king-Res*/ 
        {
            nombreEmpresa: "Burger King",
            imagen: "img/empresas/3.res.png",
            calificacion: 5,
        
        },
        /*Taco Bell-Res*/ 
        {
            nombreEmpresa: "Taco Bell",
            imagen: "img/empresas/4.res.png",
            calificacion: 5,
           
        
    
}
];
//!PRODUCTOS
 var productos = [
    
            {
                nombreProducto: "KING JR. HAMBURGUESA",
                urlImagen: "img/productos/1.king.png",
                descripcion: "Lorem ipsum, Dolore, modi!",
                precio: 150.00
            },
                {
                    nombreProducto: "WHOPPER",
                    urlImagen: "img/productos/3.whopper.png",
                    descripcion: "Lorem ipsum, Dolore, modi!",
                    precio: 99.99
                },
                {
                    nombreProducto: "SUNDAE",
                    urlImagen: "img/productos/2.sundae.png",
                    descripcion: "Lorem ipsum, Dolore, modi!",
                    precio: 59.99
                },
                {
                    nombreProducto: "WHOPPER DOBLE",
                    urlImagen: "img/productos/3.whopper.png",
                    descripcion: "Lorem ipsum, Dolore, modi!",
                    precio: 209.99
                }

 ];

 /******************************************************************************************** */
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



/******************************************************************************************** */
//TODO Funcion de Contenidos y sub-menus 
//Funcion contenidos  principales 
const opcionNav = 1 ; //!opcion para ver el contenido despues del inico de sesión
const opcionLanding = 2; 
const opcionModalIni= 3;
const opcionModalReg = 4;
const opcionEmpresas = 5;
const opcionProductos = 6;
const opcionOrdenes = 7;
const opcionRealizarPago = 8;


function selecionContenido(opcion){
    switch (opcion){
        case opcionNav:
            
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionLanding:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "block";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionModalIni:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "block";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionModalReg:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "block";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionEmpresas:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionProductos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "block";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionOrdenes :
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "block";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionRealizarPago :
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "block";
            break;
    }
}
//TODO Funcion de los contenidos
/******************************************************************************************** */
//TODO Funcion de los SUB-MENUS
//Función para contenido de submenus izq
const opcionNoti = 1;
const opcionMisPedidos = 2;
const opcionCupones = 3;
const opcionPago = 4;
const opcionCuenta = 5;
const opcionSeguridad = 6;
const opcionAyuda = 7;


function opcionesSubmenu (opcion){

    switch (opcion) {
        case opcionNoti:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "block";
            document.getElementById('sub-misPedidos').style.display = "none";
            document.getElementById('sub-cupones').style.display = "none";
            document.getElementById('sub-pago').style.display = "none";
            document.getElementById('sub-cuenta').style.display = "none";
            document.getElementById('sub-seguridad').style.display = "none";
            document.getElementById('sub-ayuda').style.display = "none";
            break;
           
        case opcionMisPedidos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-misPedidos').style.display = "block";
            document.getElementById('sub-cupones').style.display = "none";
            document.getElementById('sub-pago').style.display = "none";
            document.getElementById('sub-cuenta').style.display = "none";
            document.getElementById('sub-seguridad').style.display = "none";
            document.getElementById('sub-ayuda').style.display = "none";
            //?para Pedidos
             cargarPedidos();
            break;
        case opcionCupones:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-misPedidos').style.display = "none";
            document.getElementById('sub-cupones').style.display = "block";
            document.getElementById('sub-pago').style.display = "none";
            document.getElementById('sub-cuenta').style.display = "none";
            document.getElementById('sub-seguridad').style.display = "none";
            document.getElementById('sub-ayuda').style.display = "none";
            break;
        case opcionPago:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-misPedidos').style.display = "none";
            document.getElementById('sub-cupones').style.display = "none";
            document.getElementById('sub-pago').style.display = "block";
            document.getElementById('sub-cuenta').style.display = "none";
            document.getElementById('sub-seguridad').style.display = "none";
            document.getElementById('sub-ayuda').style.display = "none";
            break;
        case opcionCuenta:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-misPedidos').style.display = "none";
            document.getElementById('sub-cupones').style.display = "none";
            document.getElementById('sub-pago').style.display = "none";
            document.getElementById('sub-cuenta').style.display = "block";
            document.getElementById('sub-seguridad').style.display = "none";
            document.getElementById('sub-ayuda').style.display = "none";
            break;
        case opcionSeguridad:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-misPedidos').style.display = "none";
            document.getElementById('sub-cupones').style.display = "none";
            document.getElementById('sub-pago').style.display = "none";
            document.getElementById('sub-cuenta').style.display = "none";
            document.getElementById('sub-seguridad').style.display = "block";
            document.getElementById('sub-ayuda').style.display = "none";
            break;
        case opcionAyuda:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-misPedidos').style.display = "none";
            document.getElementById('sub-cupones').style.display = "none";
            document.getElementById('sub-pago').style.display = "none";
            document.getElementById('sub-cuenta').style.display = "none";
            document.getElementById('sub-seguridad').style.display = "none";
            document.getElementById('sub-ayuda').style.display = "block";
            break;
    
        default:
            break;
    }
}
//TODO Funcion de sub-menus
/******************************************************************************************** */

//TODO ModalInicio
//Ventana modal formulario inicio sesión
function modalInicio(){    
    document.getElementById ('modalInicio').innerHTML = '';
    //formateamos mediante esa cadena vacia
    //selecionContenido(1) se borro por que generaba conflicto 
    document.getElementById ('modalInicio').innerHTML += `   
        <div class="modal-container ">
        <form id="formularioInicio" class="modal-form" onsubmit="noRecargo(event)">
        <h5>E-mail</h5>
        <input id="mail" class="mt-2" type="text">
        <h5>password</h5>
        <input type="password" id="pass" class="mt-2" type="text">
        <button class="btn-modal" onclick="selecionContenido(1),selecionContenido(5), generarEmpresa()">Iniciar sesión</button>
        </form>
        </div> `
}
//TODO ModalInicio
/******************************************************************************************** */

/*!como consumir la peticion 
ya creada por la Api
user

const options = {method: 'POST'};

fetch('http://localhost:3000/api/v1/users/', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  */
  
  //Todo ModalRegistro
function modalRegistro () {
    document.getElementById ('modalRegistro').innerHTML = "";
    //! linia para formatear
    document.getElementById ('modalRegistro').innerHTML += `
    <div class="modal-container ">
        
    <form id="formularioRegistro"  class="modal-form" onsubmit="noRecargo(event)">
       
        <h5 class="email-Login"> Email</h5>
        <input id="mail" class="mt-2" type="text">
        <h5 class="password-Login"> Password</h5>
        <input type="password" id="pass" class="mt-2" type="text">
        <button class="btn-modal" onclick="selecionContenido(1),selecionContenido(5), generarEmpresa()">Iniciar sesión</button>
        </form>
        </div>
     `


}
/******************************************************************************************** */


//Función para evitar el recargo por defecto del navegador al enviar formulario
function noRecargo(event){
    event.preventDefault();
}

/******************************************************************************************** */
//TODO:Genera las categorías 
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
/******************************************************************************************** */
//Todo productos
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
              <button id="opcion-orden" class="btn-orden opcion" onclick="detalleOrden(), selecionContenido(7) " onchange="">
              ordenar
            </button> 
              <p id="" class="card-precio">  Desde:L. ${producto.precio} </p>
          </h6>
      </div>
           
            `;
    }) 
} 

//Todo productos

/******************************************************************************************** */
//!TODO lo que Genera contenido de notificaciones
//!me falta llamar a los productos
function GeneraNotificaciones() {
    console.log('notificaciones');
    //!agregarle el formateo por que se regresa varias 
    document.getElementById('sub-notificacion').innerHTML = ''; 
    document.getElementById('sub-notificacion').innerHTML += `

    <section  class="modalAnoti    modalA--Shownoti">
    <!--Modal Conteiner -->
    <div class="modalBnoti">  
      <div class="   " style="text-align: center;" >
            <div class="NotIconos">
                <i  id="lupaNoti"class="fa-solid fa-left-long"></i>
                <h1 class="Noti"> Notificaciones </h1>
                <i id="lupaNoti" class="fa-solid fa-magnifying-glass  ml-auto "></i>
                
          </div>
          <img src="img/publicidad/notificationl.jpg" alt=""  class="notiImg">
              <div>
                <h1 class="NotiWell">Nuevas</h1>
                <p  class="NotiWel">Lorem ipsum dolor sit 
                . sequi.</p>
              <h1  class="NotiWell">Anteriores</h1>
              <p  class="NotiWel">Lorem.</p>
           </div>
           <!--TODO:  no me cierra seleccion 2 es la landig page-->
           <div class="opcionnoti"  >
           <button  class="modalclosenoti"  onclick="cerrarNoti()" >Cancelar</button>
       </div>
      </div> 
    </div>
 </div>
  </section>
   
    
    `; 

     //button  class="modalclosenoti" = no dejar el id vacios cerrar y las "" onclick atributo aparte
}
//!TODO lo que Genera contenido de notificaciones
/******************************************************************************************** */

//?ordenes
//Genera el contenido del detalle de el producto a ordenar 
function detalleOrden() { 
    document.getElementById('contenido-7').innerHTML = ''; 
    productos.forEach(function (producto) { 
        document.getElementById('contenido-7').innerHTML += `
        
                <div class=" cardOrden">
                    <div class="row" id=""   class="" >
                        <p>${producto.nombreProducto}</p>
                        <p>${producto.descripcion}</p>
                       <p  class="PrecioOrden">Precio L.${producto.precio}</p>   
                    </div>
                </div>
       <button id="opcion-inicio" class="btn-inicio opcion    ordenbutton" onclick=" selecionContenido(8) " onchange="">
           Realizar pago
      
          </button>

           
            `;
    }) 
} 

/******************************************************************************************** */
//!Pedidos 2

function cargarPedidos(){
    document.getElementById('sub-misPedidos').innerHTML = ''; 
    document.getElementById('sub-misPedidos').innerHTML += `
   <section  class="modalApedidos   modalA--Showpedidos ">
         <!--Modal Conteiner pedidos -->
         <div class="modalBpedidos"> 
         <div class="pedidosText">
        <h1 class="PedidosH">Mis Orden </h1>
       </div>
        <img class="imgpedidos" src="img/publicidad/pedidos.jpg" alt="">
           <div class="botonPedidos" style="text-align: center;" ></div>
               <p class="ordenes2" ></p>
               <button  class="  modalclosepedidos " onclick="cerrarPedidos()"  >
               Activos</button>
               <button  class="  modalclosepedidos" onclick="cerrarPedidos()"  >
               Hitorial</button>

                <!--TODO:  no me cierra seleccion 2 es la landig page-->
                <div class="opcionpedido"  >
                
            </div>
 
              
           </div> 
         </div>
       </section>`;
       console.log(" cargarPedidos");
 
    }
    

  /******************************************************************************************** */
  //! Cuenta 5
    function cargarCuenta(){
        console.log('cuenta')
        document.getElementById('sub-cuenta').innerHTML = ''; 
        document.getElementById('sub-cuenta').innerHTML += `

      
           `;
           
           console.log(" cargarcuenta");
     
        }
        

/******************************************************************************************** */
/* relizar pago get 
obtener pago get
const options = {method: 'GET'};

fetch('http://localhost:3000/api/v1/pay/', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));  */
/******************************************************************************************** */

//!Generar Pago 4
function pago(){
    document.getElementById('sub-pago').innerHTML = ''; 
    document.getElementById('sub-pago').innerHTML += `

       
       `;
       console.log(" cargarPago");
 
    }


/******************************************************************************************** */

//*Genera el contenido en sub- menus 
// con este elemmento  "sub-ayuda"  se abre la ventana de ayuda
/*
const openModal= document.querySelector('sub-ayuda');
const modalA=document.querySelector('.modalA');
const  closeModal=document.querySelector('.modalclose');

openModal.addEventListener('onclick', ()=>{

    modalA.classList.add('modalA--Show');
   
});

closeModal.addEventListener('onclick', ()=>{
   
    modalA.classList.remove('modalA--Show');
    console.log('ver el erreo');

   
});*/
/******************************************************************************************** */
 //! cerrar-submenu-ayuda 7
 function cerrarAyuda()
   {
     console.log('cerarAyuda');

    //empresa
    document.getElementById('contenido-1').style.display = "block";
    document.getElementById('contenido-2').style.display = "none";
    document.getElementById('contenido-3').style.display = "none";
    document.getElementById('contenido-4').style.display = "none";
    document.getElementById('contenido-5').style.display = "block";
    document.getElementById('contenido-6').style.display = "none";
    document.getElementById('contenido-7').style.display = "none";
    document.getElementById('contenido-8').style.display = "none";
    document.getElementById('sub-ayuda').style.display = "none";
    document.getElementById('contenido-all-principal').style.display = "block";

    //ayuda
    /*
    
    document.getElementById('contenido-all-principal').style.display = "block";
    document.getElementById('sub-notificacion').style.display = "none";
    document.getElementById('sub-misPedidos').style.display = "none";
    document.getElementById('sub-cupones').style.display = "none";
    document.getElementById('sub-pago').style.display = "none";
    document.getElementById('sub-cuenta').style.display = "none";
    document.getElementById('sub-seguridad').style.display = "none";
    document.getElementById('sub-ayuda').style.display = "none";  
    */
 } 

//! cerrar-submenu-ayuda 7
/******************************************************************************************** */

 //Todocerrar-submenu-Pedidos 2
 function cerrarPedidos()
 {
  //empresa
  document.getElementById('contenido-1').style.display = "block";
  document.getElementById('contenido-2').style.display = "none";
  document.getElementById('contenido-3').style.display = "none";
  document.getElementById('contenido-4').style.display = "none";
  document.getElementById('contenido-5').style.display = "block";
  document.getElementById('contenido-6').style.display = "none";
  document.getElementById('contenido-7').style.display = "none";
  document.getElementById('contenido-8').style.display = "none";
  document.getElementById('sub-misPedidos').style.display = "none";
  document.getElementById('contenido-all-principal').style.display = "block";

  //cerrar
  /*
  document.getElementById('contenido-all-principal').style.display = "block";
  document.getElementById('sub-notificacion').style.display = "none";
  document.getElementById('sub-misPedidos').style.display = "none";
  document.getElementById('sub-cupones').style.display = "none";
  document.getElementById('sub-pago').style.display = "none";
  document.getElementById('sub-cuenta').style.display = "none";
  document.getElementById('sub-seguridad').style.display = "none";
  document.getElementById('sub-ayuda').style.display = "none";

     */
      

} 
 //Todocerrar-submenu-Pedidos 2
/******************************************************************************************** */
//! cerrar-submenu-Notificaciones 1
function cerrarNoti() {
   
  //empresa
  document.getElementById('contenido-1').style.display = "block";
  document.getElementById('contenido-2').style.display = "none";
  document.getElementById('contenido-3').style.display = "none";
  document.getElementById('contenido-4').style.display = "none";
  //pagina de las empresas que quiero visualizar 5
  document.getElementById('contenido-5').style.display = "block";
  document.getElementById('contenido-6').style.display = "none";
  document.getElementById('contenido-7').style.display = "none";
  document.getElementById('contenido-8').style.display = "none";
  //reliza la funcion 
  document.getElementById('sub-notificacion').style.display = "none";
  //principal
  document.getElementById('contenido-all-principal').style.display = "block";

  //cerrar
  /*
  
  document.getElementById('contenido-all-principal').style.display = "block";
  document.getElementById('sub-notificacion').style.display = "none";
  document.getElementById('sub-misPedidos').style.display = "none";
  document.getElementById('sub-cupones').style.display = "none";
  document.getElementById('sub-pago').style.display = "none";
  document.getElementById('sub-cuenta').style.display = "none";
  document.getElementById('sub-seguridad').style.display = "none";
  document.getElementById('sub-ayuda').style.display = "none";
  */
} 

//Todocerrar-submenu-notificciones 1
/******************************************************************************************** */


 //Todocerrar-submenu-cuenta 5
 //! cerrar-submenu-cuenta
function cerrarCuenta(){
  
 //empresa
 document.getElementById('contenido-1').style.display = "block";
 document.getElementById('contenido-2').style.display = "none";
 document.getElementById('contenido-3').style.display = "none";
 document.getElementById('contenido-4').style.display = "none";
 //pagina de las empresas que quiero visualizar 5
 document.getElementById('contenido-5').style.display = "block";
 document.getElementById('contenido-6').style.display = "none";
 document.getElementById('contenido-7').style.display = "none";
 document.getElementById('contenido-8').style.display = "none";
 //reliza la funcion 
 document.getElementById('sub-cuenta').style.display = "none";
 //principal
 document.getElementById('contenido-all-principal').style.display = "block";

 //cerrar
 /*
 
 document.getElementById('contenido-all-principal').style.display = "block";
 document.getElementById('sub-notificacion').style.display = "none";
 document.getElementById('sub-misPedidos').style.display = "none";
 document.getElementById('sub-cupones').style.display = "none";
 document.getElementById('sub-pago').style.display = "none";
 document.getElementById('sub-cuenta').style.display = "none";
 document.getElementById('sub-seguridad').style.display = "none";
 document.getElementById('sub-ayuda').style.display = "none";
 */
} 
//Todocerrar-submenu-cuenta 5

/******************************************************************************************** */
//! cerrar-submenu-cupon 3
function cerrarCupones(){
  
    //empresa
    document.getElementById('contenido-1').style.display = "block";
    document.getElementById('contenido-2').style.display = "none";
    document.getElementById('contenido-3').style.display = "none";
    document.getElementById('contenido-4').style.display = "none";
    //pagina de las empresas que quiero visualizar 5
    document.getElementById('contenido-5').style.display = "block";
    document.getElementById('contenido-6').style.display = "none";
    document.getElementById('contenido-7').style.display = "none";
    document.getElementById('contenido-8').style.display = "none";
    //reliza la funcion 
    document.getElementById('sub-cupones').style.display = "none";
    //principal
    document.getElementById('contenido-all-principal').style.display = "block";
   
    //cerrar
    /*
    
    document.getElementById('contenido-all-principal').style.display = "block";
    document.getElementById('sub-notificacion').style.display = "none";
    document.getElementById('sub-misPedidos').style.display = "none";
    document.getElementById('sub-cupones').style.display = "none";
    document.getElementById('sub-pago').style.display = "none";
    document.getElementById('sub-cuenta').style.display = "none";
    document.getElementById('sub-seguridad').style.display = "none";
    document.getElementById('sub-ayuda').style.display = "none";
    */
   } 
   //Todocerrar-submenu-Cupones 3
   
   /******************************************************************************************** */



   /******************************************************************************************** */
//! cerrar-submenu-Pago 4
function cerrarPago(){
  
    //empresa
    document.getElementById('contenido-1').style.display = "block";
    document.getElementById('contenido-2').style.display = "none";
    document.getElementById('contenido-3').style.display = "none";
    document.getElementById('contenido-4').style.display = "none";
    //pagina de las empresas que quiero visualizar 5
    document.getElementById('contenido-5').style.display = "block";
    document.getElementById('contenido-6').style.display = "none";
    document.getElementById('contenido-7').style.display = "none";
    document.getElementById('contenido-8').style.display = "none";
    //reliza la funcion 
    document.getElementById('sub-pago').style.display = "none";
    //principal
    document.getElementById('contenido-all-principal').style.display = "block";
   
    //cerrar
    /*
    
    document.getElementById('contenido-all-principal').style.display = "block";
    document.getElementById('sub-notificacion').style.display = "none";
    document.getElementById('sub-misPedidos').style.display = "none";
    document.getElementById('sub-cupones').style.display = "none";
    document.getElementById('sub-pago').style.display = "none";
    document.getElementById('sub-cuenta').style.display = "none";
    document.getElementById('sub-seguridad').style.display = "none";
    document.getElementById('sub-ayuda').style.display = "none";
    */
   } 
   //Todocerrar-submenu-Pago 4
   
 /******************************************************************************************** */

   //! cerrar-submenu-Seguridad 7
function cerrarSeguridad(){
  
    //empresa
    document.getElementById('contenido-1').style.display = "block";
    document.getElementById('contenido-2').style.display = "none";
    document.getElementById('contenido-3').style.display = "none";
    document.getElementById('contenido-4').style.display = "none";
    //pagina de las empresas que quiero visualizar 5
    document.getElementById('contenido-5').style.display = "block";
    document.getElementById('contenido-6').style.display = "none";
    document.getElementById('contenido-7').style.display = "none";
    document.getElementById('contenido-8').style.display = "none";
    //reliza la funcion 
    document.getElementById('sub-seguridad').style.display = "none";
    //principal
    document.getElementById('contenido-all-principal').style.display = "block";
   
    //cerrar
    /*
    
    document.getElementById('contenido-all-principal').style.display = "block";
    document.getElementById('sub-notificacion').style.display = "none";
    document.getElementById('sub-misPedidos').style.display = "none";
    document.getElementById('sub-cupones').style.display = "none";
    document.getElementById('sub-pago').style.display = "none";
    document.getElementById('sub-cuenta').style.display = "none";
    document.getElementById('sub-seguridad').style.display = "none";
    document.getElementById('sub-ayuda').style.display = "none";
    */
   } 
   //Todocerrar-submenu-seguridad 7
   
   /******************************************************************************************** */


   
   //! cerrar-submenu-Seguridad 7
function cerrarOrden(){
  
    //empresa
    document.getElementById('contenido-1').style.display = "block";
    document.getElementById('contenido-2').style.display = "none";
    document.getElementById('contenido-3').style.display = "none";
    document.getElementById('contenido-4').style.display = "none";
    //pagina de las empresas que quiero visualizar 
    document.getElementById('contenido-5').style.display = "none";
    document.getElementById('contenido-6').style.display = "none";
    document.getElementById('contenido-7').style.display = "block";
    document.getElementById('contenido-8').style.display = "none";
    //reliza la funcion 
    document.getElementById('sub-seguridad').style.display = "none";
    //principal
    document.getElementById('contenido-all-principal').style.display = "block";
   
    //cerrar
    /*
    
    document.getElementById('contenido-all-principal').style.display = "block";
    document.getElementById('sub-notificacion').style.display = "none";
    document.getElementById('sub-misPedidos').style.display = "none";
    document.getElementById('sub-cupones').style.display = "none";
    document.getElementById('sub-pago').style.display = "none";
    document.getElementById('sub-cuenta').style.display = "none";
    document.getElementById('sub-seguridad').style.display = "none";
    document.getElementById('sub-ayuda').style.display = "none";
    */
   } 
   //Todocerrar-submenu-seguridad 7
   
   /******************************************************************************************** */




//? End-submenu-ayuda y ya cierrar no lo he utilizado
//! Pedidos, Ventana modal 
console.log();
function modalPedidos () {
    document.getElementById ('').innerHTML = '';
    console.log (`Usuario: ${valor}`)
    let usuario = usuarios[valor];
    //! Pedidos, sub-menu pedidos que esa l que se tiene que mostrar
    document.getElementById ('modalBody').innerHTML = '';
    document.getElementById ('tituloModalPedidos').innerHTML = `${usuario.nombre}, estas son tus ordenes`;
    usuario.ordenes.forEach (function(ordenes){
        document.getElementById ('modalBody').innerHTML += `
                                <div class="row">
                                <div class="col-12 fw-bold">
                                    ${ordenes.nombreProducto}
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    ${ordenes.descripcion}
                                </div>
                            </div><div class="row">
                                <div class="col-12 text-end">
                                    ${ordenes.precio}
                                </div>
                            </div><hr>`
    })
    $('#modalPedidos').modal('show');
}
/******************************************************************************************** */
/*
//! consumir el backend, funciones flecha, anonima, funcion normal 
//por medio de la get estavamos consuminedo
axios({
    method: 'get',
    url:'http://localhost:3000/api/v1/users/'
})
//si la peticion sale bien se ejecuta el siguiente codigo
.then((res) => {
    console.log(res);
    //
    console.log(res.data);
    //de aca  puedo obtener las ordenes y la cargamos
    //lo formateamos antes para que, se carge el primero y n siguen 
    // poblar en el backen lo de ordesnes y llarla depues 
    document.getElementById('sub-misPedidos').innerHTML =''
    res.data.forEach(elemento =>{
        console.log(elemento);
        console.log(elemento.nombre);
        console.log(elemento.ordenes);
        document.getElementById('sub-misPedidos').innerHTML +=` 
        <section  class="modalAordenes    modalA--Showorden">
         <!--Modal Conteiner ordenes-->
         <div class="modalBordenes"> 
         <h1 class="">!Hola!</h1>
           <div class=" " style="text-align: center;" ></div>
               <h1 class="ordenes"> Estas son tus ordenes</h1>
               <img  class="img-ayuda" src="img/publicidad/1532688.png" alt="">

                <!--TODO:  no me cierra seleccion 2 es la landig page-->
                <div class="opcionOrden"  >
                <button  class="  modalcloseorden" onclick="cerrarPedidos()"  >
                  Cerrar</button>
            </div>
 
              
           </div> 
         </div>
       </section>`;
    

    });
}) 
//si ocurre un error 
.catch((res) => {
        console.log(res);
})
*/
//!promesas

// Esta es la que carga Pedidos sub-misPedidos
  

