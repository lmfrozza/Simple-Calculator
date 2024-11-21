//FUNCTIONS 

let result = 0
let operation = "+"
function InsertNumber(num) {
    console.log(num)
    const screen = document.getElementById('Screen-Numbers');
    
    if(screen.textContent.length < 15){
        screen.textContent = screen.textContent+num;
    }else{
        alert("Too long...")
    }
    
}

function Clean_Screen(){
    const screen = document.getElementById('Screen-Numbers');
    screen.textContent = ''
    result = 0
}

function ChangeSignal(){

    const screen = document.getElementById('Screen-Numbers');
    const floatNumber = parseFloat(screen.textContent)
    

    if(floatNumber > 0){
        screen.textContent = "-"+screen.textContent
    }else{
        if(floatNumber < 0){
            screen.textContent = Math.abs(floatNumber)
        }
    }
}

function SliceBtn(){
    const screen = document.getElementById('Screen-Numbers');
    screen.textContent = (screen.textContent).slice(0, -1)
}

function Ope(btn){
    const screen = document.getElementById('Screen-Numbers');
    const floatNumber = parseFloat(screen.textContent)
    if(btn == '='){
        if (floatNumber >0){
            if(operation == "+"){
                screen.textContent = result + floatNumber
            }
            if(operation == "-"){
                screen.textContent = result - floatNumber
            }
            if(operation == "/"){
                screen.textContent = result / floatNumber
            }
            if(operation == "x"){
                screen.textContent = result * floatNumber
            }
        }else{
            screen.textContent = result
        }
        console.log(result ,floatNumber)
    }
    
    if(btn == "+"){
        operation = "+"
        Clean_Screen()
        result += floatNumber
        console.log("New Value for result: ", result)
    }
    if(btn == "-"){
        operation = "-"
        Clean_Screen()
        result = floatNumber - result
        console.log("New Value for result: ", result)
    }
    if(btn == "/"){
        operation = "/"
        Clean_Screen()
        if(result == 0){
            console.log("Result = 0")
            console.log("Float Number = ", floatNumber)
            result = floatNumber
        }else{
            result = result / floatNumber
        }
        console.log("New Value for result: ", result)
    }
    if(btn == "x"){
        operation = "x";
        Clean_Screen();
        if(result == 0){
            console.log("Result = 0")
            console.log("Float Number = ", floatNumber)
            result = floatNumber
        }else{
            result = result * floatNumber
        }
        console.log("New Value for result: ", result);
    }
}
//LISTENERS
const NumBtns = document.getElementsByClassName("Num-btn"); 
for (let i = 0; i < NumBtns.length; i++) {
    NumBtns[i].addEventListener('click', function () {
        InsertNumber(NumBtns[i].textContent); 
    });
}

const CleanButton = document.getElementById('Clean-Btn').addEventListener('click',Clean_Screen)

const ChangeSignal_Btn = document.getElementById("ChangeValue");
ChangeSignal_Btn.addEventListener('click',ChangeSignal);

const Slice_Btn = document.getElementById("Slice").addEventListener("click", SliceBtn)


const OpeBtns = document.getElementsByClassName("Ope-btn");
for (let c = 0; c < OpeBtns.length; c++){
    OpeBtns[c].addEventListener('click', function (){
        Ope(OpeBtns[c].textContent)
    });
}