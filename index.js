function ouvrirPorte(jour) {
  var dateActuelle = new Date();
  var anneeActuelle = dateActuelle.getFullYear();
  var moisActuel = dateActuelle.getMonth(); // getMonth() retourne les mois de 0 à 11
  var jourActuel = dateActuelle.getDate();

  if (moisActuel === 11 && anneeActuelle === 2023) {
    if (jourActuel >= jour) {
      document.getElementById("day" + jour).classList.add("opened");
      window.location.href = "./" + jour + ".html";
      console.log(jourActuel + " " + moisActuel + " " + anneeActuelle);
    } else {
      alert(
        "c'est pas bien de tricher, mais vous devez attendre jusqu'au jour " +
          jour +
          " pour ouvrir cette porte."
      );
    }
  } else {
    alert(
      "Cette porte ne peut être ouverte que pendant le mois de décembre de l'année 2023."
    );
  }
}
