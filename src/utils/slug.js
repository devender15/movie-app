const makeSlug = (text) => {
    text = text.replace(" ", "-");
    return text.charAt(0).toLowerCase() + text.slice(1);
}

export default makeSlug;