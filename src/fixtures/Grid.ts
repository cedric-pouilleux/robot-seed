import {Grid} from '@/entities/Grid.ts';

export interface UIGridPayload {
	label: string;
	rows: number;
	columns: number;
}

export default [
	new Grid({ label: 'first',  rows: 3, columns: 9 } as UIGridPayload),
	new Grid({ label: 'second', rows: 3,  columns: 9 } as UIGridPayload),
];