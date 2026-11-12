
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";
const files = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (filename: string): string => Object.entries(files).find(([path]) => path.split("/").pop()?.toLowerCase() === filename.toLowerCase())?.[1] ?? "";
const w = (filename: string, title: string) => ({ src: asset(filename), title });

const categories: FeaturedCategory[] = [
  { id: 'identity', title: 'Logo & Brand Identity', description: 'Golden Mark real estate logo', works: [
    w('golden-mark-transparent.png', 'Golden Mark Logo'),
  ] },
  { id: 'vehicles', title: 'Vehicle Branding', description: 'Front and rear vehicle applications', works: [
    w('golden-mark-car-front.png', 'Vehicle Front'),
    w('golden-mark-car-rear.png', 'Vehicle Rear'),
  ] },
  { id: 'signage', title: 'Signage & Office Branding', description: 'Physical branding for the office', works: [
    w('golden-mark-glass-storefront.png', 'Glass Storefront'),
    w('golden-mark-office-facade.png', 'Office Facade'),
  ] },
];
export function GoldenMarkProject() {
  return <FeaturedProject number={3} id="golden-mark-project" name="Golden Mark" description={'A real estate identity applied across vehicle branding, office signage and storefront design.'} cover={asset('golden-mark-glass-storefront.png')} subtitle={'Logo · Vehicle Branding · Signage'} categories={categories} accentColor="#681523" accentMuted="#A45D69" />;
}

