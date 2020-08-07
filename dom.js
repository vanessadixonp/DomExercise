//Select the section with an id of container without using querySelector.

const id = document.getElementById('container');
console.log(id)


// Select the section with an id of container using querySelector.

const idSelector = document.querySelector('#container');
console.log(idSelector);

// Select all of the list items with a class of “second”.

const listItems = document.querySelectorAll('.second');
console.log(listItems)

// Select a list item with a class of third, but only the list item inside of the ol tag.

const listItemThird = document.querySelector('ol .third');
console.log(listItemThird);


// Give the section with an id of container the text “Hello!”.
    const h1 = document.createElement('h1');
    h1.innerText = "Hello!";
    idSelector.prepend(h1);

// Add the class main to the div with a class of footer.
    const main = document.querySelector('.footer');
    main.classList.add('main');
    console.log(main)

// Remove the class main on the div with a class of footer.
    main.classList.remove('main');

// Create a new li element.
    const newLi = document.createElement('li');

// Give the li the text “four”.
    newLi.innerText = "four";

// Append the li to the ul element.
    const ul = document.querySelector('ul');
    ul.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
    const ol = document.querySelectorAll('ol');

    for(let ols of ol) {
        ols.style.color = "green";
    }

    //using a forEach loop
    // ol.forEach(ols => {
    //     ols.style.color = 'green';
    // })

// Remove the div with a class of footer
   main.remove()
   