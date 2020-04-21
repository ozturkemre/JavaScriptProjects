(function () {

    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            $('.btn').removeClass('btn-pink').addClass('btn-black')
            e.preventDefault()

            button.classList.add('btn-pink')
            button.classList.remove('btn-black')


            const filter = e.target.dataset.filter

            storeItems.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})();

(function () {
    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')

    searchBox.addEventListener('keyup', (e) => {
        $('.btn').removeClass('btn-pink').addClass('btn-black')
        const searchFilter = e.target.value.toLowerCase().trim()

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();