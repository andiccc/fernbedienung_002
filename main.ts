radio.setGroup(0)
let id = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        id = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        id = 2
    }
    if (input.buttonIsPressed(Button.AB)) {
        id = 3
    }
    if (input.logoIsPressed()) {
        id = 4
    }
    radio.sendNumber(id)
    basic.clearScreen()
    if (id == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (id == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (id == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (id == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    id = 0
})
