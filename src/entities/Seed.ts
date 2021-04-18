import { UISeed, UISeedPayload } from "@/interfaces";

export default class Seed implements UISeed{

	readonly label!: string;
	readonly color!: string;
	readonly value?: string | undefined;
	readonly growTime?: number | undefined;

	constructor(params: UISeedPayload){
		this.label = params.label;
		this.value = params.label;
		this.color = params.color;
		this.growTime = 0;
	}

}