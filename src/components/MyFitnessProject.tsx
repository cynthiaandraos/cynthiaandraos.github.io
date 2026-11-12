
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";
const files = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (filename: string): string => Object.entries(files).find(([path]) => path.split("/").pop()?.toLowerCase() === filename.toLowerCase())?.[1] ?? "";
const w = (filename: string, title: string) => ({ src: asset(filename), title });

const categories: FeaturedCategory[] = [
  { id: 'identity', title: 'Logo & Brand Identity', description: 'MY Fitness by Myriam logo', works: [
    w('my-fitness-transparent.png', 'MY Fitness Logo'),
  ] },
  { id: 'signage', title: 'Signage & Brand Applications', description: 'Glass door branding', works: [
    w('my-fitness-door-branding.jpeg', 'Glass Door Branding'),
  ] },
  { id: 'promotional', title: 'Promotional Design', description: 'Personal training flyer', works: [
    w('my-fitness-training-flyer.jpeg', 'Personal Training Flyer'),
  ] },
  { id: 'print', title: 'Print & Stationery Design', description: 'Fitness session gift card', works: [
    w('my-fitness-gift-card.jpeg', 'Fitness Gift Card'),
  ] },
];
export function MyFitnessProject() {
  return <FeaturedProject number={7} id="my-fitness-project" name="MY Fitness by Myriam" description={'A fitness brand showcased through identity, door branding, promotional design and a gift card.'} cover={asset('my-fitness-flyer-cover.png')} subtitle={'Logo · Signage · Promotional · Print'} categories={categories} accentColor="#681523" accentMuted="#A45D69" />;
}
