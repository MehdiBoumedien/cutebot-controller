input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.showString("Remote")
