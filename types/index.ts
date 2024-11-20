export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTags
	tag: ICategoryAndTags
	image: { url: string }
	createdAt: string
	content: { html: string }
}

export interface IAuthor {
	name: string
	image: { url: string }
	key: string;
}

export interface ICategoryAndTags {
	name: string
	slug: string
}
