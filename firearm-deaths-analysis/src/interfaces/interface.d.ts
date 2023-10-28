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

export interface MenuItemInterface {
    title: string;
    path: string;
}

export interface ReferenceItemInterface {
    nameTitle: string;
    link: string;
    access: string;
    accessable: boolean?;
}

export interface ReferenceBlockInterface {
    blockTitle: string;
    references: ReferenceItemInterface[];
}