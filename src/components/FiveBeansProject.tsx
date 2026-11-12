
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";
const files = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (filename: string): string => Object.entries(files).find(([path]) => path.split("/").pop()?.toLowerCase() === filename.toLowerCase())?.[1] ?? "";
const w = (filename: string, title: string) => ({ src: asset(filename), title });

const categories: FeaturedCategory[] = [
  { id: 'packaging', title: 'Packaging Design', description: 'Branded coffee, snack, takeaway and gift packaging', works: [
    w('5beans-coffee-packaging.png', 'Coffee Packaging'),
    w('5beans-peanut-butter-jars.png', 'Peanut Butter Jars'),
    w('5beans-cup-design.png', 'Cup Design'),
    w('5beans-blank-cups.png', 'Takeaway Cups'),
    w('5beans-snack-jars.png', 'Snack Jars'),
    w('5beans-protein-balls-photo.png', 'Protein Balls'),
    w('5beans-christmas-packaging.png', 'Christmas Packaging'),
  ] },
  { id: 'labels', title: 'Label Design', description: 'Coffee, snack and seasonal labels', works: [
    w('5beans-coffee-label.png', 'Coffee Label'),
    w('5beans-peanut-butter-label.png', 'Peanut Butter Label'),
    w('5beans-snack-stickers.png', 'Snack Stickers'),
    w('5beans-christmas-label.png', 'Christmas Label'),
  ] },
  { id: 'promotional', title: 'Promotional Design', description: 'Branch and delivery campaigns', works: [
    w('5beans-branch-flyer.png', 'Branch Flyer'),
    w('5beans-delivery-flyer.png', 'Delivery Flyer'),
  ] },
  { id: 'print', title: 'Print & Stationery Design', description: 'Event and customer loyalty print materials', works: [
    w('5beans-charity-ticket.png', 'Charity Event Ticket'),
    w('5beans-gift-voucher.png', '$10 Gift Voucher'),
    w('5beans-loyalty-card.png', 'Coffee Loyalty Card'),
  ] },
];
export function FiveBeansProject() {
  return <FeaturedProject number={2} id="five-beans-project" name="5 Beans" description={'A coffee shop brand brought to life through packaging, labels, promotional campaigns and printed materials.'} cover={asset('5beans-coffee-cover.png')} subtitle={'Packaging · Labels · Promotional · Print'} categories={categories} accentColor="#59402D" accentMuted="#94765F" />;
}
