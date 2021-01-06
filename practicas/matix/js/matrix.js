var element = document.getElementById('matrix_block'), ctx = element.getContext('2d');
var width = document.body.clientWidth;
var height = document.body.clientHeight;

element.width = width;
element.height = height;

//ctx.fillStyle='#000';
//ctx.fillRect(0,0,width,height);

var yPositions = Array(300).join(0).split('');

function matrix(){
    ctx.fillStyle='rgba(8,30,1,.05)';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle='#37cc05'; //green color
    
    ctx.font = '9pt montserrat'
    
    yPositions.map(function(y,index){
        text = String.fromCharCode(1e2+Math.random()*30);
        x=(index*15)+15;
        matrix_block.getContext('2d').fillText(text, x, y);
        
        if(y>100 + Math.random()*1e5){
            yPositions[index] = 0;
        } else{
            yPositions[index] = y+15;
        }
    });
};

setInterval(matrix, 50);