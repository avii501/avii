function button(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#7FFF00"
        count=0;
    }
}

<input type="button" id="button" value = "button" style= "color:white" onclick="button('button', '#101010')"/>
