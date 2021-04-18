export interface UIPosition {
	x: number;
	y: number;
}

export interface UISeed {
	label: string;
	value: string;
	color: string;
	growTime: number | null;
}

export interface UICell {
	size: number;
	position: UIPosition;
	getColorType: () => string | null;
}

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