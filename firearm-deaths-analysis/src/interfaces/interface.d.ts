export interface ContextBlockInterface {
	topic: string;
    brief: string;
}

export interface ContextBlockTextInterface {
	title: string;
    textObj: ContextBlockInterface[];
}

export interface ParagraphBlockInterface {
	title?: string;
    paragraph: string;
}