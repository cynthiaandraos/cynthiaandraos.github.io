
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";

const files = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

const asset = (filename: string): string =>
  Object.entries(files).find(
    ([path]) =>
      path.split("/").pop()?.toLowerCase() ===
      filename.toLowerCase()
  )?.[1] ?? "";

const w = (filename: string, title: string) => ({
  src: asset(filename),
  title,
});

const categories: FeaturedCategory[] = [
  {
    id: "identity",
    title: "Logo & Brand Identity",
    description:
      "House of Beauty hair salon logo and visual identity.",
    works: [
      w(
        "house-of-beauty-transparent.png",
        "House of Beauty Logo"
      ),
    ],
  },
  {
    id: "storefront",
    title: "Storefront Branding",
    description:
      "House of Beauty hair salon storefront branding.",
    works: [
      w(
        "house-of-beauty-storefront.png",
        "House of Beauty Storefront"
      ),
    ],
  },
];

export function HouseOfBeautyProject() {
  return (
    <FeaturedProject
      number={6}
      id="house-of-beauty-project"
      name="House of Beauty"
      description="A refined hair salon brand identity brought to life through elegant logo design and storefront branding."
      cover={asset("house-of-beauty-cover.png")}
      subtitle="Hair Salon · Logo Design · Storefront Branding"
      categories={categories}
      accentColor="#681523"
      accentMuted="#A45D69"
    />
  );
}
