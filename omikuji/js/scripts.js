// This file is intentionally left blank.
document.getElementById('draw').addEventListener('click',function(){
    const omikujiResults=['虚無','イベント過多','幸せ疲労','猫になろう','なんくるないさー','なんとかなるさー'];
    const result=omikujiResults[
        Math.floor(Math.random()*omikujiResults.length)
    ];
    
    //if(result='虚無'){result.style.color = '#999';}
    
    document.getElementById('result').textContent=
    `あなたの運勢はぁぁっぁぁぁ... ${result}!`;
});
