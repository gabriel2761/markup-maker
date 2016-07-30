$(function() {
    var editorView = $('#editor-view');
    var markdownView = $('#markdown-view');

    function renderMarkdown() {
        var value = this.value;


    }

    editorView.on('input', renderMarkdown);

});