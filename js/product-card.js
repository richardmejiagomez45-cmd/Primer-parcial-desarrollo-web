/* ================ PRODUCT CARD WEB COMPONENT ================ */
/* Custom HTML element <product-card> with Shadow DOM */

class ProductCard extends HTMLElement {
  constructor() {
    super();
    // Attach Shadow DOM with open mode
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Called when element is inserted into DOM
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Called when observed attributes change
    if (oldValue !== newValue) {
      this.render();
    }
  }

  // Define which attributes to observe
  static get observedAttributes() {
    return ['name', 'price', 'description', 'image'];
  }

  render() {
    // Get attribute values
    const name = this.getAttribute('name') || 'Product';
    const price = this.getAttribute('price') || '0';
    const description = this.getAttribute('description') || '';
    const image = this.getAttribute('image') || '';

    // Create Shadow DOM content with styles
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .car-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          font-family: Arial, sans-serif;
        }

        .car-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        h3 {
          margin: 15px 15px 8px 15px;
          font-size: 18px;
          font-weight: bold;
          color: #222;
          min-height: 25px;
        }

        p {
          padding: 0 15px 10px 15px;
          font-size: 13px;
          color: #666;
          line-height: 1.4;
          flex-grow: 1;
          margin: 0;
        }

        h4 {
          color: #bb162b;
          margin: 12px 15px;
          font-size: 20px;
          font-weight: bold;
          padding-bottom: 10px;
        }

        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #bb162b;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-weight: bold;
          font-size: 12px;
          display: none;
        }

        .discount-badge.show {
          display: block;
        }

        .price-original {
          text-decoration: line-through;
          color: #999;
          font-size: 14px;
          margin: 5px 0;
          display: none;
        }

        .price-original.show {
          display: block;
        }
      </style>

      <div class="car-card">
        <div class="discount-badge"></div>
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="price-original"></div>
        <h4>$${parseFloat(price).toLocaleString()}</h4>
      </div>
    `;
  }

  // Method to set discount (for offer cards)
  setDiscount(discountPercent) {
    const price = parseFloat(this.getAttribute('price'));
    const newPrice = price - (price * discountPercent / 100);
    
    const badge = this.shadowRoot.querySelector('.discount-badge');
    const priceOriginal = this.shadowRoot.querySelector('.price-original');
    const priceNew = this.shadowRoot.querySelector('h4');
    
    badge.textContent = -${discountPercent}% OFF;
    badge.classList.add('show');
    
    priceOriginal.textContent = $${price.toLocaleString()};
    priceOriginal.classList.add('show');
    
    priceNew.textContent = $${Math.floor(newPrice).toLocaleString()};
  }
}

// Register the custom element
customElements.define('product-card', ProductCard);