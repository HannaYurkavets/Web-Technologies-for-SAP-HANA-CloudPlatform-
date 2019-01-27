redirect.onclick = function () {
    document.location.href = "https://leverx.ru"
}

var i = 0;
for (i; i < 9; i++) {
    var el = document.createElement("div");
    el.classList.add("card");
    el.innerHTML = "<div class='card_item'><header>Надежный интегратор</header><main>Мы создаем высоконагруженные и легко"+
                   "масштабируемые системы, основываясь на лучших практиках и методологии Accelerated SAP"+
                   ".</main><button>Перейти</button></div></div>";
    var div = document.getElementById("main");
    div.appendChild(el);
}
