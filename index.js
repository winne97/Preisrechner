let total = 0;

function addItemToOrder(dish, price) {
  total = total + price;
  console.log(total, price, dish);
  const newArea = document.createElement("p");
  newArea.className = "ordered-item";
  newArea.textContent = dish + " " + price.toFixed(2) + " €";
  console.log(newArea);
  document.getElementById("scroll-container").appendChild(newArea);
  document.getElementById("totalprice").innerHTML = total.toFixed(2) + " €";

  /* Container sprinngt automatisch ans Ende zum zuletzt hinzugefügten Element */
  document.getElementById("scroll-container").scrollTop =
    document.getElementById("scroll-container").scrollHeight;
}

function clearItems() {
  total = 0;
  document.getElementById("totalprice").innerHTML = "0.00 €";
  document.getElementById("scroll-container").innerHTML = "";
}

function payOnSite() {
  alert("Bestellung abgeschlossen! Gesamtbetrag: " + total.toFixed(2) + " €.");
  clearItems();
}

function deliveryPay() {
  let deliveryprice = (total += 2);
  if (total < 21) {
    alert(
      "Mindestbestellwert für Lieferung 20.00 €! Aktueller Betrag " +
        total.toFixed(2) +
        " €.",
    );
  } else {
    alert(
      "Bestellung für Lieferung abgeschlossen! Gesamtbetrag: " +
        deliveryprice.toFixed(2) +
        " €.",
    );
    clearItems();
  }
}
