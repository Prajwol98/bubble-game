let timer=60;
let score=0;
let intervalId;
let hit;


function makeBubble(){
  let clutter='';
  for(i=1;i<120;i++){
    let random=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${random}</div>`
  }
  
  document.querySelector('#p-btm').innerHTML=clutter;
}

function runTimer(){
  intervalId=setInterval(function(){
    timer--;
    document.querySelector('#timer').textContent=timer;
    if(timer===0){
      clearInterval(intervalId)
      alert('GAME OVER ! your score is ' + score)
    }
  },1000);
}

function getNewHit(){
  hit=Math.floor(Math.random()*10)
  document.querySelector('#hit').textContent=hit;
}

function increaseScore(){
  score += 10;
  document.querySelector('#score').textContent = score;
}

document.querySelector('#p-btm').addEventListener('click',function(e){
  var num=Number(e.target.textContent);
  if(num===hit){
    makeBubble()
    getNewHit()
    increaseScore()

  }
})

makeBubble();
runTimer();
getNewHit();

