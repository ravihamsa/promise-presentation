/**
 * Created by ravi.hamsa on 04/03/15.
 */


//three level callbacks
$('form').on('submit', function(){
    var errors = doClientSideValidation();
    //level1
    if(errors.length > 0){
        showErrors(errors);
    }else{
        //level 2
        $.ajax('do-server-side-validation.html', function validationSuccess(){
            //level3
            $.ajax('save-to-server.html', function saveSuccess(){
                navigateUserTo('successPage');
            }, //level3
                function saveFailure(saveErrors){
                showErrors(saveErrors);
            })
            //level2
        }, function validationFailure(validationErrors){
            showErrors(validationErrors);
        })
    }
});


