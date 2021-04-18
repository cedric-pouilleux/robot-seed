<template>
	<div class="grid">
		<div v-for="(rows, rowIndex) in modelValue" :key="rowIndex">
			<template v-for="(cell, index) in rows" :key="index">
				<grid-cell :cell="cell" />
			</template>
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from "vue-class-component";
	import { Prop } from "vue-property-decorator";
	import { UICell } from "@/interfaces";
	import { Cell } from "@/entities/Cell";
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

		@Prop({ type: Number, default: 3 })
		readonly columns!: number;

		@Prop({ type: Number, default: 20 })
		cellSize!: number;

		mounted(): void{
			const grid: UICell[][] = this.generateGrid();
			this.$emit('update:modelValue', grid!);
		}

		generateGrid(): UICell[][] {
			return [...Array(this.rows)].map(column => {
				return [...Array(this.columns)].map(row => {
					return new Cell(this.cellSize, {x: column, y: row});
				});
			});
		}

	}
</script>

<style scoped lang="scss">
	.grid {
		width: 1200px;
		margin: 0 auto;
		> div {
			display: flex;
			justify-content: center;
		}
	}
</style>
