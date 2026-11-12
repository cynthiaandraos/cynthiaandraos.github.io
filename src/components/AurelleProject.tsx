
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";
const files = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (filename: string): string => Object.entries(files).find(([path]) => path.split("/").pop()?.toLowerCase() === filename.toLowerCase())?.[1] ?? "";
const w = (filename: string, title: string) => ({ src: asset(filename), title });

const categories: FeaturedCategory[] = [
  { id: 'identity', title: 'Logo & Brand Identity', description: 'Aurelle brand mark', works: [
    w('aurelle-logo-transparent.png', 'Aurelle Logo'),
  ] },
  { id: 'packaging', title: 'Packaging Design', description: 'Serum, cream, cleanser and shopping bag', works: [
    w('aurelle-radiance-serum.png', 'Radiance Serum'),
    w('aurelle-radiance-serum-box.png', 'Serum Box'),
    w('aurelle-radiance-serum-set.png', 'Serum Set'),
    w('aurelle-face-cream.png', 'Face Cream'),
    w('aurelle-face-cream-box.png', 'Face Cream Box'),
    w('aurelle-face-cream-set.png', 'Face Cream Set'),
    w('aurelle-gentle-cleanser.png', 'Gentle Cleanser'),
    w('aurelle-luxury-shopping-bag.png', 'Luxury Shopping Bag'),
  ] },
  { id: 'advertising', title: 'Advertising & Campaigns', description: 'Skincare advertising visuals', works: [
    w('aurelle-full-skincare-collection-ad.png', 'Full Skincare Collection'),
    w('aurelle-natural-radiance-beauty-ad.png', 'Natural Radiance Campaign'),
  ] },
];
export function AurelleProject() {
  return <FeaturedProject number={4} id="aurelle-project" name="Aurelle" description={'A skincare brand explored through identity, luxury packaging and beauty campaigns.'} cover={asset('aurelle-collection-cover.png')} subtitle={'Identity · Skincare Packaging · Advertising'} categories={categories} accentColor="#681523" accentMuted="#A45D69" />;
}

