
//board //
let graphic;
let graphicWidth = 480;
let graphicHeight = 580;
let context;

//bird
let birdWidth = 34; 
let birdHeight = 26;
let birdX = graphicWidth/8;
let birdY = graphicHeight/2;


let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}
// let birdImg =new Image();
// birdImg.src="flappyimg.png";
// birdImg.onload =function(){
// context.drawImage(birdImg,bird.x,bird.y,bird.height,bird.width)
// }

// Music control variables
let music; // Variable to store background music
let gameOverMusic; // Variable to store game over music



   
window.onload = function() {
    graphic = document.getElementById("Graphic");
    graphic.height = graphicHeight;
    graphic.width = graphicWidth;
    context = graphic.getContext("2d"); //used for drawing context on the board //

    //draw flappy bird
    // context.fillStyle = "red";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height);
    birdImg =new Image();
    birdImg.src="./images/bird.png";
    birdImg.onload =function(){  //// Code to be executed when the page is fully loaded
    context.drawImage(birdImg,bird.x,bird.y,bird.height,bird.width)
    }

    toptreeImg =new Image();
    toptreeImg.src="./images/tree1.png";

    bottomtreeImg = new Image();
    bottomtreeImg.src="./images/tree.png";



    requestAnimationFrame(update)

    setInterval(treePlaces,1500);

    document.addEventListener("keydown",moveBird)

    playBackgroundMusic();
}   


// func for background music //
function playBackgroundMusic() {
    // Only start music if it's not already playing
    if (!music || music.paused) {
        music = new Audio('./Music/8-bit-game-158815.mp3'); // Replace with your file path
        music.loop = true;  // Loop the music
        music.play();
    }
}

function stopBackgroundMusic() {
    if (music) {
        music.pause();
        music.currentTime = 0; // Reset the music to the start
    }
}


function update(){
   
    requestAnimationFrame(update);

    if(gameOver){
        context.fillStyle = "black";
        context.font = "30px Arial";
        context.fillText("Game Over!", graphicWidth / 2 - 80, graphicHeight / 2);
        stopBackgroundMusic();
        return;
    }

    context.clearRect(0,0,graphic.width,graphic.height);
    //bird //

    velocityY += gravity;
    bird.y =Math.max(bird.y + velocityY ,0)  // gravityapplied to current bird.y and 0 is the top most height for the bird
 
    
    context.drawImage(birdImg,bird.x,bird.y,bird.height,bird.width)

    if(bird.y > graphic.height){
        gameOver=true;
    }
    // if (bird.y + bird.height >= graphicHeight) {
    //     gameOver();
    // }

    for(let i=0;i < treeArray.length;i++){
        let tree = treeArray[i];
        tree.x += velocityX;
        context.drawImage(tree.img,tree.x,tree.y,tree.width,tree.height)


         // Check for collision with the bird
         if (!tree.passed && tree.x + tree.width < bird.x) {
            tree.passed = true; // Mark tree as passed
            score+=0.5; // Increment score
        }

        if(collision(bird,tree)){
            gameOver=true;
        }
    }

    while(treeArray.length >0 && treeArray[0].x < -treeWidth){ // 0 and -treewidth are used for the remove the tree at the start
        treeArray.shift() // remove the first elements from the treeArray //
    }

    displayScore()

}
// moving tree to left //
let velocityX =-2;

let velocityY=0;// bird initial jump speed
let gravity=0.4;

let gameOver=false;

//tree //
let treeArray=[];
let treeWidth=64;
let treeHeight=512;

let treeX= graphicWidth;
let treeY=0;

let toptreeImg;
let bottomtreeImg;
let score = 0; // score //



function treePlaces(){
    if(gameOver){
        return;
    }

    let randomtreeY=treeY-treeHeight/5-Math.random()*(treeHeight/2);
    let Space= graphic.height/5;

    let toptree={
        img : toptreeImg,
        x : treeX,
        y : randomtreeY,
        width :treeWidth,
        height : treeHeight,
        passed : false
    }
    treeArray.push(toptree);

    let bottomtree = {
        img : bottomtreeImg,
        x : treeX,
        y : randomtreeY + treeHeight + Space,
        width : treeWidth,
        height : treeHeight,
        passed : false
    }
    treeArray.push(bottomtree)
}


function moveBird(bal){
 if(bal.code == "Space"  || bal.code == "ArrowUp" || bal.code == "KeyX"){

    velocityY= -6;
   
 }
    // to reset the game //
    if(gameOver){
        bird.y = birdY;
        treeArray=[];
        score=0;
        gameOver=false;
        playBackgroundMusic();
    return;
 }
}



function collision(bird,tree){
    return(  bird.x < tree.x + tree.width && 
    bird.x + bird.width > tree.x && 
    bird.y < tree.y + tree.height && 
    bird.y + bird.height > tree.y
    )

}

function displayScore() {
    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 20, 30);
    context.style.backgroundColor="red"
}


