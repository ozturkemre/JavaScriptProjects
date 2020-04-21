(function () {
    const form = document.querySelector('#message-form')

    form.addEventListener('submit', e => {
        e.preventDefault();

        const message = document.querySelector('#message');
        const feedback = document.querySelector('.feedback');
        const messageContent = document.querySelector('.message-content');

        if (message.value === ''){
            feedback.removeAttribute('hidden')
            messageContent.textContent = ''
        }else {
            messageContent.textContent = message.value
            message.value = ''
            feedback.setAttribute('hidden','')
        }

    })

})()