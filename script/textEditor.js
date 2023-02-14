// selection part
const textArea = document.getElementById('text-area');
const allTypesBtn = document.querySelectorAll('[data-type]');
const keyboardShortcut = document.querySelectorAll('[data-boardKey]');
const inputs = document.querySelectorAll('input');

const textEditor = document.getElementById('text-editor');


// function
function typeHandle(e) {
    const { dataset } = e.target;
    // textArea.style[dataset.type] = attributes.name.value;
    textArea.classList.toggle(dataset.type)
    e.target.classList.toggle('active')
}

function inputHandle(e) {
    textArea.style[e.target.dataset.type] = `${e.target.value}${e.target.dataset.type === 'color' ? '' : 'px'}`;
}

// add event listener
allTypesBtn.forEach(btn => {
    btn.addEventListener('click', typeHandle);
})

inputs.forEach(input => {
    input.addEventListener('change', inputHandle);
})
// keyboard shortcut
textEditor.addEventListener('keypress',(e) => {
    keyboardShortcut.forEach(key => {
        if(e.ctrlKey && e.code === key.dataset.boardkey){
            textArea.classList.toggle(key.dataset.type)
        }
    });
})

