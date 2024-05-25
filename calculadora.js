class Calculadora{
    constructor(operando1Elemento, operando2Elemento){
        this.operando1Elemento = operando1Elemento;
        this.operando2Elemento = operando2Elemento;
        this.clear(); 
    }

    clear(){
        this.operando1 =0; 
        this.operando2 =0; 
        this.operador = ''; 
        this.updateUI(); 


        this.operando1Elemento.innerHTML = this.operando1 + this.operador; 
        this.operando2Elemento.innerHTML = this.operando2; 
    }

    updateUI(){
        this.operando1Elemento.innerHTML = this.operando1 + this.operador; 
        this.operando2Elemento.innerHTML = this.operando2;
    }

    appendNumber(number){
        if (number === '.' && this.operando2.includes('.')) return;
        if (this.operando2.length >= 10) return;
        this.operando2= this.operando2 ===0 
                        ? number 
                        : this.operando2.toString() + number; 

        this.updateUI(); 
    }

    delete(){
        if (this.operando2 ===0) return; 
        this.operando2 = +this.operando2.toString().slice(0, -1);
        this.updateUI(); 
    }

    operaciones(operador){
        if (this.operador){
           this.calculo();
        }
        this.operador = operador; 
        this.operando1 = +this.operando2 ===0 ? this.operando1: this.operando2; 
        this.operando2 = 0; 
        this.updateUI();
    }

    calculo(){
        switch(this.operador){
            case "+":
                this.operando1 = +this.operando1 + +this.operando2;
            break;

            case "-":
                this.operando1 = +this.operando1 - +this.operando2;
            break;

            case "*":
                this.operando1 = +this.operando1 * +this.operando2;
            break;

            case "/":
                this.operando1 = +this.operando1 / +this.operando2;
            break; 
        } 
        this.operador = ""; 
        this.operando2 = 0; 
        this.updateUI(); 
    }

}

const operando1Elemento = document.querySelector("[data-operando-1]"); 
const operando2Elemento = document.querySelector("[data-operando-2]"); 
const clearButton = document.querySelector("[data-clear]"); 
const numberButtons = document.querySelectorAll ("[data-number]");
const deleteButton = document.querySelector("[data-delete]"); 
const operacionButtons = document.querySelectorAll("[data-operacion"); 
const equalButton = document.querySelector("[data-equals"); 

const calculadora = new Calculadora (operando1Elemento,operando2Elemento); 

clearButton.addEventListener("click", () =>{
    calculadora.clear(); 
}); 

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculadora.appendNumber(button.innerHTML);
    })
}); 

deleteButton.addEventListener("click", () =>{
    calculadora.delete(); 
}); 

operacionButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculadora.operaciones(button.innerHTML);
    })
}); 

equalButton.addEventListener("click", () =>{
    calculadora.calculo(); 
}); 


