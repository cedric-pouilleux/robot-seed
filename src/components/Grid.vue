<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<h4>{{ label }}</h4>
				<p class="date">{{ dateString }}</p>
				<p>test count</p>
			</div>
		</template>
		<div class="grid" v-for="(rows, rowIndex) in grid" :key="rowIndex">
			<template v-for="(cell, index) in rows" :key="index">
				<grid-cell :cell="cell" @select="handlerSelect"/>
			</template>
		</div>
	</el-card>
</template>

<script lang="ts">
	import {Options, Vue} from 'vue-class-component';
	import {Prop} from 'vue-property-decorator';
	import {UIGrid} from '@/entities/Grid';
	import {Cell, UICellPayload} from '@/entities/Cell';
	import GridCell from '@/components/GridCell.vue';

	@Options({
		name: 'Grid',
		components: {GridCell}
	})
	export default class Grid extends Vue implements UIGrid {

		@Prop() readonly label!: string;
		@Prop() readonly createdAt!: Date;
		@Prop() readonly rows!: number;
		@Prop() readonly columns!: number;
		@Prop() private readonly cellSize!: number;

		slug!: string;
		private grid: UICellPayload[][] = this.generateGrid();

		created(){
			this.slug = this.label;

		}

		get dateString(): string {
			return this.createdAt.toISOString().split('T')[0];
		}

		makeCell(column: number, row: number): UICellPayload {
			const payload: UICellPayload = {
				size: this.cellSize,
				position: {
					x: column,
					y: row,
				}
			};
			return new Cell(payload);
		}

		generateGrid(): UICellPayload[][] {
			const rows = [...Array(this.rows)];
			const columns = [...Array(this.columns)];
			return rows.map(column =>
				columns.map(row => this.makeCell(column, row))
			);
		}

		handlerSelect($event: any){
			console.log($event);
		}

	}
</script>

<style scoped lang="scss">
	.el-card {
		&__header {
			padding: 0 20px;
		}
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.grid {
		display: flex;
	}
</style>
