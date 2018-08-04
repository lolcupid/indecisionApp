const isAdult = (age) => {
  if(age >= 18) {
    return true;
  } else {
    return false;
  }
}

const canDrink = (age) => {
  if(age > 21) {
    return 'You can drink';
  } else {
    return 'Sry. You need to be adult';
  }
}

const isSenior = (age) => { age >= 65}
export { isAdult, canDrink, isSenior as default };