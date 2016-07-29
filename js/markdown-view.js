var MarkdownView = function() {
    var $markdownView = $('#markdown-view');

    this.render = function(key) {
        $markdownView.append('<p>' + key + '</p>');
    };
};