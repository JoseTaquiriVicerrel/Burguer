const list = document.querySelector(".list-productos");
const listProductos = list.getElementsByTagName("input");

var array = ["Pizza", "Ensalada", "Refresco"];
var precios = [7, 10, 3.5];

window.addEventListener("load", function () {
  ActivarCombo(array, 1);
});

var check = document.getElementById("ListaCombos");
check.addEventListener("change", (event) => {
  var indice = check.value;
  DesactivarCombo(array);
  var valor = 1;
  switch (indice) {
    case "0":
      array = ["Pizza", "Ensalada", "Refresco"];
      precios = [7, 10, 3.5];
      break;
    case "1":
      array = ["Pollo Broster", "Papas", "Gaseosa"];
      precios = [20, 8, 3.5];
      break;
    case "2":
      array = ["Hamburguesa Especial", "Nuggets", "Refresco"];
      precios = [15, 7, 3.5];
      break;
    case "3":
      array = [
        "Pizza",
        "Hamburguesa Especial",
        "Pollo Broster",
        "Nuggets",
        "Papas",
        "Ensalada",
        "Yogurt",
        "Gaseosa",
        "Refresco",
        "Agua Mineral",
      ];
      precios = [7, 15, 20, 7, 8, 10, 8, 2, 3.5, 1.5];
      valor = 0;
      break;
    case "4":
      array = ["Pollo Broster", "Nuggets", "Gaseosa"];
      precios = [20, 7, 2];
      break;
    case "5":
      array = ["Pizza", "Pollo Broster", "Gaseosa"];
      precios = [7, 20, 2];
      break;
    case "6":
      array = ["Ensalada", "Yogurt", "Agua Mineral"];
      precios = [10, 8, 1.5];
      break;
    case "7":
      array = ["Papas", "Ensalada", "Nuggets"];
      precios = [8, 10, 7];
      break;
    case "8":
      array = ["Hamburguesa Especial", "Papas", "Gaseosa"];
      precios = [15, 8, 2];
      break;
    case "9":
      array = ["Pizza", "Ensalada", "Pollo Broster"];
      precios = [7, 10, 20];
      break;
  }
  ActivarCombo(array, valor);
});

function ActivarCombo(list, valor) {
  for (const item in list) {
    document.getElementsByName(list[item])[0].disabled = false;
    document.getElementsByName(list[item])[0].value = valor;
  }
}

function DesactivarCombo(list) {
  for (const item in list) {
    document.getElementsByName(list[item])[0].disabled = true;
    document.getElementsByName(list[item])[0].value = 0;
  }
}

var TotalProducto = 0;
var cal = document.querySelector(".calcular");
cal.addEventListener("click", function () {
  for (let index = 0; index < array.length; index++) {
    var itemList = document.getElementsByName(array[index])[0];
    const cantidad = parseInt(itemList.value, 10);
    TotalProducto += cantidad * precios[index];
  }

  var chkTargeta = document.getElementById("Targeta");
  if (chkTargeta.checked) {
    TotalProducto += TotalProducto * 0.05;
  }
  var chkDelivery = document.getElementById("Delivery");
  if (chkDelivery.checked) {
    TotalProducto += 10;
  }
  var igv = TotalProducto * 0.18;
  var opg = TotalProducto - igv;
  document.getElementById("subtotal").value = "" + opg;
  document.getElementById("IGV").value = "" + igv;
  document.getElementById("total").value = "" + TotalProducto;
  TotalProducto = 0;
});
