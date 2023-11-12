/* eslint-disable @typescript-eslint/no-explicit-any */
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
    children: any | undefined | null;
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

export interface SocialsLink {
    name: string,
    nameAt: string
    link: string
    icon: JSX.Element
}

export interface SocialCardInterface {
    imgUrl: string
    name: string
    description: string
    socials: SocialsLink[]
}
