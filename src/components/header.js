class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                <a class="navbar-brand" href="/index.html">Orinoco</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link d-flex flex-column align-items-center" href="/index.html"><i class="fas fa-book fa-2x"></i></i>Catalogue</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link d-flex flex-column align-items-center dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-camera-retro fa-2x"></i>Produits
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        <li class="nav-item">
                            <a class="nav-link d-flex flex-column align-items-center" href="/panier.html"><i class="fas fa-shopping-cart fa-2x"></i>Panier</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
      `;
    }
}

customElements.define('header-component', Header);