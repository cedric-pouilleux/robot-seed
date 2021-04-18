import {UICell, UISeed, UIPosition} from "@/interfaces";

export class Cell implements UICell {

	size!: number;
	position!: UIPosition;
	type: UISeed | null = null;

	constructor(size: number, position: UIPosition){
		this.size = size!;
		this.position = position!;
	}

	getColorType(): string | null {
		if(this.type?.color){
			return this.type.color;
		}
		return null;
	}

}