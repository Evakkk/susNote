var board = new Array();
var score = 0;

$(document).ready(function(){
    newGame();
});

function newGame(){
    //初始化棋盘
    init();
    //在随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();
}
function init(){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var gridcell = $("#grid-cell-"+i+"-"+j);
            
            gridcell.css('top',getPosTop(i,j));
            
            gridcell.css('left',getPosLeft(i,j));
            console.log(gridcell.css('top')+gridcell.css('left'));
        }
    }
    for(var i=0; i<4; i++){
        board[i]=new Array();

        for(var j=0; j<4; j++)
            board[i][j]=0;
    }
    updateBoardView();
}
function updateBoardView(){
    $(".number-cell").remove();
    for(var i=0; i<4; i++)
        for(var j=0; j<4; j++){
            $("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
            var thenumberCell=$("#number-cell-"+i+"-"+j);
            if(board[i][j]==0){
                thenumberCell.css('width','0px');
                thenumberCell.css('height','0px');
                thenumberCell.css('top',getPosTop(i,j)+50);
                thenumberCell.css('left',getPosLeft(i,j)+50);
            }
            else{
                thenumberCell.css('width','100px');
                thenumberCell.css('height','100px');
                thenumberCell.css('top',getPosTop(i,j));
                thenumberCell.css('left',getPosLeft(i,j));
                thenumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                thenumberCell.css('color',getNumberColor(board[i][j]));
                thenumberCell.text(board[i][j]);
            }
        }
            
    
}
function generateOneNumber(){
    if(nospace(board)){
        return false;
    }
    //随机一个位置
        var randx = parseInt(Math.floor(Math.random()*4));
        var randy = parseInt(Math.floor(Math.random()*4));
        while(true){
            if(board[randx][randy]==0)
            {
                break;
            }

            randx = parseInt(Math.floor(Math.random()*4));
            randy = parseInt(Math.floor(Math.random()*4));
        }

    //随机一个数字
        var randNumber = Math.random()<0.5 ? 2 : 4;

    //在随机位置显示随机数字
        board[randx][randy]=randNumber;
        showNumberWithAnimation(randx,randy,randNumber);

    return true;

}

$(document).keydown(function(event){
    switch(event.keyCode){
        case 37:
            if(moveLeft()){
                generateOneNumber();
               // isGameover();
            }
            break;
        case 38:
            if(moveUp()){
                generateOneNumber();
                //isGameover();
            }
            break;
        case 39:
            if(moveRight()){
                generateOneNumber();
                //isGameover();
            }
            break;    
        case 40:
            if(moveDown()){
                generateOneNumber();
               // isGameover();
            }
            break;

    }

});

function moveLeft(){
    if(!canMoveLeft(board)){
        return false;
    }

    for(var i=0; i<4; i++)
        for(var j=1; j<4; j++){
            if(board[i][j]!=0){
                for(var k=0; k<j; k++){
                    if(board[i][k]==0 && noBlock(i,k,j,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue;
                    }
                    else if(board[i][k]==board[i][j] && noBlock(i,k,j,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        //add
                        board[i][k]+=board[i][j];
                        board[i][j]=0;
                        continue;
                    }
                }
            }
        }
    
        setTimeout("updateBoardView()",200);
    return true;
}
function moveRight(){
    if(!canMoveRight(board)){
       // alert("cant");
        return false;
    }
    //alert("可以");
    for(var i=0; i<4; i++)
        for(var j=2; j>=0; j--){
            if(board[i][j]!=0){
                for(var k=3; k>=j; k--){
                    if(board[i][k]==0 && noBlock(i,j,k,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue;
                    }
                    else if(board[i][k]==board[i][j] && noBlock(i,j,k,board)){
                        //move
                        showMoveAnimation(i,j,i,k);
                        //add
                        board[i][k]+=board[i][j];
                        board[i][j]=0;
                        continue;
                    }
                }
            }
        }
    
        setTimeout("updateBoardView()",200);
    return true;
}