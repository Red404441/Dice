let Number2 = 0
input.onGesture(Gesture.Shake, function () {
    Number2 = randint(1, 3)
    if (Number2 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . . .
            `)
    } else if (Number2 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            # # . # #
            . . . . .
            `)
    } else if (false) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . . # # .
            . . # # .
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
    }
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
