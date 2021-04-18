import Seed from '@/entities/seed/Seed.ts';
import SeedCategory from "@/entities/seed/SeedCategory";

const categoryBranch = new SeedCategory({ label: 'Branch' });
const categoryFruit = new SeedCategory({ label: 'Fruit' });

export default [
	new Seed({
		label: 'Salade',
		color: 'green',
		categories: [categoryBranch],
	}),
	new Seed({
		label: 'Aubergine',
		color: 'purple',
		categories: [categoryFruit]
	})
];