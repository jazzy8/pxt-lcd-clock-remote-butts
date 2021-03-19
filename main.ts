input.onButtonPressed(Button.A, function () {
    radio.sendString("prev")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("ok")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("next")
})
radio.setGroup(72)
