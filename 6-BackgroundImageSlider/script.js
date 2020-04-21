(function () {
    const pictures = [
        "pic-0",
        "pic-1",
        "pic-2"
    ];

    const buttons = document.querySelectorAll('.btn')
    let counter = 0
    const timer = document.querySelector('#timer')
    let time = document.querySelector('#time').value


    const imageDiv = document.querySelector('.img-container')
    const imageNum = document.querySelector('#img-num')
    updateImage()

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
            } else if (button.classList.contains('btn-right')) {
                counter++
                if (counter > pictures.length - 1) counter = 0

            }

            updateImage()

        })

    })

    timer.addEventListener('click', function () {
        timer.disabled=true;
        if (typeof time !== 'number' || typeof time <= 0) {
            time = 5;
        }
        const interval = setInterval(() => {
            updateImage()
            counter++
            if (counter > pictures.length - 1) {
                clearInterval(interval);
                counter = 0;
                timer.disabled = false;
                imageNum.textContent += "  Slideshow completed"
            }
        }, time * 1000);


    });

     function updateImage(){
         imageDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
         imageNum.textContent = `Image ${counter+1} / ${pictures.length}`
    }


})()