

//htmli js'ye aktardık.
let ekleButton = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ullength = document.getElementsByTagName("li"); 

// silme işlemi
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 





//butona fonksiyon atadık.
ekleButton.addEventListener('click', elemanEkle)  

}


//eleman silme fonksiyonu
function removeButton(){
  this.parentElement.remove(); 
}


//eleman ekleme fonksiyonu
function elemanEkle() {
 
    if (taskDOM.value == "")  {  
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM); 
    liDOM.innerHTML = taskDOM.value; 
    taskDOM.value = "";
  

}
}
