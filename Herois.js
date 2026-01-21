let nomeHeroi = "Shupper";
let xpHeroi = 8523;
let nivelHeroi;


if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

console.log("\n--- Testando múltiplos heróis ---");

let herois = [
    { nome: "Fractal Elfo", xp: 500 },
    { nome: "Oleríti", xp: 1500 },
    { nome: "Pombo Morcego", xp: 3000 },
    { nome: "Eliryn", xp: 6000 },
    { nome: "Bru", xp: 7500 },
    { nome: "Shupper", xp: 8500 },
    { nome: "Saturno", xp: 9500 },
    { nome: "Enne", xp: 15000 }
];

for (let i = 0; i < herois.length; i++) {
    let heroi = herois[i];
    let nivel;
    
    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}