export interface UISeedCategory {
	readonly label: string;
	readonly description?: string;
}

export interface UISeedCategoryPayload {
	label: string;
	description?: string;
}

export class SeedCategory implements UISeedCategory {

	readonly label: string;
	readonly description?: string;

	constructor(payload: UISeedCategoryPayload) {
		this.label = payload.label;
		this.description = payload.description;
	}
}