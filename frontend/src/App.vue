<template>
	<div id="app-content" :class="{ 'hide-menu': !isMenuVisible }">
		<HeaderTemplate title="Cod3r - Base de Conhecimento" :hideToggle="false" :hideUserDropdown="false" />
		<MenuTemplate />
		<ContentTemplate />
		<FooterTemplate />
	</div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTemplate from "@/components/template/Header.vue";
import MenuTemplate from "@/components/template/Menu.vue";
import ContentTemplate from "@/components/template/Content.vue";
import FooterTemplate from "@/components/template/Footer.vue";

export default {
	name: "App",
	components: { HeaderTemplate, MenuTemplate, ContentTemplate, FooterTemplate },
	computed: mapState(['isMenuVisible'])
}
</script>

<style>
* {
	font-family: "Lato", sans-serif;
}

body {
	margin: 0;
}

#app-content {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 300px 1fr;
	grid-template-areas:
		"header header"
		"menu content"
		"menu footer";
}

#app-content.hide-menu {
	grid-template-areas:
		"header header"
		"content content"
		"footer footer";
}
</style>