const form = document.getElementById('create-cat');
const ul = document.getElementById('cats');

const newCat = (cat) => {
    const li = document.createElement('li');
    const fact = cat.fact;

    li.textContent = `${cat.catName} is ${cat.age} years old and has ${cat.color} fur. 
    FUN CAT FACT: ${fact}`;
    
    const edit = document.createElement('button');
    edit.addEventListener('click', (cat) => {
        window.location = './detail.html'
        // get by id for cat.id
        // set state (local storage?)
    });
    edit.textContent = 'Edit cat';
    li.append(edit)

    ul.appendChild(li);
}

form.addEventListener('submit', (event) => {
    // maybe get rid of this so the page refreshes?
    event.preventDefault();

    const fd = new FormData(form);

    fetch('/api/v1/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            catName: fd.get('name'),
            color: fd.get('color'),
            age: fd.get('age'),
            fact: fd.get('fact')
        }),
    })
    .then((res) => res.json())
    .then(newCat);
});

fetch('/api/v1/cats')
    .then((res) => res.json())
    .then((cats) => {
        cats.forEach(newCat);
    });
