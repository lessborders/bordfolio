<template>
  <nav
    class="navbar navbar-expand-lg sticky-top card-bg"
    :class="{ 'navbar--hidden': !showNavbar }"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img class="logo" height="48" width="48" alt="Vue logo" src="https://static.lessborders.com/apps/bordfolio/bordfolio_logo.svg"/>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li v-for="page in pages" :key="page" class="nav-item ms-1 me-1">
            <router-link v-if="!page.children" class="nav-link btn btn-transparent" :to="page.link">
              {{page.name}}
            </router-link>
            <div v-if="page.children" class="dropdown has-megamenu">
              <div class="nav-link dropdown-toggle custom-icon icon-right btn btn-transparent" href="#" data-bs-toggle="dropdown">
                {{page.name}} <i class="fa-solid fa-angle-down"></i>
              </div>
              <div class="dropdown-menu megamenu" role="menu">
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="d-flex">
        <ul class="nav">
          <li>
            <darkToggle/>
          </li>
          <li class="dropdown has-megamenu me-2">
            <productDropdown/>
          </li>
          <li>
            <div class="btn btn-primary" aria-current="page" href="#">Sign in</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
const pages = [
    {
        name: "Portfolio",
        link: "/",
        active: 0
    },
    {
        name: "Explore",
        link: "/explore",
        active: 0
    }
];

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      pages: pages
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>
