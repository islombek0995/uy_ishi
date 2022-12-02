let val = document.queurySelector('.select')
let inp = document.queurySelector('.inp')
let btn = document.queurySelector('.btn')
let text = document.queurySelector('.text')



btn.addEventListener('click', function () {
    console.log(inp.value / val.value)
})