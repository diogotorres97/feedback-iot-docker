const SERVER_URL = `${window.location.origin}/simulator`

task1aListeners();
task1bListeners();
task2Listeners();

function task1aListeners() {
    for (let i = 1; i <= 3; i++) {
        addListener('task1a-test', 'agriculture1', i);
    }
}


function task1bListeners() {
    for (let i = 1; i <= 2; i++) {
        addListener('task1b-test', 'agriculture2', i);
    }
}

function task2Listeners() {
    for (let i = 1; i <= 2; i++) {
        addListener('task2-test', 'smart-home1', i);
    }
}

function addListener(elementId, scenario, i) {
    let testDiv = document.getElementById(`${elementId}${i}`);
    let testButton = testDiv.querySelector('button');

    testButton.addEventListener('click', async (event) => {
        testDiv.querySelector('span').innerHTML = "Running..."
        testDiv.querySelector('span').style.color = '';
        testButton.style.backgroundColor = '';
        disableButtons(true);
        const load = await fetchAsync(`${SERVER_URL}/${scenario}${i}/load`);
        if (load.status !== 200) {
            testDiv.querySelector('span').innerHTML = "Error..."
            disableButtons(false);
            return;
        }

        const result = await fetchAsync(`${SERVER_URL}/${scenario}${i}/validate`);
        if (await result.json()) {
            testDiv.querySelector('span').innerHTML = "Passed!"
            testDiv.querySelector('span').style.color = 'green';
            testButton.style.backgroundColor = 'green';
        } else {
            testDiv.querySelector('span').innerHTML = "Not Passed!"
            testDiv.querySelector('span').style.color = 'red';
            testButton.style.backgroundColor = 'red';
        }
        disableButtons(false);
    });
}

function disableButtons(disabled) {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.disabled = disabled;
    });
}

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response;
    return data;
}

