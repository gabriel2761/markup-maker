$(function() {
    var commandListener = new CommandInputListener();

    commandListener.normalModeListener(function(key) {
        console.log('command ' + key);
    });

    commandListener.insertModeListener(function(key) {
        console.log(key);
    });



});