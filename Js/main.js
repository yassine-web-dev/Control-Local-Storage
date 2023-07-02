// Select Elements
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInputKey = document.getElementById("the-input-key");
let theInputValue = document.getElementById("the-input-value");

allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        if (e.target.classList.contains("check-item")) {

            checkItem();
        }

        if (e.target.classList.contains("add-item")) {

            addItem();
        }

        if (e.target.classList.contains("delete-item")) {

            deleteItem();
        }

        if (e.target.classList.contains("show-items")) {

            showItems();
        }
    });
});

function showMessage() {

    results.innerHTML = 'Input Cant Be Empty';
}

function checkItem() {

    if (theInputKey.value !== '') {

        if (localStorage.getItem(theInputKey.value)) {

            results.innerHTML = `Found Local Storage Item Called <span>${theInputKey.value}</span>`;
        } else {

            results.innerHTML = `No Local Storage Item With The Name <span>${theInputKey.value}</span>`;
        }

    } else {

        showMessage();
    }
}

function addItem() {

    if (theInputKey.value !== '') {

        localStorage.setItem(theInputKey.value, theInputValue.value);

        results.innerHTML = `Local Storage Item <span>${theInputKey.value}</span> Added`;

        theInputKey.value = '';
        theInputValue.value = '';
    } else {

        showMessage();
    }
}

function deleteItem() {

    if (theInputKey.value !== '') {

        if (localStorage.getItem(theInputKey.value)) {

            localStorage.removeItem(theInputKey.value);

            results.innerHTML = `Local Storage Item <span>${theInputKey.value}</span> Deleted`;

            theInputKey.value = '';
        } else {

            results.innerHTML = `No Local Storage Item With The Name <span>${theInputKey.value}</span>`;
        }

    } else {

        showMessage();
    }
}

function showItems() {

    if (localStorage.length > 1) {

        console.log(`Found Elements ${localStorage.length}`);

        results.innerHTML = '';

        for (let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class="key-value">${key} => ${value}</span>`;
        }

    } else {

        results.innerHTML = `Local Storage Is Empty`;
    }
}