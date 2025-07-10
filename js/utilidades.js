export function Fecha_Actual(){
    const ahora = new Date()
    const formatoLocal = ahora.toLocaleString('es-PE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
    })
    return formatoLocal
}

export function Fecha_Corta(){
    
    const ahora = new Date();

    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0') 
    const año = ahora.getFullYear();

    const horas = ahora.getHours().toString().padStart(2, '0')
    const minutos = ahora.getMinutes().toString().padStart(2, '0')

    const formato = `${dia}/${mes}/${año} ${horas}:${minutos}`
    return formato
}