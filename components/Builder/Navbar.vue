<template>
  <nav id="navigation" ref="navbar">
    <div class="navbar sticky-top">
      <div class="container">
        <!-- title -->
        <slot name="title">
          <NuxtLink
            tag="a"
            :to="{ name: 'index' }"
            class="navbar-brand me-2 me-lg-3 d-flex"
          >
            <img
              class="invert-dark logo"
              height="42"
              width="42"
              alt="Less Borders Logo"
              src="https://static.lessborders.com/apps/bordfolio/bordfolio_logo.svg"
            />
            <span class="h6 d-none d-md-inline-block ms-3 my-auto">
              <span class="text-primary">{{ app.name }}</span>
            </span>
          </NuxtLink>
        </slot>
        <!-- menu -->
        <slot name="menu" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { IApp } from '~/utils/app'

const app = useState<IApp>('app')
const navbar = ref(null)

onMounted(() => {
  const { onScroll } = useSticky(navbar.value, 70)
  setTimeout(() => onScroll(), 50)
})
</script>
