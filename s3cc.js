function Function(){

    var selectState = ["Arizona", "California", "Colorado", "Washington DC", "Nevada"];
    var arrArizona= ["Phoenix", "Tolleson", "Goodyear"];
    var arrCalifornia= ["Sacramento", "Los Angeles", "San Francisco"];
    var arrColorado= ["Denver", "Aspen", "Colorado Springs"];
    var arrWashingtonDC= ["Washington D.C"];
    var arrNevada= ["Carson City", "Los Vegas"];

    var selectoptions = (document.getElementById("state").value);
    var displayCapital = document.getElementById("capital");

    document.getElementById("capital").innerHTML="";

    if (selectoptions == "AZ") {
        for (i=0; i<arrArizona.length; i++) {
            var soptions = document.createElement('option');
            soptions.innerHTML=arrArizona[i];
            soptions.value=arrArizona[i];
            displayCapital.appendChild(soptions);
        }
    }

    else if (selectoptions == "CA") {
            for (i=0; i<arrCalifornia.length; i++) {
                var soptions = document.createElement('option');
                soptions.innerHTML=arrCalifornia[i];
                soptions.value=arrCalifornia[i];
                displayCapital.appendChild(soptions); 
        }
    }


    else if (selectoptions == "CO") {
        for (i=0; i<arrColorado.length; i++) {
            var soptions = document.createElement('option');
            soptions.innerHTML=arrColorado[i];
            soptions.value=arrColorado[i];
            displayCapital.appendChild(soptions); 
    }
}


    else if (selectoptions == "DC") {
        for (i=0; i<arrWashingtonDC.length; i++) {
            var soptions = document.createElement('option');
            soptions.innerHTML=arrWashingtonDC[i];
            soptions.value=arrWashingtonDC[i];
            displayCapital.appendChild(soptions); 
    }
}
    else {
        for (i=0; i<arrNevada.length; i++) {
            var soptions = document.createElement('option');
            soptions.innerHTML=arrNevada[i];
            soptions.value=arrNevada[i];
            displayCapital.appendChild(soptions); 
     }
}
}