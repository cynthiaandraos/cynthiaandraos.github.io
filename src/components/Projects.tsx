
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

import domina from "../assets/domina-transparent.png";
import goldenMark from "../assets/golden-mark-transparent.png";
import houseOfBeauty from "../assets/house-of-beauty-transparent.png";
import jouy from "../assets/jouy-transparent.png";
import myFitness from "../assets/my-fitness-transparent.png";
import myFitnessDoor from "../assets/my-fitness-door-branding.jpeg";
import manymoda from "../assets/manymoda-transparent.png";
import oMarket from "../assets/o-market-transparent.png";
import manymodaBag from "../assets/manymoda-shopping-bag.jpeg";
import jouyPackagingJars from "../assets/jouy-packaging-jars.jpeg";
import jouyProductLabel from "../assets/jouy-product-label.jpeg";

type ProjectImage = {
  src: string;
  title: string;
};

type Project = {
  title: string;
  category: string;
  cover: string;
  images: ProjectImage[];
};

const projects: Project[] = [
  {
    title: "Domina Real Estate",
    category: "Logo Design & Brand Identity",
    cover: domina,
    images: [
      {
        src: domina,
        title: "Domina Real Estate Logo",
      },
    ],
  },
  {
    title: "Golden Mark",
    category: "Logo Design & Brand Identity",
    cover: goldenMark,
    images: [
      {
        src: goldenMark,
        title: "Golden Mark Logo",
      },
    ],
  },
  {
    title: "House of Beauty",
    category: "Logo Design & Brand Identity",
    cover: houseOfBeauty,
    images: [
      {
        src: houseOfBeauty,
        title: "House of Beauty Logo",
      },
    ],
  },
  {
    title: "مونة إم جوي",
    category: "Logo Design & Brand Identity",
    cover: jouy,
    images: [
      {
        src: jouy,
        title: "مونة إم جوي Logo",
      },
      {
        src: jouyPackagingJars,
        title: "Jouy Product Packaging - Jars in Box",
      },
      {
        src: jouyProductLabel,
        title: "Jouy Product Label - Jar Close-Up",
      },
    ],
  },
  {
    title: "MY Fitness by Myriam",
    category: "Logo Design & Brand Identity",
    cover: myFitness,
    images: [
      {
        src: myFitness,
        title: "MY Fitness by Myriam Logo",
      },
      {
        src: myFitnessDoor,
        title: "MY Fitness Glass Door Branding",
      },
    ],
