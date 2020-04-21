(function () {
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0;


    buttons.forEach(function (button) {
        console.log(count)
        button.addEventListener('click', function () {
            console.log('eventtt')
            if (button.id === 'prevBtn') count--
            else if (button.id === 'nextBtn') count++

            const counter = document.querySelector('#counter')
            counter.textContent = count
        })


    })

})()