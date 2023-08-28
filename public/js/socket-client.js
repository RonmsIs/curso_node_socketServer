
//referencias del html
const lbOnline   = document.querySelector('#lbOnline');
const lbOffline  = document.querySelector('#lbOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();


socket.on('connect',()=>{

    // console.log('conectado');

    lbOffline.style.display = 'none';
    lbOnline.style.display = '';
});

socket.on('disconnect',()=>{

    // console.log('desconectado del servidor');
    
    lbOffline.style.display = '';
    lbOnline.style.display = 'none';
});

socket.on('enviar-mensaje',(payload)=>{

    console.log(payload)
});


btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload, (id) =>{
        console.log('desde el server',id);
    });


});