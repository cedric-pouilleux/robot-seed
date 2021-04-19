<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<h4>{{ title }}</h4>
				<p class="date">{{ dateString }}</p>
				<p>test count</p>
			</div>
		</template>
		<div class="grid" v-for="(rows, rowIndex) in grid" :key="rowIndex">
			<template v-for="(cell, index) in rows" :key="index">
				<grid-cell :cell="cell" />
			</template>
		</div>
	</el-card>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';
	import { Prop } from 'vue-property-decorator';
	import { Cell } from '@/entities/cell/Cell';
	import GridCell from '@/components/GridCell.vue';

	@Options({
		name: 'Grid',
		components: {
			GridCell
		}
	})
	export default class Grid extends Vue {

		@Prop({ type: String })
		readonly title: string = '';

		@Prop({ type: Date })
		readonly createdAt!: Date;

		@Prop({ type: Number, default: 9 })
		readonly rows!: number;

		@Prop({ type: Number, default: 3 })
		readonly columns!: number;

		@Prop({ type: Number, default: 20 })
		readonly cellSize!: number;

		private grid: Cell[][] = this.generateGrid();

		get dateString(): string {
			return this.createdAt.toISOString().split('T')[0];
		}

		generateGrid(): Cell[][] {
			const rows = [...Array(this.rows)];
			const columns = [...Array(this.columns)];
			return rows.map(column =>
				columns.map(row => new Cell({
					size: this.cellSize,
					position: {x: column, y: row}
				}))
			);
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
