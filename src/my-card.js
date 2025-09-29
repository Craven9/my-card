import { LitElement, html, css } from 'lit';

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
      fancy: { type: Boolean, reflect: true } // reflect keeps DOM attribute in sync
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 12px;
      }

      :host([fancy]) {
        background-color: var(--my-card-fancy-bg, lightblue);
        border: 2px solid darkgrey;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      }

      .card {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        width: 280px;
        height: 400px; 
        background: #fff;
        overflow: hidden;
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.15);
      }

      .card-image {
        width: 100%;
        height: 180px;
        object-fit: cover; 
      }

      .card-text {
        flex: 1;
        padding: 16px;
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .card-title {
        font-size: 1.2rem;
        margin: 0 0 10px 0;
        color: #1876a5;
        font-weight: 700;
        text-align: center;
        padding-bottom: 6px;
      }

      details summary {
        text-align: left;
        font-size: 1rem;
        padding: 4px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border-top: 1px solid #ddd;
        padding: 8px;
        max-height: 70px;
        overflow-y: auto;
      }
    `;
  }

  openChanged(e) {
    if (e.target.hasAttribute('open')) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <img 
          class="card-image" 
          src="${this.image || 'https://via.placeholder.com/280x180'}" 
          alt="${this.title || 'Default image'}" 
        />
        <div class="card-text">
          <h3 class="card-title">${this.title || 'Default Title'}</h3>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>No description provided.</slot>
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);