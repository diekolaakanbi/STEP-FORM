// const bluetickBtn = document.querySelector('.bluetick');
// const bluetickBtn1 = document.querySelector('.bluetick1');
// const content = bluetickBtn1.content;


// bluetickBtn1.addEventListener('click', function(){
//     console.log('check');
//     if(bluetickBtn1.contains(content)){
//         bluetickBtn1.innerHTML = 'icon-checkmark.svg';
//     }
// });

const boxLower = document.querySelector('.box-lower');
const second = document.querySelector('.second');
const arcade = document.querySelector('.arcade');
let click = true;


boxLower.addEventListener('click', function (){
    let create = document.createElement('hold');
    create.innerHTML = boxLower.innerHTML;
    if (click){
        console.log(create);
        second.appendChild(create);
        // arcade.appendChild(create);
        click = false;
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', second);
}

function getData(){
    localStorage.getItem(second);
}

getData();