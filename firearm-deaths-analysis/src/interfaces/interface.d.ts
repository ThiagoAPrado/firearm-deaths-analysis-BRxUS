export interface ContextBlockInterface {
	topic: string;
    brief: string;
}

export interface ContextBlockTextInterface {
	title: string;
    textObj: ContextBlockInterface[];
}

export interface TitleBlockInterface {
	title: string;
    subTitle: string;
}

export interface ParagraphBlockInterface {
	title: string;
    paragraph: string;
}