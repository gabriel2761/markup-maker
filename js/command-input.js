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
            default:
                break;
        }
    });

    this.normalModeListener = function(command) {
        $normalModeInput.on('input', function() {
            switch(this.value) {
                case 'i':
                    focusInsertMode();
                    break;
            }
            console.log('command: ' + this.value);
            this.value = '';
        });
    };

    this.insertModeListener = function(key) {
        $insertModeInput.on('input', function() {
            console.log(this.value);
            this.value = '';
        });

        $insertModeInput.keydown(function(event) {
            switch(event.keyCode) {
                case 27:
                    focusNormalMode();
                    break;
            }
        });
    };

    focusNormalMode();
};