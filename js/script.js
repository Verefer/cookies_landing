//document.getElementsByClassName("main-title")[0].style.color = "red";

document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products"). scrollIntoView( {behavior: "smooth"});
}

const links = document.querySelectorAll(" .menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

const button = document.querySelectorAll(" .products-item .button");
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

const prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    const currentCurrency  = e.target.innerText;

    let newCurrency  = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 99;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    }
    e.target.innerText = newCurrency;
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}

