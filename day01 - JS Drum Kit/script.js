function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Select the audio element based on the key code
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // Select the key element based on the key code

    if (!audio) return; // If no audio is found, exit the function

    audio.currentTime = 0; // Rewind to the start
    audio.play(); // Play the sound

    key.classList.add('playing'); // Add 'playing' class to the key element
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // Skip if it's not a transform property
    this.classList.remove('playing'); // Remove the 'playing' class from the key element
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition); // Add event listener for transition end
})

window.addEventListener('keydown', playSound);
