var tanque = 40; // litros
var distancia = 480; // km
var consumoGasolina = (distancia / tanque).toFixed(0);
var precoGasolina = 2.90;
var despesaPorKm = (precoGasolina / consumoGasolina).toFixed(2);
document.write("A autonomia do carro com gasolina foi de " + consumoGasolina + " km/litro. Despesa: R$ " + despesaPorKm + " /km.", "<br>");

distancia = 300; // nova distância, também em km
var consumoAlcool = (distancia / tanque).toFixed(0);
var precoAlcool = 2.40;
despesaPorKm = (precoAlcool / consumoAlcool).toFixed(2);

document.write("A autonomia do carro com álcool foi de " + consumoAlcool + " km/litro. Despesa: R$ " + despesaPorKm + " /km.", "<br>");
