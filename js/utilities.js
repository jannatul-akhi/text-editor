const textarea = document.getElementById('textarea-field');

// font size
function f1(fontSizeId){
    const fontValue = fontSizeId.value;
    textarea.style.fontSize = fontValue + "px";
}

// bold
document.getElementById('btn-bold').addEventListener('click', function(){
    if(textarea.style.fontWeight == "bold"){
        textarea.style.fontWeight = "normal";
        this.classList.remove("active");
    }
    else{
        textarea.style.fontWeight = "bold";
        this.classList.add("active");
    }
   
})

// italic
document.getElementById('btn-italic').addEventListener('click', function(){
    if(textarea.style.fontStyle == "italic"){
        textarea.style.fontStyle = "normal";
        this.classList.remove("active");
    }
    else{
        textarea.style.fontStyle = "italic";
        this.classList.add("active");
    }
   
})

// underline
document.getElementById('btn-underline').addEventListener('click', function(){
    if(textarea.style.textDecoration == "underline"){
        textarea.style.textDecoration = "none";
        this.classList.remove("active");
    }
    else{
        textarea.style.textDecoration = "underline";
        this.classList.add("active");
    }
   
})

// Left align
document.getElementById('btn-left').addEventListener('click', function(){
    textarea.style.textAlign = "left"
})
//center
document.getElementById('btn-center').addEventListener('click', function(){
    textarea.style.textAlign = "center" 
})

// right
document.getElementById('btn-right').addEventListener('click', function(){
    textarea.style.textAlign = "right";
    
})
document.getElementById('btn-justify').addEventListener('click', function(){
    textarea.style.textAlign = "justify";
    
})

// upper case
document.getElementById('btn-transform').addEventListener('click', function(){
    if(textarea.style.textTransform == "uppercase"){
        textarea.style.textTransform = "none";
        this.classList.remove("active");
    }
    else{
        textarea.style.textTransform = "uppercase";
        this.classList.add("active");
    }
   
})

// color
document.getElementById('head').addEventListener('click', function(){
    let value = this.value;
    textarea.style.color = value;
})

