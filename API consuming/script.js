const links = document.getElementById("links");
let clicked = 0;
/*Creates tags and holders*/
function creator(id, tag, className) {
    const element = document.createElement(tag);
    element.id = id;
    element.className = className;
    return element;
}

/*Fetchs data of the planets */
function fetchPlanetData(link) {
    fetch(link)
        .then((response) => response.json())
        .then((value) => {
            const infos = document.getElementById("infos");
            const name = creator("name", "h2", "planetName");
            const planetInfo = creator("planetInfo", "p", "planetInfo");
            name.innerHTML = `${value.results[clicked].name}`;
            planetInfo.innerHTML = `Climate: ${value.results[clicked].climate}
            , Population: ${value.results[clicked].population}
            , Appears in ${value.results[clicked].films.length} movies `;
            infos.appendChild(name);
            infos.appendChild(planetInfo);
        })
        .catch((err) => {
            console.error(err.message);
        });
}

function createLink(link) {
    fetch(link)
        .then((response) => response.json())
        .then((value) => {
            const len = Number(value.count);
            for (i = 0; i < len / 10; i++) {
                links.innerHTML += `<a href="#" id="link ${i + 1}">${i + 1} | </a>`;
            }
        });
}

links.addEventListener("click", (e) => {
    const num = e.target.textContent.charAt(0);
    console.log(num);
    clicked = num;
    fetchPlanetData("https://swapi.dev/api/planets/");
});

createLink("https://swapi.dev/api/planets/");