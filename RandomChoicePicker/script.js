const textArea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

//textArea.focus();

textArea.addEventListener('keyup', (event) => {
    addTag(event.target.value);

    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10);

        randomSelect();
    }
})


function randomSelect() {
    const times = 30;
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highLightTag(randomTag);


        setTimeout(() => {
            unHighLightTag(randomTag);
        }, 100);

    }, 100);


    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highLightTag(randomTag);
        }, 100)

    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag) {
    tag.classList.add('highlight');
}

function unHighLightTag(tag) {
    tag.classList.remove('highlight');
}

function addTag(input) {
    const tags = input
        .split(',')
        .filter(tag => tag.trim() != '')
        .map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
    
}