import {UIPosition, UICell, UICellPayload} from './interfaces';
import {UISeed} from '@/entities/seed/interfaces';

export class Cell implements UICell {

	size!: number;
	position!: UIPosition;
	type: UISeed | null = null;

	constructor(payload: UICellPayload){
		this.size = payload.size;
		this.position = payload.position!;
	}

	getColorType(): string | null {
		if(this.type?.color){
			return this.type.color;
		}
		return null;
	}

}