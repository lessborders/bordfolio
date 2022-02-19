<template>
	<button
		:title="theme == 'dark' ? 'Dark Theme' : 'Light Theme'"
		@click="toggleTheme()"
		class="theme btn px-3 me-2"
	>
		<i v-if="theme === 'dark'" class="fa-solid fa-moon text-warning"></i>
		<i v-if="theme === 'light'" class="fa-solid fa-brightness"></i>
	</button>
</template>

<script>

	export default {
		data() {
			return {
				theme: localStorage.getItem("theme")
			};
		},
		methods: {
			toggleTheme() {
				if (this.theme == "dark") {
					this.theme = "light";
					document.body.setAttribute("data-theme", "light");
					localStorage.setItem("theme", "light");
				} else {
					this.theme = "dark";
					document.body.setAttribute("data-theme", "dark");
					localStorage.setItem("theme", "dark");
				}
			}
		}
	};
</script>