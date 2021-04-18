import {UISeedCategoryPayload, UISeedCategory} from "./interfaces";

export default class SeedCategory implements UISeedCategory {

	readonly label: string;
	readonly description?: string;

	constructor(params: UISeedCategoryPayload){
		this.label = params.label;
	}

}