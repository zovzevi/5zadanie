document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed")
});

function onClick(e) {
    const price = [200000, 130000, 19000000]
    const item = document.getElementById('select1')
    const count = document.getElementById('Count1')
    let result = document.getElementById('result')
    if (/^\d+$/.test(count.value)) {
        result.value = price[item.value] * count.value + 'RUB'
    }
    else {
        alert('для ввода доступны только числа')
    }
    e.preventDefault()
}

const btn = document.getElementById('button')
btn.addEventListener('click', onClick)