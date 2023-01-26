class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        [name="image"] img {
          width: 100%;
          margin-bottom: 10px;
        }
        
        .card {
          margin-bottom: 20px;
          background: #fff;
          color: #333333;
          font-family: sans-serif;
          font-size: 18px;
          line-height: 22px;
          font-weight: 400;
        }
        .card-body {
          padding-top: 10px;
          padding-inline: 40px;
          padding-bottom: 5px;
        }
      </style>
      <div class="card">
        <slot name="image">
          <img src="https://picsum.photos/500/300" alt="image" loading="lazy"/>
        </slot>
        <div class="card-body">
        <slot name="items">
          <h4>Nombre</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </slot>
        </div>
      </div>
    `;
  }
}

customElements.define("menu-card", Card);
