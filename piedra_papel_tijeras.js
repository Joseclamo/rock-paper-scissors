var contador_maq = 0
var contador_jugador = 0

function piedra_papel_tijeras(mano) {
    var maquina = ["piedra", "papel", "tijeras"];
    var maquina_num = maquina.length;
    numero = Math.floor(Math.random() * maquina_num); /* se podria poner directamente maquina.length*/
    mano_maquina = maquina[numero];
    eleccion = `La máquina ha elejido ${mano_maquina}`;

    if (mano == "piedra" && mano_maquina == "papel") {
        console.log("Has perdido!");
        contador_maq++;
        document.getElementById("mensaje").innerHTML = " Has perdido!! " + eleccion + ": Tú " + contador_jugador + " - Máquina: " + contador_maq;
    } else if (mano == "piedra" && mano_maquina == "tijeras") {
        console.log("Has ganado!");
        contador_jugador++;
        document.getElementById("mensaje").innerHTML = " Has ganado!! " + eleccion + ": Tú " + contador_jugador + " - Máquina: " + contador_maq;
    } else if (mano == "papel" && mano_maquina == "piedra") {
        console.log("Has ganado!");
        contador_jugador++;
        document.getElementById("mensaje").innerHTML = " Has ganado!! " + eleccion + ": Tú " + contador_jugador + " - Máquina: " + contador_maq;
    } else if (mano == "papel" && mano_maquina == "tijeras") {
        console.log("Has perdido!");
        contador_maq++;
        document.getElementById("mensaje").innerHTML = " Has perdido!! " + eleccion + ": Tú " + contador_jugador + " - Máquina: " + contador_maq;
    } else if (mano == "tijeras" && mano_maquina == "piedra") {
        console.log("Has perdido!");
        contador_maq++;
        document.getElementById("mensaje").innerHTML = " Has perdido!! " + eleccion + ": Tú " + contador_jugador + " - Máquina: " + contador_maq;
    } else if (mano == "tijeras" && mano_maquina == "papel") {
        console.log("Has ganado!");
        contador_jugador;
        document.getElementById("mensaje").innerHTML = " Has ganado!! " + eleccion + ": Tú " + contador_jugador + " - Máquina: " + contador_maq;
    } else {
        console.log("Empate!");
        document.getElementById("mensaje").innerHTML = "Empate!! " + eleccion + ": Tú " + contador_jugador + " - Máquina: " + contador_maq;
    }
}


$('.piedra').click(function() {
    $(".piedra").click(function() {
        var div = $("div");
        div.animate({ left: '100px' }, "slow");
        div.animate({ fontSize: '3em' }, "slow");
    });
    piedra_papel_tijeras('piedra');
});


$('.papel').click(function() {
    piedra_papel_tijeras("papel");
});

$('.tijeras').click(function() {
    piedra_papel_tijeras("tijeras");
});

/*$('.piedra').click(function() {
    piedra_papel_tijeras("piedra");
});

$('.piedra').click(function() {
    $(".piedra").click(function() {
        var div = $("div");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
        piedra_papel_tijeras('piedra');
    });
});


*/