const start = document.getElementById('start');
const stop = document.getElementById('stop');
const texto = document.getElementById('texto');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-MX';
recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult = (event) =>{
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
    txt(frase);
}
function txt (frase){
    const guardarArchivoDeTexto = (contenido, nombre) => {
        const a = document.createElement("a");
        const archivo = new Blob([contenido], { type: 'text/plain' });
        const url = URL.createObjectURL(archivo);
        a.href = url;
        a.download = nombre;
        a.click();
        URL.revokeObjectURL(url);
    }
    const $botonDescargar = document.querySelector("#save");
    $botonDescargar.onclick = () => {
        guardarArchivoDeTexto(frase);
    }
}

start.addEventListener('click' , () =>{
    recognition.start();
})
stop.addEventListener('click' , () =>{
    recognition.stop();
})

