function setStorage(storage) {
    localStorage.setItem("storage", JSON.stringify(storage))
}

function getStorage() {
    let storage = JSON.parse(localStorage.getItem("storage"))
    return storage
}

export { setStorage, getStorage }