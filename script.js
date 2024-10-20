document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");

    welcomeMessage.textContent = "Welcome to my page";
    
    

    const button = document.getElementById("my-button");
   
    button.addEventListener("click", function () {
        alert("Button was clicked");
        const userConfirmed = confirm("Welcome");
    
        const changingText = document.getElementById("changing-text");
        const startButton = document.getElementById("start-loop-button");
        const stopButton = document.getElementById("stop-loop-button");
        const fetchPhotoButton = document.getElementById("fetch-photo-button");
        const photoContainer = document.getElementById("random-photo");

        const messages = [
            "Here are some numbers that change",
            "123",
            "456",
            "789",
            "Click stop if you're done."
        ];
    
        let intervalId;
        let currentIndex = 0;
    
        startButton.addEventListener("click", function () {
            startButton.style.display = "none";
            stopButton.style.display = "inline";
    

            intervalId = setInterval(function () {
                changingText.textContent = messages[currentIndex];
                currentIndex = (currentIndex + 1) % messages.length;
            }, 2000);
        });
    

        stopButton.addEventListener("click", function () {
            clearInterval(intervalId);
            changingText.textContent = "Text changing stopped.";
            startButton.style.display = "inline";
            stopButton.style.display = "none";
        });    

        fetchPhotoButton.addEventListener("click", function () {
            fetch('https://picsum.photos/300')
                .then(response => {
                    photoContainer.src = response.url;
                    photoContainer.style.display = "block";
                })
                .catch(error => {
                    console.error("Error fetching photo:", error);
                    alert("Failed to fetch a photo. Please try again.");
                });
    });
});
});
