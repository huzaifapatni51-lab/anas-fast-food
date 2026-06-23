/* Interactive behaviors for ANAS FAST FOOD site */

(() => {
  const WHATSAPP_NUMBER = '923259319533';
  let cart = [];

  const menuItems = [
    { name:"Zinger Burger", price:300, category:"zingerburger", image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000" },
    { name:"Zinger Mayo Burger", price:330, category:"zingerburger", image:"https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000" },
    { name:"Zinger Cheese Burger", price:350, category:"zingerburger", image:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000" },
    { name:"Zinger Jumbo Burger", price:530, category:"zingerburger", image:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000" },
    { name:"Zinger Jumbo Mayo Burger", price:550, category:"zingerburger", image:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1000" },
    { name:"Zinger Jumbo Cheese Burger", price:650, category:"zingerburger", image:"https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1000" },

    { name:"Chicken Burger", price:250, category:"chickenburger", image:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1000" },
    { name:"Chicken Mayo Burger", price:270, category:"chickenburger", image:"https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=1000" },
    { name:"Chicken Cheese Burger", price:299, category:"chickenburger", image:"https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1000" },
    { name:"Chicken Jumbo Burger", price:470, category:"chickenburger", image:"https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=1000" },
    { name:"Chicken Jumbo Mayo Burger", price:490, category:"chickenburger", image:"https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1000" },
    { name:"Chicken Jumbo Cheese Burger", price:520, category:"chickenburger", image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000" },

    { name:"Beef Burger", price:250, category:"beefburger", image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000" },
    { name:"Beef Mayo Burger", price:270, category:"beefburger", image:"https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1000" },
    { name:"Beef Cheese Burger", price:299, category:"beefburger", image:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1000" },
    { name:"Beef Jumbo Burger", price:470, category:"beefburger", image:"https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=1000" },
    { name:"Beef Jumbo Mayo Burger", price:490, category:"beefburger", image:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000" },
    { name:"Beef Jumbo Cheese Burger", price:520, category:"beefburger", image:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000" },

    { name:"Zinger Shawarma Roll", price:180, category:"zingerroll", image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000" },
    { name:"Zinger Cheese Shawarma Roll", price:230, category:"zingerroll", image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000" },

    { name:"Arabian Shawarma Roll", price:170, category:"shawarmaroll", image:"https://images.unsplash.com/photo-1662116765994-1e4200c43589?q=80&w=1000" },
    { name:"Lahori Shawarma Roll", price:120, category:"shawarmaroll", image:"https://images.unsplash.com/photo-1633321702518-7feccafb94d5?q=80&w=1000" },

    { name:"Chest Broast", price:450, category:"chestbroast", image:"https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000" },
    { name:"Chest Masala Broast", price:480, category:"chestbroast", image:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1000" },
    { name:"Chest Chilli Spicy Broast", price:520, category:"chestbroast", image:"https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1000" },
    { name:"Chest Mayo Broast", price:500, category:"chestbroast", image:"https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000" },

    { name:"Leg Broast", price:400, category:"legbroast", image:"https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1000" },
    { name:"Leg Masala Broast", price:430, category:"legbroast", image:"https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000" },
    { name:"Leg Chilli Spicy Broast", price:470, category:"legbroast", image:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1000" },
    { name:"Leg Mayo Broast", price:450, category:"legbroast", image:"https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1000" },

    { name:"Club Sandwich", price:300, category:"clubsandwich", image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000" },
    { name:"Club Mayo Sandwich", price:330, category:"clubsandwich", image:"https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1000" },
    { name:"Club Cheese Sandwich", price:350, category:"clubsandwich", image:"https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1000" },
    { name:"B.B.Q Club Sandwich", price:350, category:"clubsandwich", image:"https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1000" },
    { name:"B.B.Q Club Cheese Sandwich", price:400, category:"clubsandwich", image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000" },
    { name:"Crispy Club Sandwich", price:350, category:"clubsandwich", image:"https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1000" },
    { name:"Crispy Club Cheese Sandwich", price:400, category:"clubsandwich", image:"https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1000" },
    { name:"Crispy Mayo Club Sandwich", price:370, category:"clubsandwich", image:"https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1000" },

    { name:"Chicken Sandwich", price:280, category:"chickensandwich", image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000" },
    { name:"Chicken Mayo Sandwich", price:300, category:"chickensandwich", image:"https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=1000" },
    { name:"Chicken Cheese Sandwich", price:350, category:"chickensandwich", image:"https://images.unsplash.com/photo-1481070555726-e2fe8357725c?q=80&w=1000" },

  { name:"Pepsi 300ml", price:95, category:"beverage", image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1000" },
{ name:"Pepsi 500ml", price:120, category:"beverage", image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1000" },

{ name:"Coca Cola 300ml", price:95, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },
{ name:"Coca Cola 500ml", price:120, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },

{ name:"7-Up 300ml", price:95, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },
{ name:"7-Up 500ml", price:120, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },

{ name:"Sting 500ml", price:140, category:"beverage", image:"https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1000" },

{ name:"Mirinda 300ml", price:95, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },
{ name:"Mirinda 500ml", price:120, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },

{ name:"Next Cola 300ml", price:95, category:"beverage", image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1000" },
{ name:"Next Cola 500ml", price:120, category:"beverage", image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=1000" },

{ name:"Pakola 300ml", price:95, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },
{ name:"Pakola 500ml", price:120, category:"beverage", image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000" },

    { name:"Pizza", price:null, category:"pizza", image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000" }
  ];

  const orderSelect = document.getElementById("orderItem");

  if (orderSelect) {
    menuItems.forEach(item => {
      const option = document.createElement("option");
      option.value = item.price ? `${item.name} - Rs. ${item.price}` : `${item.name} - Ask For Price`;
      option.textContent = option.value;
      orderSelect.appendChild(option);
    });
  }

  function displayMenu(itemsToShow) {
    const menuGrid = document.getElementById("menuGrid");
    if (!menuGrid) return;

    menuGrid.innerHTML = "";

    itemsToShow.forEach(item => {
      const priceText = item.price ? `Rs. ${item.price}` : "Ask For Price";

      menuGrid.innerHTML += `
        <div class="card">
          <img src="${item.image}" alt="${item.name}">
          <div class="card-content">
            <h3>${item.name}</h3>
            <div class="price">${priceText}</div>
            <button class="whatsapp-btn" onclick="selectMenuItem('${item.name}', ${item.price || 0})">
              Add To Cart
            </button>
          </div>
        </div>
      `;
    });
  }

  window.filterMenu = function(category) {
    document.querySelectorAll(".filters button").forEach(btn => {
      btn.classList.remove("active");
    });

    if (event && event.target) {
      event.target.classList.add("active");
    }

    if (category === "all") {
      displayMenu(menuItems);
      return;
    }

    const filtered = menuItems.filter(item => item.category === category);
    displayMenu(filtered);
  };

  window.selectMenuItem = function(name, price) {
    if (!price) {
      alert("This item has Ask For Price. Please contact on WhatsApp.");
      return;
    }

    const orderItem = document.getElementById("orderItem");
    const orderQty = document.getElementById("orderQty");

    if (orderItem) {
      orderItem.value = `${name} - Rs. ${price}`;
    }

    if (orderQty) {
      orderQty.value = 1;
    }

    addToCart();
  };

  function getPrice(itemText) {
    const match = itemText.match(/Rs\.?\s?(\d+)/i);
    return match ? Number(match[1]) : 0;
  }



  function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
      cartItems.innerHTML = "No items added yet.";
      cartTotal.innerHTML = "Subtotal: Rs. 0";
      return;
    }

    let subtotal = 0;
    cartItems.innerHTML = "";

    cart.forEach((cartItem, index) => {
      const total = cartItem.price * cartItem.qty;
      subtotal += total;

      cartItems.innerHTML += `
        <p>
          ${cartItem.qty}x ${cartItem.name} = Rs. ${total}
          <button type="button" onclick="removeFromCart(${index})">Remove</button>
        </p>
      `;
    });

    cartTotal.innerHTML = `Subtotal: Rs. ${subtotal}`;
  }

  window.addToCart = function() {
    const item = document.getElementById("orderItem").value;
    const qty = Number(document.getElementById("orderQty").value) || 1;

    if (!item) {
      alert("Please select an item first.");
      return;
    }

    const price = getPrice(item);

    if (price === 0) {
      alert("This item has Ask For Price. Please contact on WhatsApp.");
      return;
    }

    cart.push({
      name: item,
      qty: qty,
      price: price
    });

    updateCartDisplay();
  };

  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartDisplay();
  };

  window.sendFullOrder = function(event) {
    event.preventDefault();

    if (cart.length === 0) {
      addToCart();
    }

    if (cart.length === 0) {
      alert("Please add at least one item to cart.");
      return;
    }

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const address = document.getElementById("customerAddress").value;
    const payment = document.getElementById("paymentMethod").value;
  

    const deliveryMethod = document.getElementById("deliveryMethod").value;
    const extraFries = document.getElementById("extraFries").value;
    const extraSauce = document.getElementById("extraSauce").value;
  
    const notes = document.getElementById("orderNotes").value || "None";

    let itemsSubtotal = 0;
    let itemsText = "";

    cart.forEach(cartItem => {
      const total = cartItem.price * cartItem.qty;
      itemsSubtotal += total;
      itemsText += `• ${cartItem.qty}x _${cartItem.name}_ → *Rs. ${total}*\n`;
    });

    let customizationTotal = 0;
    if (extraFries.includes("100")) customizationTotal += 100;
    if (extraSauce.includes("50")) customizationTotal += 50;



    const deliveryCharges = 200;
   
   const totalBill = itemsSubtotal + customizationTotal + deliveryCharges;

    const orderId = "AFF-" + Math.floor(10000 + Math.random() * 90000);
  

    const message = `*ANAS FAST FOOD - NEW ORDER*

*ORDER NO:* ${orderId}
---------------------------------
*Customer Details:*
• *Name:* ${name}
• *WhatsApp/Tel:* ${phone}
• *Address:* ${address}
---------------------------------
*Order Customizations:*
• *Delivery Method:* ${deliveryMethod}
• *Extra Fries:* ${extraFries}
• *Extra Sauce:* ${extraSauce}

---------------------------------
*ITEMS ORDERED:*
${itemsText}---------------------------------
• *Subtotal:* Rs. ${itemsSubtotal}
• *Customizations Subtotal:* Rs. ${customizationTotal}
• *Delivery charges:* Rs. ${deliveryCharges}

• *TOTAL PAYABLE BILL:* *Rs. ${totalBill}*
---------------------------------
*Payment Method:* ${payment}
• *Notes:* ${notes}
---------------------------------
_Order processed via Website. Please confirm my order promptly. JazakAllah!_`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  displayMenu(menuItems);

})();