console.log('alerty');

// alert('Momma is coming');

const maComing = () => {
    alert('vaag ammu astese');
}

const askPicnic = () => {
    const response = confirm('Are you going with us?');
    console.log(response);
    if (response === true) {
        alert('ammu tmk fee bkash kore dibo?')
    }
    else {
        console.log('ok na nile ny');
    }
}

const askName = () => {
    const name = prompt('what is your name?');
    if (name) {
        console.log(name);
    }

}