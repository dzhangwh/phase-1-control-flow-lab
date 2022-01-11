function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    let free = 'This one is on me!'
    return free
  }
  else if (someNumber >= 2000 && someNumber < 2500) {
    let extraCharge = 'I will gladly take your thirty bucks.'
    return extraCharge
  }
  else if (someNumber >= 2500) {
    let tooFar = 'No can do.'
    return tooFar
  }
}

function ternaryCheckCity(someCity){
  const checkCity = someCity == 'NYC' ? "Ok, sounds good." : "No go.";
  return checkCity
}

function switchOnCharmFromTip(someTip){
     let tip;

    switch(someTip) {

      case 'generous':
        tip = "Thank you so much."
        break;

      case 'not as generous':
        tip = 'Thank you.'
        break;
      
      default:
        tip = 'Bye.'
        break;
    }
  return tip
}