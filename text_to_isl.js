// JavaScript for Text to ISL and Speech to ISL Translator

// Handle text input translation
document.getElementById("translate-text-btn").addEventListener("click", function() {
    const textInput = document.getElementById("text-input").value;
    if (textInput) {
        // Simulate ISL translation output (this would be replaced by actual backend or animation call)
        document.getElementById("isl-translation").innerText = `Translating: "${textInput}" into ISL...`;
    } else {
        alert("Please enter some text to translate.");
    }
});

// Handle speech input using Web Speech API
document.getElementById("start-speech-btn").addEventListener("click", function() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-IN';
        recognition.onstart = function() {
            document.getElementById("speech-status").innerText = "Listening...";
        };
        recognition.onresult = function(event) {
            const speechResult = event.results[0][0].transcript;
            document.getElementById("speech-status").innerText = `You said: "${speechResult}"`;
            // Simulate ISL translation output
            document.getElementById("isl-translation").innerText = `Translating: "${speechResult}" into ISL...`;
        };
        recognition.onerror = function() {
            document.getElementById("speech-status").innerText = "Error recognizing speech. Please try again.";
        };
        recognition.start();
    } else {
        alert("Speech recognition is not supported in your browser. Please use Chrome.");
    }
});
