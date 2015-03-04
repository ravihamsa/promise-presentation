/**
 * Created by ravi.hamsa on 04/03/15.
 */


var animateTopLeftToTopRight = function(callback){
    // do animation and callback
    callback();
}

var animateFromTopRightToBottomRight = function(callback){
    // do animation and callback
    callback();
}

var animateFromBottomRightToBottomLeft = function(callback){
    // do animation and callback
    callback();
}


var animateFromBottomLeftToTopLeft = function(callback){
    // do animation and callback
    callback();
}


animateTopLeftToTopRight(animateFromTopRightToBottomRight(animateFromBottomRightToBottomLeft(animateFromBottomLeftToTopLeft())))

//imaging how would you cancel the process in btw