
// objet contenant les fuctions listeners
var listenerFuction = {
    h2Click: function(){
       /* window.alert("Click détecté sur H2")*/
      /* console.log(this);
       if(this.style.color && this.style.color== "red"){
        this.style.color ="blue"   
       }else{
           this.style.color ="red"
       }*/
       var element = event.target;
       element.style.fontSize = "2rem"
       if(element && element.style.backgroundColor == "red"){
        element.style.backgroundColor = "blue"
       }else{
        element.style.backgroundColor = "red"
       }
       
        console.log("Click détecté sur H2");
    
// Mise en place les abonnements 
var setupListeners =()=>{
    var h2 = document.querySelector("section#html")
    h2.addEventListener("click", listenerFuction.h2Click)  
}
      
  }
}
