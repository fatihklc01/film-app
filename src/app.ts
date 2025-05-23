import * as fs from "fs";
import * as readline from "readline";
import { Film, Director } from "./interfaces";

const films: Film[] = JSON.parse(fs.readFileSync("./film.json", "utf-8"));
const directors: Director[] = JSON.parse(fs.readFileSync("./directors.json", "utf-8"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\nFilm Informatie Bekijken");
    console.log("1. Toon alle films");
    console.log("2. Filter op film-ID");
    console.log("3. Afsluiten");
    rl.question("Maak uw keuze: ", handleMenu);
}

function handleMenu(choice: string) {
    switch (choice) {
        case "1":
            films.forEach(f => console.log(`- ${f.title} (${f.id})`));
            showMenu();
            break;
        case "2":
            rl.question("Voer film-ID in: ", (id) => {
                const film = films.find(f => f.id === id);
                if (!film) {
                    console.log("Film niet gevonden.");
                } else {
                    const director = directors.find(d => d.id === film.director.id);
                    console.log(`\n- ${film.title} (${film.id})`);
                    console.log(`  - Beschrijving: ${film.description}`);
                    console.log(`  - Jaar: ${film.releaseYear}`);
                    console.log(`  - Actief: ${film.isActive}`);
                    console.log(`  - Uitgavedatum: ${film.releaseDate}`);
                    console.log(`  - Genre: ${film.genre}`);
                    console.log(`  - Acteurs: ${film.actors.join(", ")}`);
                    console.log(`  - Regisseur: ${director?.name} (${director?.nationality})`);
                }
                showMenu();
            });
            break;
        case "3":
            rl.close();
            break;
        default:
            console.log("Ongeldige keuze.");
            showMenu();
    }
}

showMenu();