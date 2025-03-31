input.onGesture(Gesture.Shake, function () {
    let X = 0
    music.setTempo(randint(0, 2))
    if (X == 2) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (false) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
