import podcasts from "./podcasts.js";

// Décomposition de l'objbet podcast
podcasts.map(podcast => {
    console.log(podcast)

    // Pour chaque élément, créer une balise dans le fichier HTML

    // Pour la date
    let date = document.createElement("h2")
    date.classList.add("date")
    date.textContent = podcast.date
    document.body.appendChild(date)

    // Pour le nom
    let name = document.createElement("p")
    name.classList.add("name")
    name.textContent = podcast.name
    document.body.appendChild(name)

    // Pour le contenu
    let content = document.createElement("p")
    content.classList.add("content")
    content.textContent = podcast.content
    document.body.appendChild(content)

    // On ajoute également un bouton 
    let button = document.createElement("button")
    button.classList.add("button")
    button.textContent = "Ecouter"
    document.body.appendChild(button)

    // Ajout de l'écouteur d'événement sur les boutons
    button.addEventListener("click", () => {

        location.href = "./podcast.html"

    })

})