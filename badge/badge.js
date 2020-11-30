const template = document.createElement("template");
//template.innerHTML = ``
const styles = `
  
  <style>
    .badge-container {
      background: #649173;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #DBD5A4, #649173);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #DBD5A4, #649173); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color: #424757;
      max-width: 170px;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }
    .badge-container a {
      margin-left: 1rem;
      text-decoration: none;
      color: #424757;
      text-align: center;
     }
  </style>

`;

const isEmpty = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
};

class Badge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.company = {};
    //this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  static get observedAttributes() {
    return ["id", "loading", "company"];
  }

  get id() {
    return this.getAttribute("id");
  }
  set id(v) {
    console.log("ID", v);
    this.setAttribute("id", JSON.stringify(v));
  }

  get loading() {
    return JSON.parse(this.getAttribute("loading"));
  }

  set loading(v) {
    this.setAttribute("loading", JSON.stringify(v));
  }

  get company() {
    return JSON.parse(this.getAttribute("company"));
  }

  set company(v) {
    this.setAttribute("company", JSON.stringify(v));
  }

  get carbonNeutral() {
    return JSON.parse(this.getAttribute("carbonNeutral"));
  }

  set carbonNeutral(v) {
    this.setAttribute("carbonNeutral", JSON.stringify(v));
  }

  async fetchCompany(url) {
    this.loading = true;
    const response = await fetch(url);
    const json = await response.json();
    this.company = json;
    this.loading = false;
  }

  async connectedCallback() {
    if (this.hasAttribute("id")) {
      await this.fetchCompany(`https://reqres.in/api/users/${this.id}`);
    }
  }

  async attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "id") {
      await this.fetchCompany(`https://reqres.in/api/users/${this.id}`);
    } else {
      this.render();
    }
  }

  render() {
    if (this.loading || isEmpty(this.company) || !this.company.data.last_name) {
      this.shadowRoot.innerHTML = ``;
    } else {
      this.shadowRoot.innerHTML = `
           <div class="badge-container">
             <div>${this.company.data.last_name}</div>
             <a href="https://local.ecological.earth">Carbon Neutral Company</a>
           </div>
          ${styles}
        `;
    }
  }
}

window.customElements.define("ecological-earth", Badge);
