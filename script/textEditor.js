// selection part
const textArea = document.getElementById('text-area');
const allTypesBtn = document.querySelectorAll('[data-type]');
const inputs = document.querySelectorAll('input');


// function
function typeHandle(e) {
    const { dataset, attributes } = e.target;
    // textArea.style[dataset.type] = attributes.name.value;
    textArea.classList.toggle(dataset.type)
    e.target.classList.toggle('active')
}

function inputHandle (e) {
    textArea.style[e.target.dataset.type] = `${e.target.value}${e.target.dataset.type === 'color' ? '' : 'px'}`;
}

// add event listener
allTypesBtn.forEach(btn => {
    btn.addEventListener('click', typeHandle);
})

inputs.forEach(input =>{
    input.addEventListener('change', inputHandle);
})
