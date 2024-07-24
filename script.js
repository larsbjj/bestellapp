function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

function render() {
    renderMenuContent();
    updateAllBaskets();
}

function renderMenuContent() {
    let menuContentRef = document.getElementById('menu-content');
    menuContentRef.innerHTML = '';

    for (let index = 0; index < menu.length; index++) {
        menuContentRef.innerHTML += getMenuCategoryTemplate(index);
        renderMenuItems(index);
    }
}

function renderMenuItems(index) {
    let menuItemId = 'menu-items' + index;
    let previousIndex = menu[index];
    document.getElementById(menuItemId).innerHTML = '';

    for (let i = 0; i < menu[index].menuItems.length; i++) {
        document.getElementById(menuItemId).innerHTML += getMenuItemTemplate(previousIndex, i);
    }
}

function addToBasket(name, price, index) {
    let amount = 1;
    const itemPrice = price;
    if (basket.food.indexOf(name) == -1) {
        basket.food.push(name);
        basket.price.push(price);
        basket.amount.push(amount);
    } else {
        let newIndex = basket.food.indexOf(name);
        let newAmount = basket.amount[newIndex] + 1;
        let sum = newAmount * itemPrice;

        basket.amount[newIndex] = newAmount;
        basket.price[newIndex] = parseFloat(sum.toFixed(2));
    }
    updateAllBaskets();
}

function updateBasketTotals() {
    let totalSum = 0;
    for (let index = 0; index < basket.food.length; index++) {
        totalSum += basket.price[index];
    }
    basket.totalAmount = parseFloat(totalSum.toFixed(2));
}

function updateAllBaskets() {
    updateBasketTotals();
    renderBasketTemplate();
    renderBasket();
    renderMobileBasket();
    updateMobileBasketButton();
}

function renderBasketTemplate() {
    let basketContentRef = document.getElementById('shopping-basket-content');
    basketContentRef.innerHTML = getBasketTemplate();
}

function renderBasket() {
    if (basket.food.length === 0) {
        let basketContentRef = document.getElementById('shopping-basket-content');
        basketContentRef.innerHTML = getEmptyBasketTemplate();
    } else {
        let basketItemsRef = document.getElementById('cart-content');
        basketItemsRef.innerHTML = '';

        for (let index = 0; index < basket.food.length; index++) {
            basketItemsRef.innerHTML += getBasketContent(index);
        }
    }
}

function changeCartAmount(index, price, number) {
    const itemPrice = price / basket.amount[index];
    if (number == -1) {
        if (basket.amount[index] == 1) {
            basket.food.splice(index, 1);
            basket.price.splice(index, 1);
            basket.amount.splice(index, 1);
        } else {
            let newAmount = basket.amount[index] - 1;
            let sum = newAmount * itemPrice;
            basket.amount[index] = newAmount;
            basket.price[index] = parseFloat(sum.toFixed(2));
        }
    } if (number == 1) {
        let newAmount = basket.amount[index] + 1;
        let sum = newAmount * itemPrice;
        basket.amount[index] = newAmount;
        basket.price[index] = parseFloat(sum.toFixed(2));
    }
    updateAllBaskets();
}

function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d-none');
    updateAllBaskets();
}

function renderMobileBasket() {
    let mobileBasketRef = document.getElementById('shopping-basket-mobile');
    if (basket.food.length === 0) {
        mobileBasketRef.innerHTML = getEmptyMobileBasketTemplate();
    } else {
        mobileBasketRef.innerHTML = getMobileBasketTemplate();
        let mobileBasketContentRef = document.getElementById('mobile-cart-content');
        mobileBasketContentRef.innerHTML = '';

        for (let index = 0; index < basket.food.length; index++) {
            mobileBasketContentRef.innerHTML += getMobileBasketContent(index);
        }
    }
}

function updateMobileBasketButton() {
    let mobileBasketButton = document.getElementsByClassName('button-container')[0].getElementsByClassName('checkout-button')[0];
    if (basket.totalAmount == 0) {
        mobileBasketButton.innerHTML = 'Warenkorb';
    } else {
        mobileBasketButton.innerHTML = `Warenkorb (${formatPrice(basket.totalAmount + 2)} €)`;
    }
}