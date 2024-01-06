import podcasts from "./podcasts.js";

// Décomposition de l'objbet podcast
podcasts.map(podcast => {

    // Pour chaque élément, créer une balise dans le fichier HTML

    // Pour la date
    let date = document.createElement("i")
    date.classList.add("date")
    date.textContent = podcast.date
    document.body.appendChild(date)

    // Pour le nom
    let name = document.createElement("h2")
    name.classList.add("name")
    name.textContent = podcast.name
    document.body.appendChild(name)

    // Pour le contenu
    let content = document.createElement("p")
    content.classList.add("content")
    content.textContent = podcast.content
    document.body.appendChild(content)

    // Pour l'audio
    let audio = document.createElement("audio")
    audio.preload = true
    audio.controls = true
    audio.src = podcast.url
    document.body.appendChild(audio)

    console.log(audio)

})