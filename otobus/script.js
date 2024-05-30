function sec(e){


    var isimbilgi=document.getElementById('isim').value;
    var telbilgi=document.getElementById('telefon').value;
    var classlar=e.classList

    if(isimbilgi.length<6 || telbilgi.length<8){
        alert("Lütfen İsim ve Telefon Bilgileri Giriniz")
    }else{
        if(classlar.contains('doluerkek')){
            alert("Burası Dolu")
        }else if(classlar.contains('dolukadin')){
            alert("Burası Dolu")
        }
        else{
            var cinsiyet=document.getElementById('cinsiyet').value;
            if(cinsiyet=="erkek"){
                e.style.backgroundColor="lightblue"
            }else{
                e.style.backgroundColor="pink"
            }
        }

    }

    
    
    
}

function sec2(e){
    e.style.backgroundColor="#d3d3d4"
}