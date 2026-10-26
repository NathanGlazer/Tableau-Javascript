let notes = [
  [85, 72, 90, 85], // Étudiant 1
  [60, 68, 75, 80], // Étudiant 2
  [95, 88, 90, 91], // Étudiant 3
  [45, 52, 60, 65], // Étudiant 4
];
notes.forEach((note) => {
    console.log(note);
});
console.log("Résultat des étudiants");
console.log("etudiant 1 :" +notes[0]);
console.log("etudiant 2 :" +notes[1]);
console.log("etudiant 3 :" +notes[2]);
console.log("etudiant 4 :" +notes[3]);
function calculMoyenne(notesEtudiant) {
    let somme = 0;

    for (const note of notesEtudiant) {
        somme += note;
    }

    return somme / notesEtudiant.length;
}

console.log("Moyenne de l'étudiant 1 : " + calculMoyenne(notes[0]));
console.log("Moyenne de l'étudiant 2 : " + calculMoyenne(notes[1]));
console.log("Moyenne de l'étudiant 3 : " + calculMoyenne(notes[2]));
console.log("Moyenne de l'étudiant 4 : " + calculMoyenne(notes[3]));