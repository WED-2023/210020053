document.addEventListener('DOMContentLoaded', () => {
    const photoContainers = document.querySelectorAll('.photo-container');
    const currentPhotoIndexes = Array(photoContainers.length).fill(0);

    function showPhoto(containerIndex, photoIndex) {
        const photos = photoContainers[containerIndex].querySelectorAll('.photo');
        photos.forEach(photo => photo.classList.remove('active'));
        photos[photoIndex].classList.add('active');
    }

    window.nextPhoto = function(containerIndex) {
        const photos = photoContainers[containerIndex].querySelectorAll('.photo');
        currentPhotoIndexes[containerIndex] = (currentPhotoIndexes[containerIndex] + 1) % photos.length;
        showPhoto(containerIndex, currentPhotoIndexes[containerIndex]);
    }

    // Initialize by showing the first photo in each container
    photoContainers.forEach((container, index) => {
        showPhoto(index, currentPhotoIndexes[index]);
    });
});

//email
function sendEmail() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emoji = document.getElementById('emoji').value;

    const fullMessage = `${message} ${emoji}`;

    emailjs.send("service_r2vaiiw", "template_ping2ts", {
        from_email: email,
        message: fullMessage,
    })
    .then((response) => {
        alert('Email sent successfully!');
    }, (error) => {
        alert('Failed to send email. Please try again later.');
    });
}

