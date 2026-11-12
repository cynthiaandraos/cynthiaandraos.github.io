
import { FeaturedProject } from "./FeaturedProject";
import type { FeaturedCategory } from "./FeaturedProject";

// Find the original images in src/assets.
// This supports JPG, JPEG, PNG, WEBP, and different filename casing.
const assetFiles = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

function asset(filename: string): string {
  const match = Object.entries(assetFiles).find(
    ([path]) =>
      path.split("/").pop()?.toLowerCase() ===
      filename.toLowerCase()
  );

  return match?.[1] ?? "";
}

const categories: FeaturedCategory[] = [
  {
    id: "packaging",
    title: "Packaging Design",
    description:
      "Branded packaging concepts for coffee, snacks, gifts and takeaway products.",
    works: [
      {
        src: asset("5beans-coffee-packaging.png"),
        title: "Coffee Packaging",
      },
      {
        src: asset("5beans-peanut-butter-jars.png"),
        title: "Peanut Butter Jars",
      },
      {
        src: asset("5beans-cup-design.png"),
        title: "Takeaway Cup Design",
      },
      {
        src: asset("5beans-blank-cups.png"),
        title: "Takeaway Cups",
      },
      {
        src: asset("5beans-snack-jars.png"),
        title: "Snack Jars",
      },
      {
        src: asset("5beans-protein-balls-photo.png"),
        title: "Protein Balls",
      },
      {
        src: asset("5beans-christmas-packaging.png"),
        title: "Christmas Packaging",
      },
    ],
  },
  {
    id: "labels",
    title: "Label Design",
    description:
      "Product labels and stickers designed for the 5 Beans collection.",
    works: [
      {
        src: asset("5beans-coffee-label.png"),
        title: "Coffee Label",
      },
      {
        src: asset("5beans-peanut-butter-label.png"),
        title: "Peanut Butter Label",
      },
      {
        src: asset("5beans-snack-stickers.png"),
        title: "Snack Stickers",
      },
      {
        src: asset("5beans-christmas-label.png"),
        title: "Christmas Label",
      },
    ],
  },
  {
    id: "promotional",
    title: "Promotional Design",
    description:
      "Flyers and promotional campaigns created for 5 Beans.",
    works: [
      {
        src: asset("5beans-branch-flyer.png"),
        title: "Branch Promotional Flyer",
      },
      {
        src: asset("5beans-delivery-flyer.png"),
        title: "Delivery Promotional Flyer",
      },
    ],
  },
  {
    id: "print",
    title: "Print & Stationery Design",
    description:
      "Printed materials for promotions, customer loyalty and special events.",
    works: [
      {
        src: asset("5beans-charity-ticket.png"),
        title: "Charity Event Ticket",
      },
      {
        src: asset("5beans-gift-voucher.png"),
        title: "$10 Gift Voucher",
      },
      {
        src: asset("5beans-loyalty-card.png"),
        title: "Coffee Loyalty Card",
      },
    ],
  },
];

export function FiveBeansProject() {
  return (
    <FeaturedProject
      number={2}
      id="five-beans-project"
      name="5 Beans"
      description="A coffee shop brand brought to life through creative packaging, product labels, promotional campaigns and printed materials."
      cover={asset("5beans-coffee-cover.png")}
      subtitle="Packaging · Labels · Promotional · Print"
      categories={categories}
      accentColor="#59402D"
      accentMuted="#94765F"
    />
  );
}
