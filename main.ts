input.onButtonPressed(Button.A, function () {
    Vmax = 2.634
    Ratio = Vmax / 1024
    basic.showNumber(pins.analogReadPin(AnalogPin.P0) * Ratio)
})
let Ratio = 0
let Vmax = 0
basic.showLeds(`
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})
