
window.addEventListener('wheel', (scrolling) => {
    if(scrolling.deltaY > 0) {
        gsap.to('.page-image', {
            transform: 'translateX(-200%)',
            duration: 2,
            repeat: -1,
            ease: 'none'
        })
        gsap.to('.texts img', {
            rotate: 180
        })
    } 
})