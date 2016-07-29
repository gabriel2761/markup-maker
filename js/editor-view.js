var Editor = function() {
    var $editorView = $('#editor-view');
    var markdownView = new MarkdownView();

    function append(key) {
        $editorView.append('<p class="character">' + key + '</p>');
    }

    this.insert = function(key) {
        append(key);
        markdownView.render(key);
    };

    this.command = function(key) {

    };

};