const sayHello = (req, res) => {
    res.send("Hello world !");
}

const sayBonjour = (req, res) => {
    res.send("Salut tout le monde !");
}

export { sayHello, sayBonjour }