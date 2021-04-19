import {UISeed, UISeedPayload} from './interfaces';
import SeedCategory from "@/entities/seed/SeedCategory";

export default class Seed implements UISeed {

	readonly label!: string;
	readonly color!: string;
	readonly value!: string;
	readonly growTime!: number;
	readonly categories!: SeedCategory[];

	constructor(params: UISeedPayload){
		this.label = params.label;
		this.value = params.label;
		this.color = params.color;
		this.growTime = 0;
		this.categories = params.categories;
	}

}