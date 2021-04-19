import {Seed} from '@/entities/Seed.ts';
import {SeedCategory} from "@/entities/SeedCategory";

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