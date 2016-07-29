var Editor = function() {
    var $editorView = $('#editor-view');

    this.insert = function(key) {
        $editorView.append('<p>' + key + '</p>');
    };

    this.command = function(key) {

    };

};