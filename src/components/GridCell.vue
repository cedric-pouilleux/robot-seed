<template>
	<div class="grid-cell" :style="style" :cell-size="size"></div>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import { Prop } from "vue-property-decorator";
	import { UIPosition } from "@/entities/Cell";

	@Options({
		name: 'GridCell'
	})
	export default class GridCell extends Vue {
		@Prop({ type: Number })
		readonly size: number = 20;

		@Prop({ type: Number })
		readonly color: string | null = null;

		@Prop()
		readonly position!: UIPosition;

		get style(){
			return {
				width: this.size + "px",
				height: this.size + "px",
				backgroundColor: "#000000",
			}
		}

	}
</script>

<style scoped type="scss">
	.grid-cell {
		margin: 1px;
		background-color: #000;
	}
	.grid-cell:hover {
		opacity: 0.8;
		cursor: pointer;
	}
</style>