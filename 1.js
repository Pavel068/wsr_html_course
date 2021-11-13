function handler(event) {
    console.log(event);
    this.style.backgroundColor = '#ff00ff';
}

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', handler);
});
