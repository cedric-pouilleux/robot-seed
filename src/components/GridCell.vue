<template>
	<div class="grid-cell" :style="style"></div>
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
		readonly color: string = "#000}";

		@Prop()
		readonly position!: UIPosition;

		get style(){
			return {
				width: this.size + "px",
				height: this.size + "px",
				backgroundColor: this.color,
			}
		}

	}
</script>

<style scoped lang="scss">
	.grid-cell {
		margin: 1px;
		background-color: #000;
		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}
	}
</style>