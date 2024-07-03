// JavaScript to rotate through texts
const textRotation = document.getElementById('textRotation');
const texts = ['Python developer', 'Professional Coder', 'Data analyst'];
let index = 0;
let charIndex = 0;

function changeText() {
    const text = texts[index];
    textRotation.textContent = text.substring(0, charIndex);
    charIndex++;
    if (charIndex > text.length) {
        charIndex = 0;
        index = (index + 1) % texts.length;
    }
}

setInterval(changeText, 100); // Change text every 300 milliseconds
// Initialize EmailJS
(function() {
    emailjs.init("tnBqDHyLRbSxno72v");
  })();
  
// Form submission handler with validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Perform custom form validations
    if (!validateForm()) {
      return; // Exit if the form is not valid
    }
  
    const serviceID = 'service_ut2ak7q';
    const templateID = 'template_33clccm';
  
    const templateParams = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };
  
    emailjs.send(serviceID, templateID, templateParams)
      .then(response => {
        alert('Email sent successfully!');
        console.log('SUCCESS!', response.status, response.text);
      }, error => {
        alert('Failed to send email. Please try again later.');
        console.log('FAILED...', error);
      });
  });
  function validateForm() {
    let isValid = true;
  
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
  
    // Name validation
    if (name.value.trim() === '') {
      showValidationError(name, 'Please enter your name.');
      isValid = false;
    } else {
      hideValidationError(name);
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showValidationError(email, 'Please enter a valid email address.');
      isValid = false;
    } else {
      hideValidationError(email);
    }
  
    // Phone number validation
    const phonePattern = /^\d{10}$/; // Adjust pattern as needed for 10-digit numeric input
    if (!phonePattern.test(phone.value.trim())) {
      showValidationError(phone, 'Please enter a valid 10-digit numeric phone number.');
      isValid = false;
    } else {
      hideValidationError(phone);
    }
  
    // Subject validation
    if (subject.value.trim() === '') {
      showValidationError(subject, 'Please enter a subject.');
      isValid = false;
    } else {
      hideValidationError(subject);
    }
  
    // Message validation
    if (message.value.trim() === '') {
      showValidationError(message, 'Please enter your message.');
      isValid = false;
    } else {
      hideValidationError(message);
    }
  
    return isValid;
  }
  
  function showValidationError(input, message) {
    input.classList.add('is-invalid');
    input.nextElementSibling.textContent = message;
  }
  
  function hideValidationError(input) {
    input.classList.remove('is-invalid');
    input.nextElementSibling.textContent = '';
  }
  
 // Get the button
const backToTopButton = document.getElementById('back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener('click', function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
 document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const apiURL = 'https://4rf76q09v2.execute-api.eu-north-1.amazonaws.com/default/prof_api';
//     const templateParams = {
//         "name": document.getElementById('name').value,
//         "phone": document.getElementById('phone').value,
//         "email": document.getElementById('email').value,
//         "subject": document.getElementById('subject').value,
//         "message": document.getElementById('message').value,
//     };

//     fetch(apiURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//         },
//         body: JSON.stringify(templateParams),
//     })
//     .then(response => {
//         if (!response.ok) {
//             return response.json().then(err => Promise.reject(err));
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.status === 'error') {
//             Object.keys(data.errors).forEach(field => {
//                 const input = document.getElementById(field);
//                 showValidationError(input, data.errors[field]);
//             });
//             alert('Failed to send data. Please correct the errors and try again.');
//         } else {
//             alert('Data stored successfully!');
//             console.log('SUCCESS!', data);
//             clearForm();
//         }
//     })
//     .catch(error => {
//         alert('Failed to send data. Please try again later.');
//         console.error('Error:', error);
//     });
// });

// function showValidationError(input, message) {
//     input.classList.add('is-invalid');
//     input.nextElementSibling.textContent = message;
// }

// function hideValidationError(input) {
//     input.classList.remove('is-invalid');
//     input.nextElementSibling.textContent = '';
// }

// function clearForm() {
//     document.getElementById('contact-form').reset();
//     const inputs = document.querySelectorAll('.is-invalid');
//     inputs.forEach(input => {
//         hideValidationError(input);
//     });
// }
