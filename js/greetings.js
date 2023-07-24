var myDate = new Date();
    var hrs = myDate.getHours();

    

    var greetingsArray = [
        'Listening to music constantly',
        'Automating 5 minute tasks obsessive',
        'Watching the same shows in repeat',
        'Writing scripts and playlist titles',
        'Probably eating something, anything',
        'Resident technology bastard'

    ];

    var randomNumber = Math.floor(Math.random()*greetingsArray.length);
    var greet= greetingsArray[randomNumber];
    // var greet= greetingsArray[3];


    // if (hrs < 12 && hrs >= 4)
    //     greet = 'Listening to music ';
    // else if (hrs >= 12 && hrs < 17)
    //     greet = 'Good Afternoon';
    // else if (hrs >= 17 && hrs < 20)
    //     greet = 'Good Evening';
    // else
    //     greet = 'Good Night';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b>';