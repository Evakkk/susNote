function showNumberWithAnimation(i,j,randNumber){
    var thenumberCell=$("#number-cell-"+i+"-"+j);
    thenumberCell.css('background-color',getNumberBackgroundColor(randNumber));
    thenumberCell.css('color',getNumberColor(randNumber));
    thenumberCell.text(randNumber);

    thenumberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50);
}
function showMoveAnimation(fromx,fromy,tox,toy){
    var thenumberCell=$("#number-cell-"+fromx+"-"+fromy);

    thenumberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);
}