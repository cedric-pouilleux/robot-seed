import {UISeed} from "@/entities/seed/interfaces";

export interface UICell {
	size: number;
	position: UIPosition;
	type: UISeed | null;
	getColorType: () => string | null;
}

export interface UICellPayload {
	size: number;
	position: UIPosition;
}

export interface UIPosition {
	x: number;
	y: number;
}