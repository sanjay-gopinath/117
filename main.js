function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0CnG6Szpy/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        if (results[0].label == "roaring") {
            img = 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80';
        } else if (results[0].label == "moowing") {
            img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR234HV9UO4-y0_ubTyqpc1ztAm0igpi8uAubp1EaRI&s';
        }
        if (results[0].label == "barking") {
            img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPBSXP8Xtkf134AXYueowuBSh8QGCtcUBwHMh2zpf&s';
        } else if (results[0].label == "meawing") {
            img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43LsWRQEgMs7mg1cFlu6lAXk4tqVyOksjrSRTw3Yy&s';
        } else {
            img = 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80';
            img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR234HV9UO4-y0_ubTyqpc1ztAm0igpi8uAubp1EaRI&s';
            img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43LsWRQEgMs7mg1cFlu6lAXk4tqVyOksjrSRTw3Yy&s';
            img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43LsWRQEgMs7mg1cFlu6lAXk4tqVyOksjrSRTw3Yy&s';
        }

    }
}