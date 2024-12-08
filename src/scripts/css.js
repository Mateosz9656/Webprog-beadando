var negyzet=document.getElementById("negyzet");

function torles() {
    if(confirm('Biztos ki szeretnéd törlni')){
        document.getElementById("vel").value = 0
        document.getElementById("fel").value = 0
        document.getElementById("fog").value = 0
        document.getElementById("mer").value = 0
        document.getElementById("fer").value = 0
        modify()
    }
    else
    {

    }

}
function modify(){
    var vel =document.getElementById("vel").value
    var fel =document.getElementById("fel").value
    var fog =document.getElementById("fog").value
    var mer =document.getElementById("mer").value
    var fer =document.getElementById("fer").value
    negyzet.style.transform=`translateX(${vel}px) translateY(${fel}px) rotate(${fog}deg) scale(${1+mer*1}) skewX(${fer}deg)`
}