export interface UIGridPayload {
	label: string;
	rows: number;
	columns: number;
}

export interface UIGrid {
	readonly label: string;
	readonly slug: string;
	readonly rows: number;
	readonly columns: number;
	readonly createdAt: Date;
}

export class Grid implements UIGrid {

	readonly label: string;
	readonly slug: string;
	readonly rows: number;
	readonly columns: number;
	readonly createdAt: Date;

	constructor(payload: UIGridPayload) {
		this.label = payload.label;
		this.slug = this.label;
		this.rows = payload.rows ;
		this.columns = payload.columns;
		this.createdAt = new Date();
	}
}