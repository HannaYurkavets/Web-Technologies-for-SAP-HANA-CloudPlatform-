var i = 0;
for (i; i < 10; i++) {
    if (i % 2 == 0) {
        var item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = '<div class="item" onclick="generateChatMsg(' + i + ')"><img src="image/1.jpg" alt="">'+
        '<div class="name">Kitten</div></div>';
        var list = document.getElementById("scroll-list");
        list.appendChild(item);
    } else {
        var item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = '<div class="item" onclick="generateChatMsg(' + i + ')"><img src="image/2.jpg" alt="">'+
        '<div class="name">Cat</div></div>';
        var list = document.getElementById("scroll-list");
        list.appendChild(item);
    }
}

function generateChatMsg(param) {
    var chat = document.getElementById("chat");
    while (chat.firstChild) {
        chat.removeChild(chat.firstChild);
    }
    for (var i = 0; i < 10; i++) {
        if (param % 2 == 0) {
            var el = document.createElement("div");
            el.classList.add("chat");
            el.innerHTML = '<div class="message"><div> <img src="image/1.jpg"></div><div class="message-text">'+
            '<p>Hello, mom!</p></div></div><div class="answer"><div class="answer-text">'+
            '<p>Hi, Kitty! How are you doing? Have you been ate today? I bought Wiskas for you. Call me please, when you get to school.'+
            '🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 ☺  🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤</p>'+
            '</div><div class="answer-avatar"><img src="image/2.jpg" alt=""></div></div>';
            chat.appendChild(el);
        } else {
            var el = document.createElement("div");
            el.classList.add("chat");
            el.innerHTML = '<div class="message"><div> <img src="image/2.jpg"></div><div class="message-text">'+
            '<p>Hi, Kitty.</p></div></div><div class="answer"><div class="answer-text">'+
            '<p>Hi, mom. I am fine! Yes, I have been ate meat and milk today. Thank you very mush for Wiskas, I love it :) I will'+
            ' call you, when I get to school. 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 🖤 ☺  🖤 🖤 🖤 🖤 🖤 🖤  </p>'+
            '</div><div class="answer-avatar"><img src="image/1.jpg" alt=""></div></div>';
            var chat = document.getElementById("chat");
            chat.appendChild(el);
        }
    }
}