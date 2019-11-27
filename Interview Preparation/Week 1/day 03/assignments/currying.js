function sayHello(greeting, name) {

    return function (name) {
        return greeting + " " + name;
    }
}

console.log(sayHello("Hello")("AttainU"));


