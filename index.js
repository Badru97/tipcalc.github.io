let inpValue= document.getElementById("inpText");
let btnInput = document.querySelectorAll("#btn")
let result = document.querySelectorAll('#value')
let customBtn = document.getElementById('inp-tip');
let errorText= document.getElementById('errorText')
let people= document.getElementById('people-text');
let resetBtn= document.getElementById('reset-btn');


let peopleValue =1;
let btnValue=0.05;
let billInp = 0.0;
btnInput.forEach(btn => {
  btn.addEventListener('click', function(event){
    btnInput.forEach(btn =>{
      btn.classList.remove("btn-active");
      
      if(event.target.innerHTML == btn.innerHTML){
        btn.classList.add("btn-active")
        btnValue =parseFloat(btn.innerHTML)/100;
      }
    })
    customBtn.value="";

   //console.log(btnValue)
   tipValue();
  })

})
inpValue.addEventListener("input", billValue)

customBtn.addEventListener('input', function(){
   btnValue = parseFloat(customBtn.value)/100;
    //console.log(btnValue); 
    btnInput.forEach(btn =>{
      btn.classList.remove("btn-active");
    })
    if (btnValue != ""){
      tipValue();
    }
})

people.addEventListener('input', function (){
  peopleValue = parseFloat(people.value);
  if (peopleValue <= 0){
    errorText.classList.add('show-error-msg')
  } else{
    errorText.classList.remove('show-error-msg')
  }
  //console.log(peopleValue)
  tipValue();
})
function billValue(){
  billInp=inpValue.value;
  tipValue();
  //console.log(billInp);
}

function tipValue(){
  if(peopleValue >= 1){
    let tipAmount =billInp*btnValue / peopleValue;
    let total =  billInp *(btnValue+1) / peopleValue;  
    result[0].innerHTML = '$'+tipAmount.toFixed(2);
    result[1].innerHTML = '$'+total.toFixed(2);
  }
  
}
resetBtn.addEventListener("click", function(){
  inpValue.value="0.0";
  billValue();
  
  btnInput[0].click();

  people.value="1"
  

  console.log("reset")
})