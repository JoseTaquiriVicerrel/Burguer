var check = document.getElementById("ListaCombos");
check.addEventListener("change", (event) => {
  var indice = check.value;
  switch (indice) {
    case "0":
      var array = [0, 5, 8];
      ActiarCombo(array);
      console.log("opcion1");
      break;
    case "1":
      var array = [3, 5, 7];
      ActiarCombo(array);
      console.log("opcion2");
      break;
    case 2:
      ActiarCombo([1, 3, 8]);
      break;
    case 3:
      ActiarCombo([3, 5, 7]);
      break;
    case 4:
      ActiarCombo([3, 5, 7]);
      break;
    case 5:
      ActiarCombo([3, 5, 7]);
      break;
    case 6:
      ActiarCombo([3, 5, 7]);
      break;
  }
  //desabilitar();
});

const item1 = document.getElementById("cbo1");
const item2 = document.getElementById("cbo2");
const item3 = document.getElementById("cbo3");
const item4 = document.getElementById("cbo4");
const item5 = document.getElementById("cbo5");
const item6 = document.getElementById("cbo6");
const item7 = document.getElementById("cbo7");
const item8 = document.getElementById("cbo8");
const item9 = document.getElementById("cbo9");
const item0 = document.getElementById("cbo0");
const arr = [
  item1,
  item2,
  item3,
  item4,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item0,
];

function ActiarCombo(list) {
  desabilitar(true);
  for (let j = 0; j < list.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (list[j] == i) {
        arr[i].disabled = false;
      }
      console.log("[" + list[j], i + "]");
    }
  }
}
function desabilitar(aux) {
  item1.disabled = aux;
  item2.disabled = aux;
  item3.disabled = aux;
  item4.disabled = aux;
  item5.disabled = aux;
  item6.disabled = aux;
  item7.disabled = aux;
  item8.disabled = aux;
  item9.disabled = aux;
  item0.disabled = aux;
}
