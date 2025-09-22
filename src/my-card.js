import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "";
    this.fancy = false;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      fancy: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        overflow: hidden;
        width: 280px;
        background: #fff;
        box-shadow: 0 8px 18px rgba(0,0,0,0.1);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.15);
      }

      .card-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }

      .card-text {
        padding: 16px;
        background: #fafafa;
      }

      .card-title {
        font-size: 1.3rem;
        margin: 0 0 10px 0;
        color: #2d3a8c;
        font-weight: 700;
        text-align: center;
        border-bottom: 2px solid #e0e7ff;
        padding-bottom: 6px;
      }

      .card.fancy {
        background: linear-gradient(135deg, #ff9a8b, #ff6a88, #ff99ac);
        color: white;
      }

      .card.fancy .card-text {
        background: rgba(255, 255, 255, 0.15);
      }

      .card.fancy .card-title {
        color: white;
        border-bottom: 2px solid rgba(255,255,255,0.3);
      }

      @media (max-width: 600px) {
        .card {
          width: 90%;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="card ${this.fancy ? "fancy" : ""}">
        <img 
          class="card-image" 
          src="${this.image || 'https://via.placeholder.com/280x180'}" 
          alt="${this.title || 'Card image'}" 
        />
        <div class="card-text">
          <h3 class="card-title">${this.title}</h3>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);