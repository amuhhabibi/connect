const words = "Guten Morgen, Welt :) <br> Herzlich Wilkommen!"

let cursor = gsap.to('#cursor', {
    opacity: 0,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
    duration: .5
})

let masterTL = gsap.timeline({
    repeat: -1
})

let tl = gsap.to('#teks', {
    duration: 3,
    text: words,
    ease: "circ.none"
})

tl.delay(1.5);