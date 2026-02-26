input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
    basic.pause(2000)
})
basic.forever(function () {
    basic.showNumber(5)
})
