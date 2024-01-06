import podcasts from "./podcasts.js";
import { setStorage } from "./localstorage.js";

// Décomposition de l'objbet podcast
podcasts.map((podcast, index) => {

    // Pour chaque élément, créer une balise dans le fichier HTML
    let podcastDiv = document.createElement("div")
    podcastDiv.id = "podcastDiv" + index
    podcastDiv.classList.add("podcastDiv")
    document.body.appendChild(podcastDiv)

    // Pour la date
    let date = document.createElement("h2")
    date.classList.add("date")
    date.textContent = podcast.date
    podcastDiv.appendChild(date)

    // Pour le nom
    let name = document.createElement("p")
    name.classList.add("name")
    name.textContent = podcast.name
    podcastDiv.appendChild(name)

    // Pour le contenu
    let content = document.createElement("p")
    content.classList.add("content")
    content.textContent = podcast.content
    podcastDiv.appendChild(content)

    // On ajoute également un bouton 
    let button = document.createElement("button")
    button.classList.add("button")
    button.id = "button" + index
    button.textContent = "Ecouter"
    podcastDiv.appendChild(button)

    // Ajout de l'écouteur d'événement sur les boutons
    button.addEventListener("click", (e) => {

        let podcastItem = {
            date: podcast.date,
            name: podcast.name,
            content: podcast.content,
            url: podcast.url
        }

        setStorage(podcastItem)

        location.href = "./podcast.html"

    })

})