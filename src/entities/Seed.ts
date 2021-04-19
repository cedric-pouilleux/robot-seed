import {SeedCategory} from "@/entities/SeedCategory";

export interface UISeed {
	label: string;
	slug: string;
	categories: SeedCategory[];
	color?: string;
	growTime?: number;
}

export interface UISeedPayload {
	label: string;
	categories: SeedCategory[];
	color?: string;
	growTime?: number;
}

export class Seed implements UISeed {

	readonly label!: string;
	readonly slug: string;
	readonly categories: SeedCategory[] = [];

	growTime?: number;
	color?: string;

	constructor(params: UISeedPayload){
		this.label = params.label;
		this.slug = params.label;
		this.color = params.color;
		this.growTime = 0;
		this.categories = params.categories;
	}

}