
var ban = document.getElementById('banmen');
//クリックした時のイベント
for (var x = 0; x < 22; x++){
    for(var y = 0; y < 22; y++){
        var oseta = ban.rows[x].cells[y];
        if(oseta.tagName == 'TH'){

        }else{
        oseta.onclick = function(){
            Oseta(this);
        }
        }
    }
}

function Oseta(Cell){
    if(Cell.style.backgroundColor=="white"){
        Cell.style.backgroundColor='';

    }else{
        Cell.style.backgroundColor="white";
    }
};
