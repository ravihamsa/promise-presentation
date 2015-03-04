/**
 * Created by ravi.hamsa on 04/03/15.
 */

var loadData = function(){
    if(dataCached){
         renderViewWith(data.results);
    }else {
        tryLoadingFromLocalStorage(function successCallback(data){
            renderViewWith(data.results)
        }, function failureCallback(){
            $.ajax('get-data-from-service', function(resp){
                renderViewWith(resp.results)
            }, function(resp){
                renderErrorsWith(resp.errors)
            })
        })
    }

}
