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
        [name="name"] {
          font-family: Montserrat, sans-serif;
          font-size: 18px;
          font-weight: 500;
          text-transform: uppercase;
        }
        [name="image"] img {
          width: 100%;
        }
        .card {
          margin: 20px 0;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          
        }
      </style>
      <div class="card">
        <slot name="image">
          <img src="https://picsum.photos/500/300" alt="image" />
        </slot>
        <slot name="name">Name</slot>
        <slot name="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
          accusantium quas quidem voluptatum. Quisquam, quae. Quisquam, quae.
          Quisquam, quae. Quisquam, quae.
        </slot>
      </div>
    `;
  }
}

customElements.define("menu-card", Card);
