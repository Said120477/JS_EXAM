let clickLimit = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
let clickCount = 0; const clickCountDisplay = document.getElementById('clickCount');
const clickButton = document.getElementById('clickButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');
clickButton.addEventListener('click', () => {
    if (clickCount < clickLimit) {
        clickCount++; clickCountDisplay.textContent = clickCount;
    } if (clickCount === clickLimit) {
        modal.classList.remove('hidden');
    }
});
closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

function addEvent() {
    const date = document.getElementById('eventDate').value;
    const description = document.getElementById('eventDescription').value;
    if (date && description) {
        const li = document.createElement('li');
        li.textContent = `${date} - ${description}`;
        document.getElementById('eventList').appendChild(li);
        document.getElementById('eventDate').value = '';
        document.getElementById('eventDescription').value = '';
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
}

function addLink() {
    var link = document.getElementById("newLink").value;
    if (link) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(link));
        document.getElementById("linkList").appendChild(li);
        document.getElementById("newLink").value = "";
    } else {
        alert("Пожалуйста, введите ссылку.");
    }
}

const changeTitleButton = document.getElementById('changeTitleButton');
changeTitleButton.addEventListener('click', function () {
    const newTitle = document.getElementById('siteTitleInput').value;
    if (newTitle) {
        document.title = newTitle;
        const siteNameElements = document.querySelectorAll('.site-name');
        siteNameElements.forEach(el => {
            el.textContent = newTitle;
        });
    }
});