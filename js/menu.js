customElements.define(
  "app-drawer",
  class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: "closed" });
      shadowRoot.innerHTML = `
        <style>
          .float-button,
          .menu {
            position: fixed;
            color: #fff;
            z-index: 1
          }

          .menu .title,
          .menu ul li {
            padding: 2.5vh 0
          }

          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: sans-serif
          }

          .float-button {
            bottom: 20px;
            right: 20px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: none;
            background: #f03e3e;
            font-size: 16px;
            text-align: center;
            cursor: pointer;
            transition: .5s;
            box-shadow: 5px 3px 10px rgba(0, 0, 0, .1)
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .menu,
          .open {
            transition: .2s
          }

          .open {
            display: block;
            transform: translateX(0) !important
          }

          .menu {
            display: none;
            transform: translateX(100%);
            display: flex;
            flex-direction: column;
            padding: 0 20px;
            right: 0;
            width: 68vw;
            max-width: 70vw;
            height: 100vh;
            background: #d83b3b
            
          }

          .menu .title {
            margin: 0 auto
          }

          .menu ul {
            list-style: none;
            padding: 0;
            margin: auto 0
          }

          .menu .title,
          .menu ul li a,
          .text-menu,
          .rotate-device {
            padding-inline: 25px;
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            font-weight: 800;
            line-height: 14px;
            text-transform: uppercase;
            text-decoration: none;
            color: #f5e9da;
            display: flex;
            justify-content: space-between
          }

          .text-menu {
            margin-top: 20px;
            font-size: 24px
          }

          .menu ul li a:hover {
            color: #000
          }

          .arrow-right:after {
            content: "";
            display: inline-block !important;
            width: 0;
            height: 0;
            border-left: 12px solid #fff;
            border-top: 12px solid transparent;
            border-bottom: 12px solid transparent;
            vertical-align: middle
          }

          ul li a {
            display: flex;
            align-items: center;
          }

          .space {
            height: 80px;
          }

          .rotate-device {
            display: none;
          }

          @media (min-width: 705px) and (orientation: landscape) {
            .rotate-device {
              display: flex;
              position: fixed;
              width: 100vw;
              height: 100vh;
              background-color: #d83b3b;
              align-items: center;
              font-family: Montserrat;
              font-weight: 900;
              font-size: 24px;
              line-height: 29px;
              text-align: center;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              content: "Por favor rota tu teléfono para mejorar la experiencia Chili’s";
              z-index: 1000000;
              justify-content: center;
              padding: 0 1rem;
              z-index: 10;
            }
          }

          .appbar {
            top: 0;
            left: 0;
            width: 100%;
            height: 52px;
            background: #fff;
            color: #d83b3b;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            font-weight: 800;
            line-height: 20px;
            text-transform: uppercase;
            z-index: 10;
          }

          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            margin: 0;
          }

          .line1,
          .line2 {
            width: 38px;
            height: 4px;
            background-color: #f5e9da;
            margin: 5px 0;
            transition: 0.4s;
          }

          button.float-button.open {
            background: #fff;
          }

          button.float-button.open .line1 {
            background-color: #d83b3b;
            transform: rotate(-42deg) translate(-5px, 5px);
          }

          button.float-button.open .line2 {
            background-color: #d83b3b;
            transform: rotate(42deg) translate(-4px, -6px);
          }

        </style>
        <div class="rotate-device">
            Por favor rota tu teléfono para mejor experiencia
        </div>
        <div class="menu" id="menu">
        <div class="title">Selecciona una categoría</div>
          <ul>
            <li>
              <a href="/categorias/desayunos.html">Desayunos
                <span class="arrow-right"></span>
              </a>
            </li>
            <li>
              <a href="/categorias/entradas.html">Entradas
                <span class="arrow-right"></span>
              </a>
            </li>
            <li>
              <a href="/categorias/postres.html">Postres <span class="arrow-right"></span> </a>
            </li>
            <li>
              <a href="/" style="padding: 0">
                <span class="text-menu"> Menú digital </span>
              </a>
              <div class="space"></div>
            </li>
            </ul>
          </div>
          <div class="appbar">
             <slot name="title">Title</slot>
          </div>
        <button class="float-button" id="menu-button">
          <div class="container">
            <div class="line1"></div>
            <div class="line2"></div>
          </div>
        </button>
      `;
      shadowRoot
        .getElementById("menu-button")
        .addEventListener("click", function () {
          shadowRoot.getElementById("menu").classList.toggle("open");
          shadowRoot.getElementById("menu-button").classList.toggle("open");
        });
    }
  }
);
