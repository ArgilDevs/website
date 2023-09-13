var myDate = new Date();
    var hrs = myDate.getHours();

    



    var quotesArray = [
        'Speak of the devil and she shall appear',
        'Why is your penis on a dead girls phone',
        'I know I look nice but thats just my face',
        'You call it crazy. I call it winning',
        'This is criminal law 100 or as I prefer to call it ‘How to get away with murder’.',
        'You all belong in hell',
        'Choose your husband carefully, Ms. Pratt. You’ll only have yourself to blame if it ends badly',
        'Hooker mom turns bomb mom',
        'Get the governor, before she gets you'  
    ];

    var randomNumber = Math.floor(Math.random() * (quotesArray.length));

    var quote = quotesArray[Math.round(randomNumber)];




    document.getElementById('lblHTGAWMQuotes').innerHTML =
        '<b>' + quote + '</b>';



    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});