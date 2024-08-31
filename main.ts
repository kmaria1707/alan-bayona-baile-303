basic.forever(function () {
    led.plot(3, 1)
    led.toggle(4, 3)
    led.unplot(1, 0)
    led.toggle(2, 1)
    led.unplot(1, 2)
    led.plot(3, 1)
})
