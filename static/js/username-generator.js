const names = {
    starwars: [
        "BobaFett",
        "DarthVader",
        "Skywalker",
        "Lightsaber",
        "Jedi",
        "Sith",
        "Padme",
        "Jawa",
        "DeathStar",
        "Mandalorian",
        "Chewbacca",
        "Force",
        "DarthMaul",
        "Batchest"
    ],
    superheroes:
    [
        "Marvel",
        "Avengers",
        "CaptainAmerica",
        "Hulk",
        "Thor",
        "IronMan",
        "Spiderman",
        "Superman",
        "Batman",
        "Catwoman",
        "WonderWoman",
        "Capeshit"
    ],
    // Really though
    gamer: [
        "Aimbot",
        "GG",
        "GLHF",
        "Epic",
        "N1",
        "Sus",
        "Poggers",
        "Bridge"
    ],
    latin: [
        "Calamitas",
        "Ignis",
        "Dominus",
        "Leviculus",
        "Morus",
        "Malignus",
        "Aves",
        "Humanus",
        "Corpus",
        "Spaghettus",
        "Amongus",
        "Retardus"
    ],
    adjectives: [
        "Happy",
        "Funny",
        "Deadly",
        "Awesome",
        "Silly",
        "Crazy",
        "Insane",
        "Nice",
        "Pleasant",
        "Hilarious",
        "Jolly",
        "Wacky",
    ],
    wakaliwood: [
        "Supa",
        "KungFu",
        "Warrior",
        "Warria",
        "Action",
        "Bruce",
        "Commando",
        "Samme",
        "V1"
    ]
}

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function pickRandomName(categories, nickname) {
    let _categories = [];
    categories.forEach((category, i) => {
        if (category == "nickname") {
            _categories[i] = nickname;
        } else {
            _categories[i] = pickRandom(names[category]);
        }
    });
    return _categories.join("");
}

function generateUsername() {
    let cat1 = document.getElementById("category1").value;
    let cat2 = document.getElementById("category2").value;
    let cat3 = document.getElementById("category3").value;
    let nickname = document.getElementById("nickname").value;

    let username = pickRandomName([ cat1, cat2, cat3 ], nickname);
    document.getElementById("generated-username").innerHTML = username;
}
