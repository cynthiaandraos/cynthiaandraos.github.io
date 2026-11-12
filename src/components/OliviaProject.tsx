
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";

const asset = (name: string): string =>
  `${import.meta.env.BASE_URL}olivia/${name}`;

const w = (filename: string, title: string) => ({
  src: asset(filename),
  title,
});

const categories: FeaturedCategory[] = [
  {
    id: "identity",
    title: "Logo & Brand Identity",
    description: "The logo and core visual identity.",
    works: [
      w(
        "oliv-ia-logo.png",
        "OLIV-IA Logo"
      ),
      w(
        "oliv-ia-brand-presentation.png",
        "OLIV-IA Brand Presentation"
      ),
    ],
  },
  {
    id: "packaging",
    title: "Packaging Design",
    description:
      "Bottles, shopping bags and gift packaging.",
    works: [
      w(
        "oliv-ia-product-mockup.png",
        "OLIV-IA Product Mockup"
      ),
      w(
        "olivia-large-bottle.png",
        "OLIV-IA Large Bottle"
      ),
      w(
        "oliv-ia-shopping-bag.png",
        "OLIV-IA Shopping Bag"
      ),
      w(
        "oliv-ia-gift-box.png",
        "OLIV-IA Gift Box"
      ),
    ],
  },
  {
    id: "labels",
    title: "Label Design",
    description:
      "Product labels and finishing details.",
    works: [
      w(
        "olivia-front-back-labels.png",
        "OLIV-IA Front & Back Labels"
      ),
      w(
        "olivia-label-collection.png",
        "OLIV-IA Label Collection"
      ),
      w(
        "olivia-round-label.png",
        "OLIV-IA Round Label"
      ),
      w(
        "olivia-hang-tag.png",
        "OLIV-IA Hang Tag"
      ),
    ],
  },
  {
    id: "advertising",
    title: "Advertising & Campaigns",
    description:
      "Outdoor, print and product campaigns.",
    works: [
      w(
        "oliv-ia-billboard.png",
        "OLIV-IA Billboard"
      ),
      w(
        "olivia-led-billboard.png",
        "OLIV-IA LED Billboard"
      ),
      w(
        "oliv-ia-roadside-ad.png",
        "OLIV-IA Roadside Ad"
      ),
      w(
        "oliv-ia-magazine-ad.png",
        "OLIV-IA Magazine Ad"
      ),
      w(
        "oliv-ia-magazine-harvest.png",
        "OLIV-IA Magazine Harvest"
      ),
      w(
        "olivia-pouring-ad.png",
        "OLIV-IA Pouring Ad"
      ),
    ],
  },
  {
    id: "social",
    title: "Social Media Design",
    description:
      "Instagram and Facebook campaign artwork.",
    works: [
      w(
        "olivia-instagram-mockup.png",
        "OLIV-IA Instagram Mockup"
      ),
      w(
        "oliv-ia-facebook-ad.png",
        "OLIV-IA Facebook Ad"
      ),
    ],
  },
  {
    id: "signage",
    title: "Signage & Storefront",
    description:
      "Bringing the brand into physical spaces.",
    works: [
      w(
        "oliv-ia-signage.png",
        "OLIV-IA Signage"
      ),
      w(
        "oliv-ia-storefront.png",
        "OLIV-IA Storefront"
      ),
    ],
  },
];

export function OliviaProject() {
  return (
    <FeaturedProject
      number={1}
      id="olivia-project"
      name="OLIV-IA"
      description="An olive oil brand brought to life through identity, packaging, campaigns and visual applications."
      cover={asset("oliv-ia-cover.png")}
      subtitle="Identity · Packaging · Advertising · Digital"
      categories={categories}
      accentColor="#35452B"
      accentMuted="#7D8650"
    />
  );
}
