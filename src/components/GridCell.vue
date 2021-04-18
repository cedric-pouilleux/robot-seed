<template>
	<div class="grid-cell" :style="style"></div>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import { Prop } from "vue-property-decorator";
	import { UICell } from "@/interfaces";

	@Options({
		name: 'GridCell'
	})
	export default class GridCell extends Vue {
		@Prop()
		private cell!: UICell;

		get style(){
			return {
				width: this.cell.size + "px",
				height: this.cell.size + "px",
				backgroundColor: this.cell.type?.color
			}
		}

	}
</script>

<style scoped lang="scss">
	.grid-cell {
		margin: 1px;
		background-color: #000;
		border-radius: 4px;
		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}
	}
</style>