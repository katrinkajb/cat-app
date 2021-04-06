const form = document.getElementById('create-cat');
const ul = document.getElementById('cats');

const newCat = (cat) => {
    const li = document.createElement('li');

    li.textContent = `${cat.catName} is a ${cat.color} cat that is ${cat.age} years old`;
    
    ul.appendChild(li);
}

form.addEventListener('submit', (event) => {
    // maybe get rid of this so the page refreshes?
    event.preventDefault();

    const fd = new FormData(form);

    fetch('api/v1/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: fd.get('catName'),
            Color: fd.get('color'),
            Age: fd.get('age'),
        }),
    })
    .then((res) => res.json())
    .then(appendCat);
});
