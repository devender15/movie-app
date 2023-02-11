const makeSlug = (text) => {
    return text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export default makeSlug;