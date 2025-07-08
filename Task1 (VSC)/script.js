const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
let currentIndex = 0;
function changeColor() {
    const title = document.getElementById('title');
    currentIndex = (currentIndex + 1) % colors.length;
    title.style.color = colors[currentIndex];
}
console.log('Page loaded');