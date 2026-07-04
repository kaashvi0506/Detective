const intro =
"Year 2077. " +
"The supercomputer NEXUS AI has taken " +
"control of the Astra-9 space station. " +
"You are Agent K, humanity's last hope. " +
"Collect the energy cores, defeat NEXUS, " +
"and escape before the reactor explodes.";

let i = 0;

function typeStory(){

    const box =
    document.getElementById(
        "story"
    );

    if(!box) return;

    if(i < intro.length){

        box.innerHTML +=
        intro.charAt(i);

        i++;

        setTimeout(
            typeStory,
            35
        );
    }
}

typeStory();

function startGame(){

    window.location.href =
    "level1.html";
}
