<template>
  <div>
      <metainfo>
        <template v-slot:title="{ content }">{{ content ? `${content} · bordfolio` : `bordfolio` }}</template>
      </metainfo>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta';

  export default {
    setup () {
      useMeta({
        title: 'Your awesome online portfolio - show the world',
        htmlAttrs: { lang: 'en', amp: true }
      })
    },
    name: "App"
  };
</script>