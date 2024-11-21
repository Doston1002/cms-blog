import { ICategoryAndTags } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface Props extends ICategoryAndTags {
	type: 'categories' | 'tags'
}

function CategoriesTagsCard(item: Props) {
	return (
		<Link
			className='bg-secondary p-4 md:p-8 rounded-md shadow-xl flex items-center gap-4 justify-center hover:bg-secondary/80 transition-colors dark:shadow-white/10'
			href={`/${item.type}/${item.slug}`}
		>
			{item.type === 'tags' ? <Tags /> : <Layers2 />}
			<h1 className='text-2xl font-creteRound'>{item.name}</h1>
		</Link>
	)
}

export default CategoriesTagsCard
