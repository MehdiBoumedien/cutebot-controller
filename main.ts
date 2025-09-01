input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendValue("Start", 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendValue("Stop", 1)
})
basic.showString("Remote")
