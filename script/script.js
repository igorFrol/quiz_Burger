//пишем код в DOMContentLoaded - позволяет выполнять скрипт только после создания всего HTML
document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';// установка строгого синтаксиса
   
    
    const btnOpenModal=document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const nameBurger_1='Стандарт';
    const nameBurger_2='Черный';
    const srcImg_1 = './image/burger.png';
        const srcImg_2 = './image/burgerBlack.png';

    btnOpenModal.addEventListener('click', ()=>{
       console.log(modalBlock);
       modalBlock.classList.add('d-block');
       playTest();
    });
    closeModal.addEventListener('click', ()=>{
         modalBlock.classList.remove('d-block');
    })
    const playTest=()=>{
        const renderQuestions=()=>{
           questionTitle.textContent='Какого цвета бургер Вы хотите?'
           formAnswers.innerHTML=`
           <div class="answers-item d-flex flex-column">
           <input type="radio" id="answerItem1" name="answer" class="d-none">
           <label for="answerItem1" class="d-flex flex-column justify-content-between">
             <img class="answerImg" src="${srcImg_1}" alt="burger">
             <span>${nameBurger_1}</span>
           </label>
         </div>
         <div class="answers-item d-flex justify-content-center">
           <input type="radio" id="answerItem2" name="answer" class="d-none">
           <label for="answerItem2" class="d-flex flex-column justify-content-between">
             <img class="answerImg" src="${srcImg_2}" alt="burger">
             <span>${nameBurger_2}</span>
           </label>
         </div>
         `;
        }
        renderQuestions();
    }
});
//let btnOpenModal=document.querySelector('#btnOpenModal');

/*
let a='Hello World'// лучше использовать let чем var
console.log('a= ', a);

function plus(a, b){
    return a+b;
}
const plus_2=function(a, b){
return a+b;
}

console.log('plus(2, 5) = ', plus(2,5));
console.log('plus_2(6, 5) = ', plus_2(6,5));

btnOpenModal.onclick=function(){
    console.log('click!');
}
console.log(btnOpenModal);
console.dir(btnOpenModal);

btnOpenModal.addEventListener('click', ()=>{//событие возникающее при нажатии на кнопку
    console.log('third');
});
btnOpenModal.addEventListener('click', ()=>{
    console.log('fourth');
});*/

