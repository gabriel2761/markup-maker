$(function() {
    var commandListener = new CommandInputListener();
    var editor = new Editor();

    commandListener.normalModeListener(function(key) {
        console.log('command ' + key);
    });

    commandListener.insertModeListener(function(key) {
        console.log(key);
        editor.insert(key);
    });

});