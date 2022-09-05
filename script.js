let result = document.getElementById('result');
let a ='';
let opt;
let lhs = 0,rhs = 0;
function number(num){
  a=a+num;
  result.innerText = parseInt(a);
}
function clr(){
  result.innerText = 0;
  a = '';
  lhs = 0;
}
function operate(str){
  lhs = result.innerText;
  result.innerText = lhs;
  a = '';
  opt=str;
}
function edit(){
  let unit = result.innerText;
  const num = unit.toString().split('').slice(0, -1).join('');
  result.innerText = parseInt(num);
}
function out(mono){
  rhs = result.innerText;
  a = '';
  if (opt === '+'){
    result.innerText = parseInt(lhs)+parseInt(rhs);
  }
  else if (opt === '-'){
    result.innerText = lhs-rhs;
  }
  else if (opt === 'x'){
    result.innerText = lhs*rhs;
  }
  else if (opt === '/'){
    result.innerText = lhs/rhs;
  }
  else if(mono === '%'){
    result.innerText = result.innerText/100;
  }
  else if(mono === '+/-'){
    result.innerText = -(result.innerText);
  }
  lhs=rhs=0;
  opt = '';
}
