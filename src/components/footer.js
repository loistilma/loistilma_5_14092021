class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="text-center text-lg-start bg-light">
            <!-- Section: Social media -->
            <section class="mt-4 text-center">
                <!-- Facebook -->
                <a class="btn  btn-floating m-1" href="#!" role="button">
                    <i class="fab fa-facebook-f fa-2x"></i>
                </a>
                
                <!-- Instagram -->
                <a class="btn  btn-floating m-1" href="#!" role="button">
                    <i class="fab fa-instagram fa-2x"></i>
                </a>

                <!-- Twitter -->
                <a class="btn  btn-floating m-1" href="#!" role="button">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>


            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            Orinoco
        </div>
        </footer>
      `;
    }
}

customElements.define('footer-component', Footer);