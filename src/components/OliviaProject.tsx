
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
        "oliv-ia Logo"
      ),
      w(
        "oliv-ia-brand-presentation.png",
        "oliv-ia Brand Presentation"
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
        "oliv-ia Product Mockup"
      ),
      w(
        "olivia-large-bottle.png",
        "oliv-ia Large Bottle"
      ),
      w(
        "oliv-ia-shopping-bag.png",
        "oliv-ia Shopping Bag"
      ),
      w(
        "oliv-ia-gift-box.png",
        "oliv-ia Gift Box"
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
        "oliv-ia Front & Back Labels"
      ),
      w(
        "olivia-label-collection.png",
        "oliv-ia Label Collection"
      ),
      w(
        "olivia-round-label.png",
        "oliv-ia Round Label"
      ),
      w(
        "olivia-hang-tag.png",
        "oliv-ia Hang Tag"
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
        "oliv-ia Billboard"
      ),
      w(
        "olivia-led-billboard.png",
        "oliv-ia LED Billboard"
      ),
      w(
        "oliv-ia-roadside-ad.png",
        "oliv-ia Roadside Ad"
      ),
      w(
        "oliv-ia-magazine-ad.png",
        "oliv-ia Magazine Ad"
      ),
      w(
        "oliv-ia-magazine-harvest.png",
        "oliv-ia Magazine Harvest"
      ),
      w(
        "olivia-pouring-ad.png",
        "oliv-ia Pouring Ad"
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
        "oliv-ia Instagram Mockup"
      ),
      w(
        "oliv-ia-facebook-ad.png",
        "oliv-ia Facebook Ad"
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
        "oliv-ia Signage"
      ),
      w(
        "oliv-ia-storefront.png",
        "oliv-ia Storefront"
      ),
    ],
  },
];

export function OliviaProject() {
  return (
    <FeaturedProject
      number={1}
      id="olivia-project"
      name="oliv-ia"
      description="An olive oil brand brought to life through identity, packaging, campaigns and visual applications."
      cover={asset("oliv-ia-cover.png")}
      subtitle="Identity · Packaging · Advertising · Digital"
      categories={categories}
      accentColor="#35452B"
      accentMuted="#7D8650"
    />
  );
}
