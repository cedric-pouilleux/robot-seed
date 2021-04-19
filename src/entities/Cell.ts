import {UISeed} from '@/entities/Seed';

export interface UICell {
	readonly size: number;
	readonly position: UIPosition;
	type: UISeed | null;
}

export interface UICellPayload {
	size: number;
	position: UIPosition;
}

export interface UIPosition {
	x: number;
	y: number;
}

export class Cell implements UICell {

	readonly size!: number;
	readonly position!: UIPosition;
	type: UISeed | null = null;

	constructor(payload: UICellPayload) {
		this.size = payload.size;
		this.position = payload.position!;
	}

}