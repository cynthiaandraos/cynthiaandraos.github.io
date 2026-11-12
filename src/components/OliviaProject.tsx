
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";
const asset = (name: string) => `${import.meta.env.BASE_URL}olivia/${name}`;
const w = (filename: string, title: string) => ({ src: asset(filename), title });
const categories: FeaturedCategory[] = [
{ id: 'identity', title: 'Logo & Brand Identity', description: 'The logo and core visual identity.', works: [
w('oliv-ia-logo.png', 'Oliv Ia Logo'),
w('oliv-ia-brand-presentation.png', 'Oliv Ia Brand Presentation'),
] },
{ id: 'packaging', title: 'Packaging Design', description: 'Bottles, shopping bags and gift packaging.', works: [
w('oliv-ia-product-mockup.png', 'Oliv Ia Product Mockup'),
w('olivia-large-bottle.png', 'Olivia Large Bottle'),
w('oliv-ia-shopping-bag.png', 'Oliv Ia Shopping Bag'),
w('oliv-ia-gift-box.png', 'Oliv Ia Gift Box'),
] },
{ id: 'labels', title: 'Label Design', description: 'Product labels and finishing details.', works: [
w('olivia-front-back-labels.png', 'Olivia Front Back Labels'),
w('olivia-label-collection.png', 'Olivia Label Collection'),
w('olivia-round-label.png', 'Olivia Round Label'),
w('olivia-hang-tag.png', 'Olivia Hang Tag'),
] },
{ id: 'advertising', title: 'Advertising & Campaigns', description: 'Outdoor, print and product campaigns.', works: [
w('oliv-ia-billboard.png', 'Oliv Ia Billboard'),
w('olivia-led-billboard.png', 'Olivia Led Billboard'),
w('oliv-ia-roadside-ad.png', 'Oliv Ia Roadside Ad'),
w('oliv-ia-magazine-ad.png', 'Oliv Ia Magazine Ad'),
w('oliv-ia-magazine-harvest.png', 'Oliv Ia Magazine Harvest'),
w('olivia-pouring-ad.png', 'Olivia Pouring Ad'),
] },
{ id: 'social', title: 'Social Media Design', description: 'Instagram and Facebook campaign artwork.', works: [
w('olivia-instagram-mockup.png', 'Olivia Instagram Mockup'),
w('oliv-ia-facebook-ad.png', 'Oliv Ia Facebook Ad'),
] },
{ id: 'signage', title: 'Signage & Storefront', description: 'Bringing the brand into physical spaces.', works: [
w('oliv-ia-signage.png', 'Oliv Ia Signage'),
w('oliv-ia-storefront.png', 'Oliv Ia Storefront'),
] },
];
export function OliviaProject() {
 return <FeaturedProject number={1} id="olivia-project" name="OLIV-IA" description="An olive oil brand brought to life through identity, packaging, campaigns and visual applications." cover={asset("oliv-ia-cover.png")} subtitle="Identity · Packaging · Advertising · Digital" categories={categories} accentColor="#35452B" accentMuted="#7D8650" />;
}
