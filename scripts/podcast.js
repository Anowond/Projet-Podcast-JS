import { getStorage } from "./localstorage.js"

// Bouton de retour à l'index
let btnRetour = document.getElementById("return")
btnRetour.addEventListener("click", () => {
    location.href = "../index.html"
})

// Récupération de l'outerHTML stocké en localStorage
let storage = getStorage()

// Création des éléments HTML

// Création de la div conteneur
let divPodcast = document.createElement("div")
divPodcast.classList.add("divPodcast")
document.body.appendChild(divPodcast)

// Pour la date
let date = document.createElement("i")
date.classList.add("date")
date.textContent = storage.date
divPodcast.appendChild(date)

// Pour le nom
let name = document.createElement("h2")
name.classList.add("name")
name.textContent = storage.name
divPodcast.appendChild(name)

// Pour le contenu
let content = document.createElement("p")
content.classList.add("content")
content.textContent = storage.content
divPodcast.appendChild(content)

// Pour l'audio
let divAudio = document.createElement("div")
divAudio.classList.add("divAudio")
divPodcast.appendChild(divAudio)

let audio = document.createElement("audio")
audio.classList.add("audio")
audio.controls = true
audio.preload = true
audio.src = storage.url
divAudio.appendChild(audio)






