/**
 * Created by ravi.hamsa on 04/03/15.
 */

var logger = $('#logger');
var container = $('#container');
var appendToLog = function (message, err) {
    var el = $('<li>' + message + ' @ (' + (new Date().getTime() - startTime) + 'ms)</li>');
    el.css({
        'background-color': err ? 'red' : 'aquamarine'
    });

    logger.append(el)
}


var appendToContainer = function(message){
    container.append(message);
    container.append('<br>');
}

var getMePromiseOf = function (name, shouldFail) {
    var el = $('.'+name);
    var def = $.Deferred();
    var randomDuration = Math.ceil(Math.random() * 5000);
    appendToLog('deferred ' + name + ' created with duration  ' + randomDuration + 'ms');
    el.addClass('loading');
    setTimeout(function () {
        if (shouldFail) {
            appendToLog('deferred ' + name + ' rejected', true);
            def.reject(name);
        } else {
            appendToLog('deferred ' + name + ' resolved');
            def.resolve(name);
        }
        el.removeClass('loading');
    }, randomDuration)

    return def.promise();
}


var startTime = new Date().getTime();
appendToLog('timer started');