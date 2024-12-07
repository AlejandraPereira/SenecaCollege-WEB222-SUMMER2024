/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, tracks } = window;

// For debugging, display all of our data in the console
console.log({ products, tracks }, "Store Data");

// Función para agrupar pistas por categoría
function groupTracksByCategory(tracks) {
  const groupedTracks = {};

  tracks.forEach((track) => {
    if (!groupedTracks[track.category]) {
      groupedTracks[track.category] = [];
    }
    groupedTracks[track.category].push(track);
  });

  return groupedTracks;
}

const groupedTracks = groupTracksByCategory(tracks);

function createTrackListItem(track) {
  // Crear y configurar el elemento de lista de la pista
  const listItem = document.createElement("li");
  listItem.classList.add("track-list-item");

  const trackImage = document.createElement("img");
  trackImage.src = track.image;
  trackImage.alt = track.title;
  trackImage.classList.add("track-image");
  listItem.appendChild(trackImage);

  const trackDetails = document.createElement("div");
  trackDetails.classList.add("track-details");
  listItem.appendChild(trackDetails);

  const trackTitle = document.createElement("h3");
  trackTitle.classList.add("track-title");
  trackTitle.textContent = track.title;
  trackDetails.appendChild(trackTitle);

  const trackArtist = document.createElement("p");
  trackArtist.classList.add("track-artist");
  trackArtist.textContent = track.artist;
  trackDetails.appendChild(trackArtist);

  const trackWaveform = document.createElement("img");
  trackWaveform.src = track.waveform;
  trackWaveform.alt = "Waveform";
  trackWaveform.classList.add("track-waveform");
  listItem.appendChild(trackWaveform);

  const trackDuration = document.createElement("span");
  trackDuration.classList.add("track-duration");
  trackDuration.textContent = track.duration;
  listItem.appendChild(trackDuration);

  const playButton = document.createElement("button");
  playButton.classList.add("play-button");
  playButton.textContent = "▶️"; // Icono de reproducción
  playButton.addEventListener("click", () => {
    const audio = new Audio(track.audioSrc);
    audio.play();
  });
  listItem.appendChild(playButton);

  const downloadButton = document.createElement("a");
  downloadButton.classList.add("download-button");
  downloadButton.href = track.audioSrc;
  downloadButton.download = track.title;
  downloadButton.textContent = "⬇️"; // Icono de descarga
  listItem.appendChild(downloadButton);

  return listItem;
}

function displayTracks(category) {
  const trackListContainer = document.getElementById("track-list");
  trackListContainer.innerHTML = "";

  const tracksToDisplay = groupedTracks[category] || [];

  tracksToDisplay.forEach((track) => {
    const trackListItem = createTrackListItem(track);
    trackListContainer.appendChild(trackListItem);
  });

  document.getElementById("track-count").textContent = `${tracksToDisplay.length} ${category} tracks`;
}

// Inicializar la página mostrando una categoría por defecto
document.addEventListener("DOMContentLoaded", () => {
  displayTracks('rock');  // O la categoría que desees mostrar primero
});
