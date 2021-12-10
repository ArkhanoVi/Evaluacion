let el, i;
let data = [
  { nombre: "Skittles", costo: 10.00,iva: .16,precio:10.16 },
  { nombre: "caramelos confitados", costo: 20.00,iva:0.32,precio:20.32  },
  { nombre: "Agua 600ml", costo: 10.50, iva:0, precio: 10.50},
  { nombre: "Agua 1L", costo: 8.60,iva:0, precio:8.60 }
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#nombre").value = "";
  document.querySelector("#costo").value = "";
  document.querySelector("#iva").value = "";
  document.querySelector("#precio").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `Articulo: ${x.nombre} costo: $${x.costo} IVA: $${x.iva}  Precio: $${x.precio}`;
    panel.append(el);
  });
}

function create() {
  let nm = document.querySelector("#nombre").value;
  let cs = document.querySelector("#costo").value;
  let iv = document.querySelector("#iva").value;
  let pr = document.querySelector("#precio").value;
  data = [...data, { nombre: nm, costo: cs,iva:iv,precio:pr }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#nombre").value = data[i].nombre;
  document.querySelector("#costo").value = data[i].costo;
  document.querySelector("#iva").value = data[i].iva;
  document.querySelector("#precio").value = data[i].precio;
}

function update() {
  data[i].nombre = document.querySelector("#nombre").value;
  data[i].costo = document.querySelector("#costo").value;
  data[i].iva = document.querySelector("#iva").value;
  data[i].precio = document.querySelector("#precio").value;
  
  renderItem();
}
function calculaIVA(){
    let cs = document.querySelector("#costo").value;
    let iv = document.querySelector("#iva");
    let pr = document.querySelector("#precio");
    var iva, precio;
    console.log("Calcula IVA");
    iva = cs * 0.16;
    console.log("IVA calculado:"+iva);
    precio= parseFloat(cs)+parseFloat(iva);  
    console.log("Precio calculado:"+precio);
    iv.value= iva;
    pr.value=precio;
    

}
function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();