AOS.init();

const dataDoEvento = new Date("jan 01, 2026, 00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24 ;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (diaEmMs));
    const horasAteOEvento = Math.floor(distanciaAteOEvento % (diaEmMs) / (horasEmMs));
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % (horasEmMs) / (minutosEmMs));
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutosEmMs / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000);