
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";
const files = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (filename: string): string => Object.entries(files).find(([path]) => path.split("/").pop()?.toLowerCase() === filename.toLowerCase())?.[1] ?? "";
const w = (filename: string, title: string) => ({ src: asset(filename), title });

const categories: FeaturedCategory[] = [
  { id: 'identity', title: 'Logo & Brand Identity', description: 'Little Bloom brand logo', works: [
    w('little-bloom-logo-transparent-background.png', 'Little Bloom Logo'),
  ] },
  { id: 'packaging', title: 'Packaging Design', description: 'Gift boxes and shopping bags', works: [
    w('Little-Bloom-Gift-Bag.png', 'Gift Bag'),
    w('little-bloom-shopping-bag.png', 'Shopping Bag'),
    w('little-bloom-box-gift.png', 'Gift Box'),
    w('Little-Bloom-Gift-Box-Packaging.png', 'Gift Box Packaging'),
  ] },
  { id: 'print', title: 'Print & Invitation Design', description: 'Sophia first birthday invitation', works: [
    w('sophia-first-birthday-invitation.png', 'Sophia’s 1st Birthday Invitation'),
  ] },
];
export function LittleBloomProject() {
  return <FeaturedProject number={5} id="little-bloom-project" name="Little Bloom" description={'A playful gift brand expressed through identity, shopping bags, gift boxes and a birthday invitation.'} cover={asset('little-bloom-packaging-cover.png')} subtitle={'Identity · Gift Packaging · Invitation'} categories={categories} accentColor="#681523" accentMuted="#A45D69" />;
}

