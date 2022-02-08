
let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="img/perritos1.jpg" class="img-fluid rounded imagen1" alt="">',
        '<img src="img/perritos2.jpg" class="img-fluid rounded imagen2" alt="">',
        '<img src="img/perritos3.jpg" class="img-fluid rounded imagen3" alt="">',
        '<img src="img/perritos4.jpg" class="img-fluid rounded imagen4" alt="">',
        '<img src="img/perritos5.jpg" class="img-fluid rounded imagen5" alt="">',
        '<img src="img/perritos6.jpg" class="img-fluid rounded imagen6" alt="">',
        '<img src="img/perritos7.jpg" class="img-fluid rounded imagen7" alt="">',
        '<img src="img/perritos8.jpg" class="img-fluid rounded imagen8" alt="">',
        '<img src="img/perritos9.jpg" class="img-fluid rounded imagen9" alt="">',
        '<img src="img/perritos10.jpg" class="img-fluid rounded imagen10" alt="">',
        '<img src="img/perritos11.jpg" class="img-fluid rounded imagen11" alt="">',
        '<img src="img/perritos12.jpg" class="img-fluid rounded imagen12" alt="">',
    ]
}

function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                     ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="fas fa-question"></i>
                </div>
            </div>
        </div>
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}
