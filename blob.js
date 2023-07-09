
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