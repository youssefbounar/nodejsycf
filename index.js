// import { data } from "./data.js";
var tools = require("./data");
console.log("Hello");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});
// pour recuperer l'argument de la ligne de commande
// example node .\index.js ll
var myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs[0]);
var arg_countrie = "ll";
var arg_poeple = "au";
var arg_animal = "a";
console.log("countries count : " + tools.data.length);
var countries = tools.data.filter((countrie) => findcountriesbyname(countrie));
console.log("countries trouve : " + countries.length);
countries.map((cont) => {
    console.log("poeple list trouve : " + cont.people.length);
    console.log("countrie trouve : " + cont.name);
    var poeples = cont.people.filter((poeple) => findpeoplebyname(poeple));
    poeples.map((men) => {
        console.log("poeple trouve : " + men.name);
        var myanimals = men.animals.filter((animale) => findanimalbyname(animale));

        myanimals.map((animl) => {
            console.log("animale trouve : " + animl.name);
        });
    });
});

function findcountriesbyname(countrie) {
    return countrie.name.includes(arg_countrie);
}

function findpeoplebyname(people) {
    return people.name.includes(arg_poeple);
}

function findanimalbyname(animal) {
    return animal.name.includes(arg_animal);
}

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });