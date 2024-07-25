function getMenuCategoryTemplate(index) {
    return `<div class="menu-category" id="${menu[index].category}-category">
                <div class="category-image">
                    <img src="./assets/img/${menu[index].categoryImage}" alt="Category Image">
                </div>
                <h2>${menu[index].menuTitle}</h2>
                <div class="menu-items-content" id="menu-items${index}"></div>
            </div>`
}

function getMenuItemTemplate(previousIndex, index) {
    return `<div class="menu-item">
                        <div class="item-details">
                            <h3>${previousIndex.menuItems[index].name} <span class="product-info">Produktinfo</span></h3>
                            <p class="item-description">${previousIndex.menuItems[index].description}</p>
                            <p class="price">${formatPrice(previousIndex.menuItems[index].price)} €</p>
                        </div>
                        <button class="add-to-cart" onclick="addToBasket('${previousIndex.menuItems[index].name}', ${previousIndex.menuItems[index].price}, '${index}')">+</button>
                    </div>`
}

function getBasketTemplate() {
    return ` <h2>Warenkorb</h2>
                <div id="cart-content">
                </div>
                <div class="cart-summary" id="cart-summary-content">
                    <div class="subtotal">
                        <span>Zwischensumme</span>
                        <span>${basket.totalAmount} €</span>
                    </div>
                    <div class="delivery-cost">
                        <span>Lieferkosten</span>
                        <span>2,00 €</span>
                    </div>
                    <div class="total">
                        <span>Gesamt</span>
                        <span>${basket.totalAmount + 2} €</span>
                    </div>
                    <button class="checkout-button" onclick="checkout();">Bezahlen (${basket.totalAmount + 2} €)</button>
                </div>`
}


function getBasketContent(index) {
    return `<div class="cart-item">
                        <div class="cart-item-details">
                            <span class="quantity">${basket.amount[index]}x</span>
                            <span class="item-name">${basket.food[index]}</span>
                            <span class="item-price">${formatPrice(basket.price[index])} €</span>
                        </div>
                        <div class="quantity-controls">
                            <button class="decrease" onclick="changeCartAmount(${index}, ${basket.price[index]}, -1)">−</button>
                            <span class="quantity">${basket.amount[index]}</span>
                            <button class="increase" onclick="changeCartAmount(${index}, ${basket.price[index]}, 1)">+</button>
                        </div>
                    </div>`
}

function getEmptyBasketTemplate() {
    return `<h2 class="cart-title">Warenkorb</h2>
                    
                    <div class="cart-icon-wrapper">
                      <svg class="cart-icon" viewBox="0 0 24 24" width="48" height="48">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </div>
                    
                    <p class="cart-instruction">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
                    
                    <div class="cart-total-summary">
                      <div class="cart-subtotal">
                        <span>Zwischensumme</span>
                        <span>0,00 €</span>
                      </div>
                      <div class="cart-total">
                        <span>Gesamt</span>
                        <span>0,00 €</span>
                      </div>
                    </div>
                    
                    <p class="cart-minimum-order">Leider kannst du noch nicht bestellen.</p>
                    
                    <button class="cart-order-button" disabled>Bestellen</button>`
}

function getMobileBasketTemplate() {
    return `<div class="button-container-top">
                <button class="checkout-button" onclick="toggleOverlay();">Warenkorb</button>
              </div>
              <h2>Warenkorb</h2>
                <div id="mobile-cart-content">
                </div>
                <div class="cart-summary" id="cart-summary-content">
                <div class="subtotal">
                        <span>Zwischensumme</span>
                        <span>${formatPrice(basket.totalAmount)} €</span>
                    </div>
                    <div class="delivery-cost">
                        <span>Lieferkosten</span>
                        <span>2,00 €</span>
                    </div>
                    <div class="total">
                        <span>Gesamt</span>
                        <span>${formatPrice(basket.totalAmount + 2)} €</span>
                    </div>
                    <button class="checkout-button" onclick="checkout();">Bezahlen (${formatPrice(basket.totalAmount + 2)} €)</button>`
}

function getEmptyMobileBasketTemplate() {
    return `<div class="button-container-top">
                <button class="checkout-button" onclick="toggleOverlay();">Warenkorb</button>
              </div>
            <h2 class="cart-title">Warenkorb</h2>
                    
                    <div class="cart-icon-wrapper">
                      <svg class="cart-icon" viewBox="0 0 24 24" width="48" height="48">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </div>
                    
                    <p class="cart-instruction">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
                    
                    <div class="cart-total-summary">
                      <div class="cart-subtotal">
                        <span>Zwischensumme</span>
                        <span>0,00 €</span>
                      </div>
                      <div class="cart-total">
                        <span>Gesamt</span>
                        <span>0,00 €</span>
                      </div>
                    </div>
                    
                    <p class="cart-minimum-order">Leider kannst du noch nicht bestellen.</p>
                    
                    <button class="cart-order-button" disabled>Bestellen</button>`
}

function getBasketTemplate() {
  return `<h2>Warenkorb</h2>
          <div id="cart-content"></div>
          <div class="cart-summary" id="cart-summary-content">
              <div class="subtotal">
                  <span>Zwischensumme</span>
                  <span>${formatPrice(basket.totalAmount)} €</span>
              </div>
              <div class="delivery-cost">
                  <span>Lieferkosten</span>
                  <span>2,00 €</span>
              </div>
              <div class="total">
                  <span>Gesamt</span>
                  <span>${formatPrice(basket.totalAmount + 2)} €</span>
              </div>
              <button class="checkout-button" onclick="checkout();">Bezahlen (${formatPrice(basket.totalAmount + 2)} €)</button>
          </div>`;
}

function getBasketContent(index) {
  return `<div class="cart-item">
              <div class="cart-item-details">
                  <span class="quantity">${basket.amount[index]}x</span>
                  <span class="item-name">${basket.food[index]}</span>
                  <span class="item-price">${formatPrice(basket.price[index])} €</span>
              </div>
              <div class="quantity-controls">
                  <button class="decrease" onclick="changeCartAmount(${index}, ${basket.price[index]}, -1)">−</button>
                  <span class="quantity">${basket.amount[index]}</span>
                  <button class="increase" onclick="changeCartAmount(${index}, ${basket.price[index]}, 1)">+</button>
              </div>
          </div>`;
}

function getMobileBasketContent(index) {
  return `<div class="cart-item">
              <div class="cart-item-details">
                  <span class="quantity">${basket.amount[index]}x</span>
                  <span class="item-name">${basket.food[index]}</span>
                  <span class="item-price">${formatPrice(basket.price[index])} €</span>
              </div>
              <div class="quantity-controls">
                  <button class="decrease" onclick="changeCartAmount(${index}, ${basket.price[index]}, -1)">−</button>
                  <span class="quantity">${basket.amount[index]}</span>
                  <button class="increase" onclick="changeCartAmount(${index}, ${basket.price[index]}, 1)">+</button>
              </div>
          </div>`;
}

function getOrderConfirmationTemplate() {
  return `<div class="order-confirmation">
  <h2>Bestellung erfolgreich!</h2>
  <p>Ihre Bestellung wurde aufgegeben und wird in Kürze zubereitet.</p>
  <div class="order-details">
    <p><strong>Bestellnummer:</strong> #12345</p>
    <p><strong>Geschätzte Lieferzeit:</strong> 30-45 Minuten</p>
  </div>
  <button class="track-order-btn" onclick="render();">Zurück zur Startseite</button>
</div>`
}