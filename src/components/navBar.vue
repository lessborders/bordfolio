<template>
  <nav
    class="navbar navbar-expand-lg sticky-top"
    :class="{ 'navbar--hidden': !showNavbar }"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img height="48" width="48" alt="Vue logo" src="../assets/svg/logo.svg"/>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Create</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Themes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Explore</a>
          </li>
        </ul>
      </div>

      <div class="d-flex">
        <ul class="nav">
          <li class="nav-item">
            <darkToggle/>
            <div class="btn btn-primary" aria-current="page" href="#">Sign in</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
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
