let mainInput = document.querySelector("input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

class Item{
    constructor(mainInput){
        this.crearDiv(mainInput)
    }
    crearDiv(mainInput){

        if(mainInput){

            var inputItem = document.createElement("input")
            inputItem.setAttribute("type", "text")
            inputItem.setAttribute("disabled", "true")
            inputItem.classList.add("item-input")
            inputItem.value = mainInput
            var divItem = document.createElement("div")
            divItem.classList.add("item")

            var botonEditar = document.createElement("button")
            botonEditar.innerHTML = `<i class="fas fa-lock"></i>`
            botonEditar.classList.add("boton-editar")

            var botonRemover = document.createElement("button")
            botonRemover.innerHTML = `<i class="fas fa-trash-alt"></i>`
            botonRemover.classList.add("boton-remover")

            botonEditar.addEventListener("click", function(){
                inputItem.toggleAttribute("disabled")? botonEditar.innerHTML = `<i class="fas fa-lock"></i>`:botonEditar.innerHTML = `<i class="fas fa-unlock"></i>`;
            })

            botonRemover.addEventListener("click", function(){
                container.removeChild(divItem);
            })
            
            divItem.appendChild(inputItem);
            divItem.appendChild(botonEditar);
            divItem.appendChild(botonRemover);
            container.appendChild(divItem)

        }else{
            alert("Por favor agregue una tarea")
        }
    }
}

function chequearInput(mainInput){
    if(mainInput){

        new Item(mainInput.value)

        mainInput.value="";
    }
}

mainInput.addEventListener("keydown", function(e){
    if(e.code == "Enter"){
        chequearInput(mainInput);
    }
})

botonAgregar.addEventListener("click", function(){
    chequearInput(mainInput)
})


