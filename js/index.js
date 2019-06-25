/****************
  Complete the code! Good Luck
******************************/

const urlFirstStep = "https://us-central1-verto-backend-dev.cloudfunctions.net/challengeFirstStep";

//Module pattern
(function(){

  //Module data
  let urlLastStep = "https://us-central1-verto-backend-dev.cloudfunctions.net/challengeFinalStep";
  let idLastStep = "vl69qnI4Qoo5gK43RSLq";

  //DOM
  const btnFirstStep = document.querySelector("button#first");
  const btnLastStep = document.querySelector("button.last");
  const txtEmail = document.querySelector("input#email");
  const txtName = document.querySelector("input#name");
  const txtMsg = document.querySelector("span#msg");

  //Events
  btnFirstStep.addEventListener("click", gotoFirstStep);
  btnLastStep.addEventListener("click", gotoLastStep);

  //Callbacks
  function gotoFirstStep(){

    //First Step. Using promises
    fetch(urlFirstStep, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },      
      body: JSON.stringify({
        'token': window.appToken,
        'email': txtEmail.value
      })
    })
    .then(response=>response.json())
    .then(data=>{
      btnLastStep.disabled = false;
      console.log("FromServer", data);
    });

  }

  function gotoLastStep(){

    //Last Step. Using promises
    fetch(urlLastStep, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        'token': window.appToken,
        'name': txtName.value,
        'id': idLastStep
      })
    })
    .then(response=>response.json())
    .then(data=>{
      console.log("FromServer LastStep", data);
      txtMsg.innerText = data.data;
    });
  }
})()
