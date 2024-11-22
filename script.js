//FUNCTIONS 
let LMenu = false
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
                addRowToLog(result, floatNumber, "+", result + floatNumber)
            }
            if(operation == "-"){
                screen.textContent = result - floatNumber
                addRowToLog(result, floatNumber, "-", result - floatNumber)
            }
            if(operation == "/"){
                screen.textContent = result / floatNumber
                addRowToLog(result, floatNumber, "/", result / floatNumber)
            }
            if(operation == "x"){
                screen.textContent = result * floatNumber
                addRowToLog(result, floatNumber, "x", result * floatNumber)
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

function Activate_Logs(){
    logs_menu.classList.add("active");
}
function Deactivate_Logs(){
    logs_menu.classList.remove("active");
}

function addRowToLog(n1,n2,ope,log_result) {
    const newRow = document.createElement('tr');
    
    const N1Cell = document.createElement('td');
    N1Cell.textContent = n1;
    newRow.appendChild(N1Cell);

    const operationCell = document.createElement('td');
    operationCell.textContent = ope;
    newRow.appendChild(operationCell);

    const N2Cell = document.createElement('td');
    N2Cell.textContent = n2;
    newRow.appendChild(N2Cell);

    const ResultCell = document.createElement('td');
    ResultCell.textContent = log_result;
    newRow.appendChild(ResultCell);



    const tableBody = document.getElementById('tableBody');
    tableBody.appendChild(newRow);
}

function removeAllRows() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Limpa o conteúdo do tbody
}

//LISTENERS
const NumBtns = document.getElementsByClassName("Num-btn"); 
for (let i = 0; i < NumBtns.length; i++) {
    NumBtns[i].addEventListener('click', function () {
        InsertNumber(NumBtns[i].textContent); 
    });
}

const CleanButton = document.getElementById('Clean-Btn').addEventListener('click',Clean_Screen)
const CleanLogs = document.getElementById('Clean-Btn').addEventListener('click',removeAllRows)

const ChangeSignal_Btn = document.getElementById("ChangeValue");
ChangeSignal_Btn.addEventListener('click',ChangeSignal);

const Slice_Btn = document.getElementById("Slice").addEventListener("click", SliceBtn)


const OpeBtns = document.getElementsByClassName("Ope-btn");
for (let c = 0; c < OpeBtns.length; c++){
    OpeBtns[c].addEventListener('click', function (){
        Ope(OpeBtns[c].textContent)
    });
}

// LOGS MENU

const logs_menu = document.getElementById('Logs');
const logs_btn = document.getElementsByClassName("Log-btn");

// Itera sobre todos os botões com a classe "Log-btn"
for (let i = 0; i < logs_btn.length; i++) {
    logs_btn[i].addEventListener('click', () => {
        if(LMenu == false){
            Activate_Logs();
            LMenu = true;
        }else{
            Deactivate_Logs();
            LMenu = false;
        }
    });
}




