function checkUrl(name) {
    const url = /^http:\/\/|^https:\/\//i
    return url.test(name);
}

export { checkUrl }