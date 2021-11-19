<template>
	<v-app>
		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon @click="navigationDrawer = !navigationDrawer"></v-app-bar-nav-icon>
		</v-app-bar>
		<v-navigation-drawer v-model="navigationDrawer" app :clipped="true" width="320"> </v-navigation-drawer>
		<v-main style="overflow-y: auto; height: 100%; overflow-x: hidden">
			<perfect-scrollbar><router-view style="overflow-y: auto; height: 100%; overflow-x: hidden" id="router-view" :options="{ wheelSpeed: 0.5 }"></router-view></perfect-scrollbar>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data: () => ({ navigationDrawer: true })
}
</script>
