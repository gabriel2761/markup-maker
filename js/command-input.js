var CommandInputListener = function() {
    var $normalModeInput = $('#normal-mode');
    var $insertModeInput = $('#insert-mode');
    var MODE = 'NORMAL';

    function focusNormalMode() {
        $normalModeInput.focus();
        MODE = 'NORMAL';
    }

    function focusInsertMode() {
        $insertModeInput.focus();
        MODE = 'COMMAND';
    }

    $(document).click(function() {
        switch (MODE) {
            case 'NORMAL':
                focusNormalMode();
                break;
            case 'COMMAND':
                focusInsertMode();
                break;
        }
    });

    this.normalModeListener = function(callback) {
        $normalModeInput.on('input', function() {
            switch(this.value) {
                case 'i':
                    focusInsertMode();
                    break;
                default:
                    callback(this.value);
                    break;
            }
            this.value = '';
        });
    };

    this.insertModeListener = function(callback) {
        $insertModeInput.on('input', function() {
            callback(this.value);
            this.value = '';
        });

        $insertModeInput.keydown(function(callback) {
            switch(event.keyCode) {
                case 27:
                    focusNormalMode();
                    break;
            }
        });
    };

    focusNormalMode();
};