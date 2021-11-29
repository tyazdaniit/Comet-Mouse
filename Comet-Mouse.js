document.onmousemove = animateCircle;

function animateCircle(event) {
    var circle = document.createElement('div')
    var colors = ["#f00", "#6cf", "#0f0", "#f41", "#00f"]

    circle.setAttribute('class', 'circle')
    circle.style.left = event.clientX + "px"
    circle.style.top = event.clientY + "px"
    circle.style.transition = "all 0.5s linear"

    document.body.appendChild(circle)

    circle.style.left = circle.offsetLeft - 20 + "px"
    circle.style.top = circle.offsetTop - 20 + "px"

    var mainColor = colors[Math.floor(Math.random() * colors.length)]

    circle.style.borderColor = mainColor
    circle.style.width = "50px"
    circle.style.height = "50px"
    circle.style.borderWidth = "5px"
    circle.style.opacity = 0
}
