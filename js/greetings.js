var myDate = new Date();
    var hrs = myDate.getHours();

    

    var greetingsArray = [
        'Listening to <a href="https://open.spotify.com/user/m4dw1kj1irhq2sc223ud92fov?si=d84d6163c890491d">music</a> constantly',
        'Automating 5 minute tasks obsessive',
        'Watching the same shows in repeat',
        'Writing scripts and playlist titles',
        'Probably eating something, anything',
        '<a href="https://open.spotify.com/track/2i8f4VnnBjy0yDqH2C452a">But I never said where or in whose/his sheets</a>',
        'Stressed and constantly overdressed',
        'Resident technology bastard'  
    ];

    var randomNumber = Math.floor(Math.random() * (greetingsArray.length));

    if (randomNumber % 10 == 0){
        if (hrs < 12 && hrs >= 4)
            greet = 'Good Morning';
        else if (hrs >= 12 && hrs < 17)
            greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs < 20)
            greet = 'Good Evening';
        else
            greet = 'Good Night';
    } else {
    var greet = greetingsArray[Math.round(randomNumber / 2)];
    }



    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b>';



    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});