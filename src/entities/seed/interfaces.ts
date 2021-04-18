import SeedCategory from './SeedCategory';

export interface UISeed {
	label: string;
	color: string;
	value: string;
	growTime: number;
	categories: SeedCategory[];
}

export interface UISeedPayload {
	label: string;
	color: string;
	categories: SeedCategory[];
}

export interface UISeedCategory {
	label: string;
	description?: string;
}

export interface UISeedCategoryPayload {
	label: string;
}