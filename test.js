const contents = document.getElementsByClassName('content');
for (let i = 0; i < contents.length; i++) {
    contents[i].style.color = 'red';
}

const idElement = document.getElementById('id');
idElement.textContent = '새로운 내용';


const listItem = document.querySelector('.list-item');
listItem.style.textDecoration = 'line-through';


const pp = document.querySelectorAll('.pp');
for (let i = 0; i < pp.length; i++) {
    pp[i].style.color = 'blue';
}

const id99ListItems = document.querySelectorAll("#id99");
        for (let i = 0; i < id99ListItems.length; i++) {
            id99ListItems[i].style.color = "purple";
        }

const colorBtn = document.querySelector('#color-btn');

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

colorBtn.addEventListener('click',function() {
    const body = document.querySelector('body');
    const randomColor = makeRandomColor();
    body.style.backgroundColor = randomColor;

});
