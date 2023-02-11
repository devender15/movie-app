const getLocalStorage = (type) => {
    let file;
    if ( type === "favourites" ) {
        file = localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : null;
    } else if (type === "recents") {
        file = localStorage.getItem("recents") ? JSON.parse(localStorage.getItem("recents")) : null;
    } else {
        file = null;
    }

    return file;
}

export default getLocalStorage;