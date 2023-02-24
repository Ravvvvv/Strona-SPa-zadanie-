// $(document).ready(function () {

//     $('.hamburger').click(function () {
//         console.log('klik')
//         $('.main-menu').toggleClass('open');


//     });

//     $('.main-menu-item a').click(function(e){
//         e.preventDefault();

//         // PREVENT DEfualt  zatrzymuje funkcje i inne dzialania 
//         $('body').fadeOut(2000, function(){
//             window.location.href = $(e.target).attr('href');
//         });
//     });
// })


document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function () {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open')


});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function () {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open')


});



const createAppointment = (appointment) => {
    console.log(appointment);
    fetch('http://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'content-type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    }).then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            appointmentMessage.classList.add('send');
            appointmentMessage.innerText = `dziekujemy  ${resJSON.appointment.name}. zostales zapisany`

        })
}




document.getElementById('appointment-form').addEventListener('sumbit', function (e) {
    e.preventDefault();

    console.log('wyslanie');

    const createAppointment = (appointment) => {

    }
    const appointmentMessage = document.querySelector('.appointment-message')
    let formFields = document.getElementsByClassName('font-field');
    let allFields = false;

    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-message').value




    }



    // ustawiamy iteracje po calej wartosci tych pol
    //sprawdzawmy czy wartosc jest rowna pustego ciagu znakow 
    // //jesli tak daj false i dodaj clases error
    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');

        } else {
            allFields = true;
            formFields[i].classList.remove('error')
        }

    }

    if (allFields) {
        createAppointment(appointment);

    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = 'wypełnij pole';

    }

    // console.log('wyslanie formularza');
})


