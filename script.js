let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let stars = [];
let FPS = 30;
let x = canvas.width;

for(let i = 0; i < x; i++){
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random(),
        vx: Math.floor(Math.random() * 10 - 5),
        vy: Math.floor(Math.random() * 10 - 5),
    })
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < stars.length; i++){
        let s = stars[i];
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2*Math.PI);
        ctx.fill()
    }
}

function update(){
    for (let i = 0; i < stars.length ; i++) {
        let s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        //if (s.x > canvas.width || s.x < 0) s.vx = -s.vx;
        //if (s.y > canvas.height || s.y < 0) s.vy = -s.vy;

        s.vx = (s.x > canvas.width || s.x < 0) ? -s.vx : s.vx;
        s.vy = (s.y > canvas.height || s.y < 0) ? -s.vy : s.vy;

    }
}

function tick(){
    draw();
    update();
    requestAnimationFrame(tick)
}

tick()