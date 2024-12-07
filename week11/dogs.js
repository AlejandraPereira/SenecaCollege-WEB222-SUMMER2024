window.onload = function() {
    loadDogBreeds();    
};
 
 
function showError(message) {
    var err = document.querySelector("#error-msg");
    err.classList.remove("hidden");
    err.innerHTML = message;
}
 
 
function updateBreedList(breedList) {
    var select = document.querySelector("#breeds");
    var btnLoad = document.querySelector("#btn-load");
 
    function createBreedOption(name) {
        var option = document.createElement("option");
        option.value = name;
        option.innerHTML = name;
    
        return option;
    }
    
    breedList.forEach(function(breed) {
        var breedOption = createBreedOption(breed);
        select.appendChild(breedOption);
    });
 
    btnLoad.onclick = function(e) {
        var breed = select.value;
        loadBreedImages(breed);
    };
}
 
function getImageCount() {
    var input = document.querySelector("#image-count");
    return input.value;
}
 
function extractBreedList(response) {
    if(response.status !== "success") {
        throw new Error("response wasn't successful");
    }
    return Object.keys(response.message);
}
 
function loadDogBreeds() {
 
    var url = "https://dog.ceo/api/breeds/list/all";
    var xhr = new XMLHttpRequest();
 
    xhr.onload = function() {
        try {
            var response = JSON.parse(this.responseText);
            var breedList = extractBreedList(response);
            updateBreedList(breedList);
        } catch(e) {
            showError("Unable to load dog breeds");
        }
    };
 
    xhr.onerror = function() {
        showError("Unable to load dog breeds");
    };
 
    xhr.open("GET", url);
    xhr.send();
}