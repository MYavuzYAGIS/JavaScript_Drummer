
//This will register all the keys pressed, whether has a functionality or not
window.addEventListener('keydown', function(e){
    // console.log(e)
    // we need KeyCode from e.attributes not all the nodelist. 
    //  e.keyCode is deprecated for better browser support. so we use .key or .code.
    // but using .key or .code gives alphabetical value not numerical
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    // stops the function if no correspoding key,
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');  // in order to acticate the css class

    // Adding Transition Event!

    // up here we are selecting the audio by its data attribuite. audio[data-key = 65 ] for example but we dont hardcode the data.

});


// We selected all the keys on keyborad, and added event listener for all of those.
// if there is transitionend event over there, we are checking it
// if no, return. if there is, we remove the class name playing and it will take place after it is finished.


const keys = document.querySelectorAll('.key');
keys.forEach(key=> key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if (e.propertyName !=='transform') return;
     this.classList.remove('playing');

}

