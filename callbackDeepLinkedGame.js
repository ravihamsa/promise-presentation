/**
 * Created by ravi.hamsa on 04/03/15.
 */

//Candy Crush Saga level 143

var levelToRender = 143;

$.ajax('getUserDetails', function(resp){
    if(resp.allowedLevel < 143){
        redirectTo(resp.allowedLevel)
    }else{
        $.ajax('getMapResources', function(resp){
            renderMap(function(){
                animateTo(143, function(){
                    $.ajax('loadLevel143', function(){
                        renderLevel(function(){
                            $.ajax('checkForLives', function(resp){
                                if(resp.lives > 0){
                                    startLevel();
                                }else {
                                    showLevelOptionsPopup(function buyLevels(){
                                        //buying levels code
                                    }, function getLevelFromFriends(){
                                        //asking friends for lives code
                                    }, function waitFor30Minutes(){
                                        //...
                                            //...
                                                //..
                                    })
                                }
                            })
                        })
                    })
                })
            })
        })
    }
})

//imaging handling errors in each level