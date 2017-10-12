var Local = function () {
    var game;
    var bindKeyEvent = function () {
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 32: // space
                    game.full();
                    break;
                case 37: // left
                    game.left();
                    break;
                case 38: // top
                    game.rotate();
                    break;
                case 39: // right
                    game.right();
                    break;
                case 40: // bottom
                    game.down();
                    break;
            }
        };
    };

    var start = function () {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next')
        };
        game = new Game();
        game.init(doms);
        bindKeyEvent();
    };
    this.start = start;
};