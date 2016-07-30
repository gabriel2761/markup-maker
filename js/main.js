$(function() {
    var $editorView = $('#editor-view');
    var $markdownView = $('#markdown-view');

    function renderMarkdown() {
        var lines = this.value.split('\n');

        $markdownView.empty();

        lines.forEach(function(line) {
            var $p = $('<p></p>');

            var heading = '######';
            for (var i = 6; i >= 1; i--) {
                if (line.startsWith(heading)) {
                    line = line.substring(i);
                    $p.addClass('h' + i);
                    break;
                }
                heading = heading.substring(1);
            }

            $p.text(line);
            $markdownView.append($p);
        });
    }

    $editorView.on('input', renderMarkdown);
});