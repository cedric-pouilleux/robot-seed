<template>
	<el-form ref="form" :model="form" label-width="120px">
		{{ form }}
	</el-form>
</template>
<script lang="ts">
	import {Options, Vue} from 'vue-class-component';
	import {Grid, UIGridPayload} from "@/entities/Grid";


	@Options({
		name: 'AddGrid',
		components: {
		}
	})
	export default class AddGrid extends Vue {

		form: Grid;

		created(){
			const payload: UIGridPayload = {
				label: 'first',
				rows: 3,
				columns: 9,
			}
			this.form = new Grid(payload);
		}

	}
</script>