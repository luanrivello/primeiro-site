var atual = 0;
function mudaFoto (pos){
    document.getElementById("icone"+atual).style.opacity = 0;
    document.getElementById("icone"+pos).style.opacity = 1;
    atual=pos;
}

function navIn(pos){

    if(pos == 0){
        document.getElementById("l0").style.background = '#606060';
        document.getElementById("l00").style.color = '#FFFFFF';
    }else if(pos == 1){
        document.getElementById("l1").style.background = '#606060';
        document.getElementById("l11").style.color = '#FFFFFF';
    }else if(pos == 2){
        document.getElementById("l2").style.background = '#606060';
        document.getElementById("l22").style.color = '#FFFFFF';
    }else if(pos == 3){
        document.getElementById("l3").style.background = '#606060';
        document.getElementById("l33").style.color = '#FFFFFF';
    }else{
        document.getElementById("l4").style.background = '#606060';
        document.getElementById("l44").style.color = '#FFFFFF';
    }

}

function navOut(pos){

    if(pos == 0){
        document.getElementById("l0").style.background = '#DDDDDD';
        document.getElementById("l00").style.color = '#000000';
    }else if(pos == 1){
        document.getElementById("l1").style.background = '#DDDDDD';
        document.getElementById("l11").style.color = '#000000';
    }else if(pos == 2){
        document.getElementById("l2").style.background = '#DDDDDD';
        document.getElementById("l22").style.color = '#000000';
    }else if(pos == 3){
        document.getElementById("l3").style.background = '#DDDDDD';
        document.getElementById("l33").style.color = '#000000';
    }else{
        document.getElementById("l4").style.background = '#DDDDDD';
        document.getElementById("l44").style.color = '#000000';
    }

}

function navClick(pos){
    if(pos == 0){
        window.open("index.html", '_self').focus;
    }else if(pos == 1){
        window.open("specs.html", '_self').focus;
    }else if(pos == 2){
        window.open("fotos.html", '_self').focus;
    }else if(pos == 3){
        window.open("multimidia.html", '_self').focus;
    }else{
        window.open("fale-conosco.html", '_self').focus;
    }
}

function preco(){
    var total = document.getElementById('idQtd').value * 1500;
    
    document.getElementById('precoTotal').innerHTML = "Preço Total: &nbsp;&nbsp;" + total + "R$";

}

function total(){
    var qtd = parseInt(document.getElementById('idQtd').value);
    
    tot = qtd*1500;

    document.getElementById('idTot').value = tot;

}