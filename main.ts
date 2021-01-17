let ζαρι = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playTone(880, music.beat(BeatFraction.Eighth))
    ζαρι = randint(1, 4)
    if (1 == ζαρι) {
        basic.showString("??")
    } else if (2 == ζαρι) {
        basic.showIcon(IconNames.Happy)
    } else if (3 == ζαρι) {
        basic.showString("<<M>>.")
    } else if (4 == ζαρι) {
        basic.showIcon(IconNames.Silly)
    }
})
