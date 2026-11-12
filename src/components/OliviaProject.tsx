
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
        "Oliv-ia-logo.png",
        "Oliv-ia Logo"
      ),
      w(
        "Oliv-ia-brand-presentation.png",
        "Oliv-ia Brand Presentation"
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
        "Oliv-ia-product-mockup.png",
        "Oliv-ia Product Mockup"
      ),
      w(
        "olivia-large-bottle.png",
        "Oliv-ia Large Bottle"
      ),
      w(
        "Oliv-ia-shopping-bag.png",
        "Oliv-ia Shopping Bag"
      ),
      w(
        "Oliv-ia-gift-box.png",
        "Oliv-ia Gift Box"
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
        "Oliv-ia Front & Back Labels"
      ),
      w(
        "olivia-label-collection.png",
        "Oliv-ia Label Collection"
      ),
      w(
        "olivia-round-label.png",
        "Oliv-ia Round Label"
      ),
      w(
        "olivia-hang-tag.png",
        "Oliv-ia Hang Tag"
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
        "Oliv-ia-billboard.png",
        "Oliv-ia Billboard"
      ),
      w(
        "olivia-led-billboard.png",
        "Oliv-ia LED Billboard"
      ),
      w(
        "Oliv-ia-roadside-ad.png",
        "Oliv-ia Roadside Ad"
      ),
      w(
        "Oliv-ia-magazine-ad.png",
        "Oliv-ia Magazine Ad"
      ),
      w(
        "Oliv-ia-magazine-harvest.png",
        "Oliv-ia Magazine Harvest"
      ),
      w(
        "olivia-pouring-ad.png",
        "Oliv-ia Pouring Ad"
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
        "Oliv-ia Instagram Mockup"
      ),
      w(
        "Oliv-ia-facebook-ad.png",
        "Oliv-ia Facebook Ad"
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
        "Oliv-ia-signage.png",
        "Oliv-ia Signage"
      ),
      w(
        "Oliv-ia-storefront.png",
        "Oliv-ia Storefront"
      ),
    ],
  },
];

export function OliviaProject() {
  return (
    <FeaturedProject
      number={1}
      id="olivia-project"
      name="Oliv-ia"
      description="An olive oil brand brought to life through identity, packaging, campaigns and visual applications."
      cover={asset("Oliv-ia-cover.png")}
      subtitle="Identity · Packaging · Advertising · Digital"
      categories={categories}
      accentColor="#35452B"
      accentMuted="#7D8650"
    />
  );
}
