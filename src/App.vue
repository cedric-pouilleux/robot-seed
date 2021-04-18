<template>
	<div class="common-layout">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">
					<SeedSelector />
				</el-aside>
				<el-main>
					<grid
						v-model="grid"
						:cell-size="40"
						:rows="12"
						:columns="24"/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import Grid from '@/components/Grid.vue';
	import SeedResume from '@/components/SeedResume.vue';
	import SeedSelector from '@/components/SeedSelector.vue';

	@Options({
		name: 'App',
		components: {
			Grid,
			SeedSelector,
			SeedResume
		}
	})
	export default class App extends Vue {
		private grid: [] = [];
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
