const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
let valor_inputTexto="";
let valor_mensagem = "";
let criptografado = false;
let decriptografado = false;
document.getElementById("aviso-mensagem").style.display = "block";
document.getElementById("copiado").style.display = "none";
document.getElementById("naoCopiado").style.display = "none";


const matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];



    const textoValidado = document.querySelector("#entrada-texto");
    textoValidado.addEventListener("keypress", function(e) {
        if(!checagemCaractere(e)) {
            e.preventDefault();   
        }
    })



function checagemCaractere(e) {
    const char = String.fromCharCode(e.keyCode);
    console.log(e.keyCode);
    var padrao = '[ a-z0-9]'; // aceita espaço, letras minúsculas e números   
        if(char.match(padrao)) {
            return true;
        }
}



function btnEncriptar() {     
    mensagem.value="";
    const textoEncriptado = encriptar(inputTexto.value);

    if (inputTexto.value == "") {
        criptografado = false;
        inputTexto.placeholder = "\n\nNenhum texto digitado!\n\nDigite seu texto em clique no botão CRIPTOGRAFAR!";            
            if (mensagem.placeholder.length !=0) {
                document.getElementById("copiado").style.display = "none";
                document.getElementById("naoCopiado").style.display = "none";
                resetMensagem();
        }
    } else {   
            escondeTodasImagens();
            valor_inputTexto = inputTexto.value;
            inputTexto.value=""; 
            inputTexto.placeholder = "Seu texto foi criptografado!";
            mensagem.value = textoEncriptado;
            mensagem.style.backgroundImage="none"; 
            criptografado=true;  
            escondeMensagem();
    }
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {

    escondeTodasImagens();    
    mensagem.placeholder ="" ;
    decriptografado = false;
    const textoEncriptado = desencriptar(valor_inputTexto);

    if (criptografado == false) {
        inputTexto.placeholder = "\n\nPrimeiro digite seu texto e clique no botão Criptografar!"
        document.getElementById("aviso-mensagem").style.display = "block";
        mensagem.value=""; 
        if (mensagem.placeholder.length == 0) {
            resetMensagem();
        }

    }   
    else {
            inputTexto.value = "";
            inputTexto.placeholder = "\n\nSeu texto foi descriptografado!\n\n\n\nSe desejar uma nova criptografia digite seu texto NESTA CAIXA e clique no botão Criptografar";        
            mensagem.value = textoEncriptado;
            mensagem.style.backgroundImage="none";    
            criptografado=false; 
            decriptografado = true;  
            
         }
}



function desencriptar(stringEncriptada) {

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}


function btnCopiar(){      
          
        if (criptografado) {    
            navigator.clipboard.writeText(mensagem.value);
            mensagem.value = "";
            inputTexto.placeholder = "\n\nSUA MENSAGEM FOI COPIADA!" ;
            mensagem.placeholder = '\nMensagem copiada com sucesso!'
               
            escondeMensagem();  
            imagemCopiado();       
    
        }         
        else if (decriptografado) {
            navigator.clipboard.writeText(mensagem.value);
            mensagem.value = "";            
            inputTexto.placeholder = "\n\nSUA MENSAGEM FOI COPIADA!" ;
            mensagem.placeholder = "\nMensagem copiada com sucesso!"
            escondeMensagem();  
            imagemCopiado();
        }
        else{

            valor_mensagem = mensagem.value;
            mensagem.value = "";
            mensagem.placeholder = "\nNenhuma mensagem para copiar!" ;
            inputTexto.placeholder = "\n\nSó é possível copiar após Criptografar/Descriptografar algo..." ;              
            naoCopiado();           
            }
    }    

function resetMensagem() {
    mensagem.style.backgroundImage= url("/boneco.png");   
    document.getElementById("aviso-mensagem").style.display = "block";  
    mensagem.placeholder = "";    
}

function imagemCopiado(){
    mensagem.style.backgroundImage="none";
    document.getElementById("copiado").style.display = "block";
    document.getElementById("naoCopiado").style.display = "none";

        
}

function naoCopiado(){
    mensagem.style.backgroundImage="none";
    document.getElementById("naoCopiado").style.display = "block";    
    document.getElementById("copiado").style.display = "none";

}

function escondeMensagem(){
    document.getElementById("aviso-mensagem").style.display = "none";
}

function escondeTodasImagens(){
    document.getElementById("aviso-mensagem").style.display = "none";
    document.getElementById("copiado").style.display = "none";
    document.getElementById("naoCopiado").style.display = "none";
}

