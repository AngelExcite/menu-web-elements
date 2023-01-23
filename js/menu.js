customElements.define(
  "app-drawer",
  class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: "closed" });
      shadowRoot.innerHTML = `
      <style>
      .float-button,.menu{position:fixed;color:#fff;z-index:1}.menu .title,.menu ul li{padding:20px 0}body{margin:0;padding:0;box-sizing:border-box;font-family:sans-serif}.float-button{bottom:20px;right:20px;width:70px;height:70px;border-radius:50%;border:none;background:#f03e3e;font-size:16px;text-align:center;cursor:pointer;transition:.5s;box-shadow:5px 10px 10px rgba(0,0,0,.1)}.menu,.open{transition:.2s}.open{display:block;transform:translateX(0)!important}.menu{display:none;transform:translateX(100%);display:flex;flex-direction:column;padding:0 20px;right:0;width:68vw;max-width:70vw;height:100vh;background:#d83b3b}.menu .title{margin:0 auto}.menu ul{list-style:none;padding:0;margin:auto 0}.menu .title,.menu ul li a,.text-menu{padding-inline:20px;font-family:'Montserrat', sans-serif;font-size:16px;font-weight:800;line-height:14px;text-transform:uppercase;text-decoration:none;color:#f5e9da;display:flex;justify-content:space-between}.text-menu{margin-top:20px;font-size:24px}.menu ul li a:hover{color:#000}.arrow-right:after{content:"";display:inline-block!important;width:0;height:0;border-left:12px solid #fff;border-top:12px solid transparent;border-bottom:12px solid transparent;vertical-align:middle}
      </style>
      <div class="menu" id="menu">
      <div class="title">Selecciona una categoría</div>
      <ul>
                <li>
                <a href="/categorias/desayunos.html"
                >Desayunos
                <span class="arrow-right"></span>
                </a>
                </li>
                <li>
                <a href="http://"
                    >Entradas
                    <span class="arrow-right"></span>
                </a>
                </li>
                <li>
                <a href="http://">Postres <span class="arrow-right"></span> </a>
                </li>
                <li>
                <span class="text-menu"> Menú digital </span>
                </li>
            </ul>
            </div>
            <button class="float-button" id="menu-button">Menu</button>
        <script>
            console.log("test")
        </script>
      `;
      shadowRoot
        .getElementById("menu-button")
        .addEventListener("click", function () {
          shadowRoot.getElementById("menu").classList.toggle("open");
        });
    }
  }
);
