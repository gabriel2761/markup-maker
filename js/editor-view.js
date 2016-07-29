var Editor = function() {
    var $editorView = $('#editor-view');

    this.insert = function(key) {
        $editorView.append('<p class="character">' + key + '</p>');
    };

    this.command = function(key) {

    };

};