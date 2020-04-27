const SERVER_URL = `${window.location.hostname}/simulator`

taskTutorialListeners();
task1Listeners();
task2Listeners();
problem2Listeners();

function taskTutorialListeners() {
    addListener('tutorial', 'tutorial', '');
    addListener('tutorial-test1', 'tutorial1', '', true);
}

function task1Listeners() {
    addListener('problem1', 'agriculture', '');

    for (let i = 1; i <= 2; i++) {
        addListener('task1-test', 'agriculture1', i, true);
    }
}

function task2Listeners() {
    for (let i = 1; i <= 2; i++) {
        addListener('task2-test', 'agriculture2', i, true);
    }
}

function problem2Listeners() {
    addListener('problem2', 'smart-home', '');

    for (let i = 1; i <= 2; i++) {
        addListener('problem2-test', 'smart-home1', i, true);
    }
}

function addListener(elementId, scenario, i, validate) {
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

        if (validate) {
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
        } else {
            const result = await fetchAsync(`${SERVER_URL}/${scenario}${i}/start`);
            testDiv.querySelector('span').innerHTML = "";
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

