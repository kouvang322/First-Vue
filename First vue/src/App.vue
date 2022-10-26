<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><strong>Games4You</strong></a>
        <div>
          <!-- <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link view-link" to="/">List of Games </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link view-link" to="/shoppingcart"> Cart - {{ vgStore.shoppingCartList.length }}
              </RouterLink>
            </li>
          </ul> -->

          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"><font-awesome-icon icon="fa-solid fa-cart-shopping" />
            - {{ vgStore.totalItemsInCart}}
          </button>
        </div>
      </div>
    </nav>

    <!-- <RouterView></RouterView><br> -->

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel"><strong>Your Cart</strong></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
       <ShoppingCart></ShoppingCart>
      </div>
    </div>
    <ProductList></ProductList>

    <div class="container">
      <footer class="py-3 my-4 bg-">
        <p class="text-center text-muted">© 2022 Games4You, Inc</p>
      </footer>
    </div>

  </div>
</template>



<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useVideoGameStore } from './stores/VideoGameStore';
import ProductListItem from './components/ProductListItem.vue';
import ProductList from './views/ProductList.vue';
import ShoppingCart from './views/ShoppingCart.vue'; 



const vgStore = useVideoGameStore();

</script>



<style scoped>
/* Global styles */
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}

.btn__danger {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}


.btn__danger:focus {
  outline-color: #c82333;
}

.btn__primary {
  color: #fff;
  background-color: #000;
}

.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}

[class*="__lg"] {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}

[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}

@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}

.visually-hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

[class*="stack"]>* {
  margin-top: 0;
  margin-bottom: 0;
}

.stack-small>*+* {
  margin-top: 1.25rem;
}

.stack-large>*+* {
  margin-top: 2.5rem;
}

@media screen and (min-width: 550px) {
  .stack-small>*+* {
    margin-top: 1.4rem;
  }

  .stack-large>*+* {
    margin-top: 2.8rem;
  }
}

/* End global styles */
#app {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  padding-top: 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 550px) {
  #app {
    padding: 4rem;
  }
}

#app>* {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
}

#app>form {
  max-width: 100%;
}

#app h1 {
  display: block;
  min-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}

.view-link {
  text-decoration-line: underline;
}

.view-link:hover {
  color: #000;
}
</style>
