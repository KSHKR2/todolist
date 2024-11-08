

const box = document.getElementById('box');
const button = document.getElementById("button")
const main = document.getElementById("qudtls")

button.addEventListener('click', (evant) =>{
    const item = document.createElement('div')

    const checBox = document.createElement("input")
    checBox.setAttribute('type','checkbox')

    const text = document.createElement('span')
    text.textContent = box.value

    const del = document.createElement("button")
    del.textContent = '삭제'

    del.addEventListener('click', (evant)=> {
        evant.currentTarget.parentNode.parentNode.removeChild(evant.currentTarget.parentNode)

    })

    checBox.addEventListener('change',(evant)=>{
        if(checBox.checked){
            text.style.opacity = '0.5';
        }else{
            text.style.opacity = '1';
        }

    })
    
    item.appendChild(checBox)
    item.appendChild(text)
    item.appendChild(del)

    main.appendChild(item)
    box.value = ''

})