import Seed from '@/entities/Seed.ts';
import { UISeedPayload } from "@/interfaces";

export default [
	new Seed({ label: 'Salade', color: 'green' } as UISeedPayload),
	new Seed({ label: 'Aubergine', color: 'purple'} as UISeedPayload)
];