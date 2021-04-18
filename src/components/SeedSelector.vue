<template>
	<div class="seed-selector">
		{{ seeds }}
		<ul>
			<li v-for="seed in seeds" :key="seed.value">
				{{ seed.label }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import SeedsFixtures from "@/fixtures/Seed.ts";
	import Seed from "@/entities/seed/Seed";

	@Options({
		name: 'SeedSelector'
	})
	export default class SeedSelector extends Vue {

		private seeds!: Seed[] | null;

		created(): void{
			this.seeds = SeedsFixtures;
		}

	}
</script>

<style scoped type="scss">
</style>
