function getData(){
    var filternev = document.getElementById("nev").value
    var szarmazas = document.getElementById("from").value

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState== 4 && this.status == 200){
            var data = JSON.parse(this.responseText)
            outputData(data)
        }
    };
    var url = "http://127.0.0.1:3000/cats?"
    if(filternev!='' )
    {
        url += `name=${filternev}&`
    }
    if(szarmazas !='')
    {
        url += `origin=${szarmazas}&`
    }
    xhttp.open("GET",url,true);
    xhttp.send();
}
getData()


function outputData(data){
    document.getElementById("tablazat").innerHTML ="";

    data.forEach(element => {
        
        document.getElementById("tablazat").innerHTML +=`                <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.origin}</td>
            <td>${element.length}</td>
            <td><button class="delet" onclick="delet(${element.id})">X</button></td>

        </tr> `

    });
}
var deleteneblad = true;
function delet(id){
    if(deleteneblad){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState== 4 && this.status == 200){
                getData();
                deleteneblad = true;
            }
            
        };
        
        xhttp.open("DELETE","http://127.0.0.1:3000/cats/"+id,true);
        xhttp.send();
        deleteneblad = false;
    }   

}

