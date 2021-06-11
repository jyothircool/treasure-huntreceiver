radio.onReceivedString(function (receivedString) {
    let received_number = 0
    basic.showNumber(received_number)
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(1)
basic.forever(function () {
	
})
