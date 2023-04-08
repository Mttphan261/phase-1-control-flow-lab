function scuberGreetingForFeet(Feet){
  if (Feet <= 400) {
    return 'This one is on me!';
  }
  else if (Feet >= 2500) {
    return 'No can do.'
    }
  else if (Feet >= 2000) {
    return 'I will gladly take your thirty bucks.'
  }
  else if  (Feet >= 400 &&  2000 ) {
  return 'That will be twenty bucks.'
  }
}

function ternaryCheckCity(City){
  return City === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}