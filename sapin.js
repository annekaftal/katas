// étape 1.1

function afficherEtoiles(n) {
  console.log("*".repeat(n));
}
// afficherEtoiles(3);

// étape 1.2

function afficherRectangle(hauteur, largeur) {
  for (let i = 0; i < hauteur; i++) {
    console.log("*".repeat(largeur));
  }
}
// afficherRectangle(3,4);

// étape 1.3

function afficherTriangleDroite(n) {
  for (let i = 0; i <= n; i++) {
    console.log(`${"*".repeat(i)}\\`);
  }
}
// afficherTriangleDroite(4);

// étape 1.4

function afficherTriangleGauche(n) {
  for (let i = 0; i <= n; i++) {
    console.log(`${" ".repeat(n - i)}/${"*".repeat(i)}`);
  }
}
// afficherTriangleGauche(4);

// étape 1.5

function afficherPointeSapin(n) {
  console.log(`${" ".repeat(n + 1)}+`);
  for (let i = 0; i <= n; i++) {
    console.log(`${" ".repeat(n - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`);
  }
}
// afficherPointeSapin(4);

// étape 2.1

// function afficherEtage(hauteur, pointe_offset){
//     const nouvelleHauteur = pointe_offset + hauteur;
//     for (let i = pointe_offset; i < nouvelleHauteur; i++){
//         console.log(`${' '.repeat(nouvelleHauteur - i)}/${'*'.repeat(i)}|${'*'.repeat(i)}\\`);
//     };
// }
// afficherEtage(3, 0);
// afficherEtage(3, 1);
// afficherEtage(3, 2);

// étape 2.2

function afficherEtage(hauteur, pointe_offset, espacement) {
  const nouvelleHauteur = pointe_offset + hauteur;
  for (let i = pointe_offset; i < nouvelleHauteur; i++) {
    console.log(
      `${" ".repeat(espacement)}${" ".repeat(nouvelleHauteur - i)}/${"*".repeat(
        i
      )}|${"*".repeat(i)}\\`
    );
  }
}
// afficherEtage(3, 0, 3);
// afficherEtage(3, 1, 2);
// afficherEtage(3, 2, 1);
// afficherEtage(3, 3, 0);

// étape 2.3

// function afficherSapin(etages, hauteur_etage){
//     for (let i = 0; i < etages; i++){
//         afficherEtage(hauteur_etage, (hauteur_etage - (hauteur_etage - i)), (etages - i));
//     };
// }
// afficherSapin(3, 3);

// étape 3

function afficherSapin(etages, hauteur_etage) {
  const espacementCentre = hauteur_etage + etages + 1;
  console.log(`${" ".repeat(espacementCentre)}+`);
  for (let i = 0; i < etages; i++) {
    afficherEtage(
      hauteur_etage,
      hauteur_etage - (hauteur_etage - i),
      etages - i
    );
  }
  for (let i = 0; i < hauteur_etage; i++) {
    if (etages % 2 === 0) {
      console.log(
        `${" ".repeat(espacementCentre - etages / 2)}${"#".repeat(etages + 1)}`
      );
    } else if (etages % 2 === 1) {
      console.log(
        `${" ".repeat(espacementCentre - etages / 2 + 1)}${"#".repeat(etages)}`
      );
    }
  }
}
afficherSapin(3, 3);
