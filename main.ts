function set_brightness () {
    reading = input.lightLevel()
    if (reading > 155) {
        led.setBrightness(100)
    } else if (reading > 0) {
        led.setBrightness(255 - reading)
    } else {
        led.setBrightness(50)
    }
}
let reading = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showNumber(input.lightLevel())
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    set_brightness()
})
