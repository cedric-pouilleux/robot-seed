<template>
	<div class="common-layout">
		<el-container>
			<yre></yre>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">
					<SeedSelector />
				</el-aside>
				<el-main>
					<grid
						title="Salade #1"
						:created-at="new Date()"
						:cell-size="40"
						:rows="6"
						:columns="9"/>
					<grid
						title="Salade"
						:created-at="new Date()"
						:cell-size="40"
						:rows="4"
						:columns="6"/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	//import firebase from "firebase/app";
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
		mounted(){
			//console.log(firebase);
		}
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
