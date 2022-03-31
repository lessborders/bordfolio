<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="d-flex flex-column m-vh-100">
      <slot name="header">
        <PageNavbar />
      </slot>
      <main id="page" class="d-flex col mx-auto">
        <slot />
      </main>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>

<script setup>
const route = useRoute()

if (!route.meta.title) {
  route.meta.title = 'Your awesome online portfolio'
}

console.log(route.meta)

useMeta({
  title: computed(() => `${route.meta.title} · Bordfolio by Less Borders`),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        route.meta.description ||
        'Create your portfolio website in minutes and share it with your friends or potential employers.',
    },
  ],
})
</script>
