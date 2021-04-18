export interface UIPosition {
	x: number;
	y: number;
}

export interface UISeed {
	label: string;
	color: string;
	value?: string;
	growTime?: number;
}

export interface UISeedPayload {
	label: string;
	color: string;
}

export interface UICell {
	size: number;
	position: UIPosition;
	type: UISeed | null;
	getColorType: () => string | null;
}