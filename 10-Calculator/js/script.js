(function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const reset = document.querySelector('.btn-reset');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const value = e.target.dataset.num;
            screen.value += value;

        })

    });

    equal.addEventListener('click', function (e) {
        if (screen.value !== "") {
            const answer = eval(screen.value);
            screen.value = answer;
        }

    })

    reset.addEventListener('click', function (e) {
        screen.value = '';

    })
})();