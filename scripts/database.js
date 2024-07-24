let menu = [
    {
        "category": "pizza",
        "categoryImage": "pizza-image.avif",
        "menuTitle": "Pizza",
        "menuItems": [
            {
                "name": "Pizza Margherita",
                "description": "mit Tomatensauce",
                "price": 5.90
            },
            {
                "name": "Pizza Salami",
                "description": "",
                "price": 6.40
            },
            {
                "name": "Pizza Thunfisch",
                "description": "mit Thunfisch und Zwiebeln",
                "price": 7.40
            },
            {
                "name": "Pizza Vegetaria",
                "description": "mit Pilzen, Paprika, Artischocken, Broccoli, Oliven und Zwiebeln",
                "price": 7.90
            },
            {
                "name": "Pizza Diavolo (scharf)",
                "description": "mit Salami, Schinken, Oliven und scharfer Peperoni",
                "price": 6.90
            },
        ]
    },
    {
        "category": "pasta",
        "categoryImage": "pasta-image.avif",
        "menuTitle": "Pasta",
        "menuItems": [
            {
                "name": "Spaghetti Napoli",
                "description": "mit Tomatensauce",
                "price": 9.50
            },
            {
                "name": "Spaghetti Bolognese",
                "description": "mit Fleischsauce",
                "price": 10.00
            },
            {
                "name": "Spaghetti Carbonara",
                "description": "mit Schinken und Sahnesauce",
                "price": 10.00
            },
            {
                "name": "Spaghetti Tonno",
                "description": "mit Thunfisch, Tomaten-Sahnesauce und frischem Knoblauch",
                "price": 10.40
            },
            {
                "name": "Maccheroni Bella",
                "description": "mit frischen Pilzen, Schinken, Broccoli und Tomaten-Sahnesauce",
                "price": 10.40
            },
        ]
    },
    {
        "category": "salad",
        "categoryImage": "salad-image.avif",
        "menuTitle": "Salate",
        "menuItems": [
            {
                "name": "Gemischter Salat",
                "description": "mit Mais, Ei, Paprika, Oliven und Zwiebeln",
                "price": 6.40
            },
            {
                "name": "Insalata Grann Italia",
                "description": "mit Thunfisch, Schinken, Käse, Ei, Oliven und Zwiebeln",
                "price": 6.90
            },
            {
                "name": "Thunfischsalat",
                "description": "mit Thunfisch, Käse, Ei, Oliven, milder Peperoni und Zwiebeln",
                "price": 7.40
            },
            {
                "name": "Insalata Italia",
                "description": "mit Oliven und Schafskäse",
                "price": 7.40
            },
            {
                "name": "Salat Chef",
                "description": "mit Thunfisch, Krabben, Ei und milder Peperoni",
                "price": 7.40
            }
        ]
    }
];

let basket = {
    food: [],
    price: [],
    amount: [],
    totalAmount: []
};