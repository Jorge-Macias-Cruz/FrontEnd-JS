const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./quienes.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default;
            let pokenumber= data.id;
            let tipo = data.types[0].type.name;
            let peso = data.weight / 10 + " kg";
            let altura = data.height / 10 + " m";
            let movimiento1 = data.abilities[0].ability.name
            let movimiento2 = data.abilities[1].ability.name
            let hp = data.stats[0].base_stat;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let special_attack = data.stats[3].base_stat;
            let special_defense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            pokeImage(pokeImg);
            pokenum(pokenumber,pokeName);
            pokestats(tipo,peso,altura,movimiento1,movimiento2);
            pokehablidad(hp,attack,defense,special_attack,special_defense,speed)
        }
    });
}
const pokeImage = (url,fondo) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    const pokefondo = document.getElementById("fondop");
    pokefondo.background = fondo;
}
const pokenum = (pokenumber,pokeName) => {
    const pokenums = document.getElementById("pokenum");
    pokenums.innerText = '# ' + pokenumber +' | '+ pokeName.toUpperCase();
}
const pokestats = (tipo,peso,altura,movimiento1,movimiento2) =>{
    const poketipo = document.getElementById("tipokemon");
    poketipo.innerText = tipo;
    const pokepeso = document.getElementById("pesokemon");
    pokepeso.innerText = peso;
    const pokealtura = document.getElementById("alturakemon");
    pokealtura.innerText = altura;
    const pokehabilidad1 = document.getElementById("movpokemon");
    pokehabilidad1.innerText = movimiento1;
    const pokehabilidad2 = document.getElementById("movpokemon2");
    pokehabilidad2.innerText = movimiento2;
}
const pokehablidad = (hp,atk,def,satk,sdef,spd) =>{
    const pokevida = document.getElementById("pokehp");
    pokevida.innerHTML = 'HP |'+hp+ `| <progress max='300' value='${hp}'></progress>`;
    const pokeataque = document.getElementById("pokesttack");
    pokeataque.innerHTML = 'ATK |'+atk+ `| <progress max='300' value='${atk}'></progress>`;
    const pokedefensa = document.getElementById("pokedefense");
    pokedefensa.innerHTML = 'DEF |'+def+ `| <progress max='300' value='${def}'></progress>`;
    const pokespataque = document.getElementById("pokespecial-a");
    pokespataque.innerHTML = 'SATK |'+satk+ `| <progress max='300' value='${satk}'></progress>`;
    const pokespdefensa = document.getElementById("pokespecial-d");
    pokespdefensa.innerHTML = 'SDEF |'+sdef+ `| <progress max='300' value='${sdef}'></progress>`;
    const pokevelocidad = document.getElementById("pokespeed");
    pokevelocidad.innerHTML = 'SPD |'+spd+ `| <progress max='300' value='${spd}'></progress>`;
}