<template>
	<div class="grid">
		<div v-for="(rows, rowIndex) in modelValue" :key="rowIndex">
			<template v-for="(cell, index) in rows" :key="index">
				<grid-cell
					:size="cell.size"
					:color="cell.getColorType()"
					:position="cell.position"
				/>
			</template>
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import { Prop } from "vue-property-decorator";
	import {Cell, UICell, UIPosition} from "@/entities/Cell.ts";
	import GridCell from "@/components/GridCell.vue";

	@Options({
		name: 'Grid',
		components: {
			GridCell
		}
	})
	export default class Grid extends Vue {

		@Prop({ type: Array })
		readonly modelValue!: [];

		@Prop({ type: Number, default: 9 })
		readonly rows!: number;

		@Prop({ type: Number, default: 9 })
		readonly columns!: number;

		mounted(): void{
			const grid: UICell[][] = this.generateGrid();
			this.$emit('update:modelValue', grid!);
		}

		generateGrid(): UICell[][] {
			const grid: UICell[][] = [new Array(this.columns)];
			for (let column = 0; column < this.columns; column++) {
				grid[column] = [];
				for (let row = 0; row < this.rows; row++) {
					const position: UIPosition = {x: column, y: row};
					const size: number = 20;
					grid[column][row] = new Cell(size, position);
				}
			}
			return grid;
		}

	}
</script>

<style scoped>
.grid > div {
	display: flex;
}
</style>
