    function formatPrice(price) {
        return price.toFixed(2).replace('.', ',');
    }


    function render() {
        renderMenuContent();
        renderBasket();
    }


    function renderMenuContent() {
        let menuContentRef = document.getElementById('menu-content');
        menuContentRef.innerHTML = '';

        for (let index = 0; index < menu.length; index++) {
            menuContentRef.innerHTML += getMenuCategoryTemplate(index);
            renderMenuItems(index,);
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
        if (basket.food.indexOf(name) == - 1) {
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
        updateBasket(index);
        updateBasketAmount();
    }


    function renderBasketTemplate(index) {
        let basketContentRef = document.getElementById('shopping-basket-content');
        basketContentRef.innerHTML = '';
        basketContentRef.innerHTML = getBasketTemplate();
    }


    function updateBasket(index) {
        renderBasketTemplate(index);
        let totalSum = 0;

        for (let index = 0; index < basket.food.length; index++) {
            totalSum += basket.price[index];
            let basketItemsRef = document.getElementById('cart-content');
            basketItemsRef.innerHTML += getBasketContent(index);
        }
        basket.totalAmount = parseFloat(totalSum.toFixed(2));
    }


    function updateBasketAmount() {
        let basketAmountContentRef = document.getElementById('cart-summary-content');
        basketAmountContentRef.innerHTML = '';
        basketAmountContentRef.innerHTML = getCartSummaryTemplate();
    }


    function renderBasket() {
        if (basket.food.length === 0) {
            let basketContentRef = document.getElementById('shopping-basket-content');
            basketContentRef.innerHTML = '';
            basketContentRef.innerHTML = getEmptyBasketTemplate();
        } else {
            let basketItemsRef = document.getElementById('cart-content');
            basketItemsRef = '';

            for (let index = 0; index < basket.food.length; index++) {
                basketItemsRef.innerHTML += getBasketContent(index);
            }
            updateBasketAmount();
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
        updateBasket(index);
        updateBasketAmount();
        renderBasket();
    }


    function changeMobileCartAmount(index, price, number) {
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
        updateBasket(index);
        updateBasketAmount();
        renderMobileBasket();
        renderBasket();
    }


    function toggleOverlay() {
        let overlayRef = document.getElementById('overlay');
        overlayRef.classList.toggle('d-none');
    }


    function renderMobileBasket() {
        if (basket.food.length === 0) {
            let mobileBasketRef = document.getElementById('shopping-basket-mobile');
            mobileBasketRef.innerHTML = '';
            mobileBasketRef.innerHTML = getEmptyMobileBasketTemplate();
        } else {
            let mobileBasketItemsRef = document.getElementById('shopping-basket-mobile');
            mobileBasketItemsRef.innerHTML = '';
            mobileBasketItemsRef.innerHTML = getMobileBasketTemplate();

            let mobileBasketContentRef = document.getElementById('mobile-cart-content');
            mobileBasketContentRef.innerHTML = '';

            for (let index = 0; index < basket.food.length; index++) {
                mobileBasketContentRef.innerHTML += getMobileBasketContent(index);
            }
            
        }
    }