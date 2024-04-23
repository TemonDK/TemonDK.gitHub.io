let tg = window.Telegram.WebApp;
//расширяем сайт на весь экран
tg.expand();

//MainButton - кнопка, созданная Telegram, которая появляется в самом низу после выбора товара
//изменяем цвет текста
tg.MainButton.textColor = "#FFFFFF";
//изменяем цвет 
tg.mainButton.color = "#2cab37";

//эта переменная будет меняться в зависимости от того, на какую кнопку продукта мы нажали
let item = "";
let btn = [];
//в этой переменной мы храним информацию о кнопке 
for (let i = 1; i <= 8; i++)
{
    btn[i] = document.getElementById("btn[i]");
}

//обработчик ивента: "клик"
for (let i = 1; i <= 8; i++)
{
    btn[i].addEventListener("click", function(){
        //условие проверяет наличие кнопки
        if (tg.MainButton.isVisible){
            //прячет
            tg.MainButton.hide();
        }
        else{
            //устанавливаем текст
            tg.mainButton.setText("Вы выбрали товар 1!")
            item = i;
            //показываем эту кнопку
            tg.MainButton.hide();
        }
    })
}

//эта функция отвечает за передачу данных из Telegram в сайт по событию mainButtonClicked
Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

//пердаём данные из Telegram в usercard
let usercard = document.getElementById("usercard"); 

//создаём параграф(тег <p> </p>)
let p = document.createElevent("p");
//добавляем в него текст
p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`

//добавляем текст в сам блок usercard
usercard.appendChild(p);
