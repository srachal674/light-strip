let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.rgb(70, 29, 124))
    basic.pause(2000)
    strip.showColor(neopixel.rgb(255, 208, 35))
    basic.pause(2000)
})
