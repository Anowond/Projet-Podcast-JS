import podcasts from "./podcasts.js";
import { callAPI } from "./api.js";


let button = document.getElementById("button")

// Décomposition de l'objbet podcast
podcasts.map( async podcast => {
 
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
    
    
    // On intégre un lecteur audio qui lira le contenu de la variable speach

        let response = await callAPI(content.textContent)
        console.log("response : ", response)
    

    // Response n'est pas exploitable en l'état, on doit passer par la création d'un blob
    let blob = new Blob([response.data], {type: 'audio/mpeg'})
    let url = URL.createObjectURL(blob)
    console.log(url)
    
    let audio = document.createElement("audio")
    audio.controls = true
    audio.src = url
    document.body.appendChild(audio)
    
    console.log(audio)
    
})