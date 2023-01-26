let number = prompt('Введите число')
let v = document.querySelector('.out')
if(number > 100){
    v.innerHTML = number
}
else{
    console.log(number)
}