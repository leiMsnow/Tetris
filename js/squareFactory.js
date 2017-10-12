var SquareI = function () {
    Square.call(this);
    this.rotates = [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    ];
};
SquareI.prototype = Square.prototype;

var SquareL = function () {
    Square.call(this);
    this.rotates = [
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [2, 2, 2, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 2, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    ];
};
SquareL.prototype = Square.prototype;

var SquareX = function () {
    Square.call(this);
    this.rotates = [
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    ];
};
SquareX.prototype = Square.prototype;

var SquareT = function () {
    Square.call(this);
    this.rotates = [
        [
            [2, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 2, 0],
            [2, 2, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 2, 0, 0],
            [0, 2, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [2, 0, 0, 0],
            [2, 2, 2, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    ];
};
SquareT.prototype = Square.prototype;

var SquareFactory = function () {

};

SquareFactory.prototype.make = function (index, dir) {
    var s;
    switch (index) {
        case 1:
            s = new SquareI();
            break;
        case 2:
            s = new SquareL();
            break;
        case 3:
            s = new SquareX();
            break;
        case 4:
            s = new SquareT();
            break;
    }
    s.origin.x = 0;
    s.origin.x = 3;
    s.rotate(dir);
    return s;
};