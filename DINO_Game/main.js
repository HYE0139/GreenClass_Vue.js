const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// 그림을 그릴 캔버스 생성
canvas.width = window.innerWidth - 100;
canvas.height = window.innerWidth - 100;


var img1 = new Image();
img1.src = 'dino.png';
const dino = { //캐릭터
    x : 10,
    y : 200,
    width : 80,
    height : 100,
    draw() { // 캔버스안에 그림그리기 
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //          (위치 : x좌표, y좌표, 크기: 가로, 세로)
        ctx.drawImage(img1, this.x, this.y);
    }
}


var img2 = new Image();
img2.src = 'cactus.png'

class Cactus { //장애물
    constructor(){
        this.x = 500;
        this.y = 220;
        this.width = 80;
        this.height = 80;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y);
    }
}


let timer = 0;
const cactusOther = [];
var jumpTimer = 0;
function executeFrame() {
    requestAnimationFrame(executeFrame); 
    // 1초에 60번 동작, 실행횟수는 모니터 FPS에 따라 다름.
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // clearRect : 캔버스 안에서 특정 영역을 지울 때 사용.

    if(timer % 240 === 0){ // 60프레임 * 5초 = 300
        const cactus = new Cactus();
        cactusOther.push(cactus);
    }
    cactusOther.forEach((a, i, o)=> {
        if(a.x < 0) { o.splice(i, 1); } // 화면 밖으로 나가는건 배열에서 삭제
        a.x--; // 왼쪽으로 향하게
        a.draw(); 
        attackEvent(dino, a);
    });

    if(jump == true){
        dino.y-=2;
        jumpTimer+=1;
    }
    if(jump == false && dino.y < 200){
        dino.y+=2;
    }
    if(jumpTimer > 100){
        jump = false;
        jumpTimer = 0;
    }

    dino.draw();
}

var jump = false;
document.addEventListener('keydown', function(e) {
    if(e.code === 'Space'){
        jump = true;
    }
});


function attackEvent(dino, cactus){
    const xAttack = cactus.x-(dino.x + dino.width);
    const yAttack = cactus.y - (dino.y + dino.height);
    if(xAttack < 0 && yAttack < 0){ //충돌지점
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(requestAnimationFrame(executeFrame));
    }
}



executeFrame();

