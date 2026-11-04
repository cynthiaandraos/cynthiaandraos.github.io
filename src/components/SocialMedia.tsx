
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

// MACHEWE FIRAS - ORIGINAL CAMPAIGN

import firasCover from "../assets/firas-cover.jpg";
import firasGrill from "../assets/firas-grill-post.png";
import firasSandwich from "../assets/firas-sandwich-post.png";
import firasChicken from "../assets/firas-chicken-post.png";
import firasChristmas42 from "../assets/firas-christmas-42.png";
import firasChristmas36 from "../assets/firas-christmas-36.png";

// MACHEWE FIRAS - NEW MENU LAUNCH

import firasNewMenuCover from "../assets/firas-new-menu-cover.png";
import chickenRollSub from "../assets/firas-chicken-roll-sub.jpeg";
import kababDjej from "../assets/firas-kabab-djej.jpeg";
import hawaiiBurger from "../assets/firas-hawaii-burger.jpeg";
import steakSub from "../assets/firas-steak-sub.jpeg";

// ST. ABDA - JAJ EVENT CAMPAIGN

import stAbdaCover from "../assets/st-abda-event-cover.png";
import stAbdaSchedule from "../assets/st-abda-event-schedule.jpeg";
import stAbdaMyrna from "../assets/st-abda-myrna-concert.jpeg";
import stAbdaSpiritual from "../assets/st-abda-spiritual-day.jpeg";
import stAbdaUpdate from "../assets/st-abda-event-update.jpeg";
import stAbdaWalid from "../assets/st-abda-walid-kanaan.jpeg";
import stAbdaFares from "../assets/st-abda-fares-iskandar.jpeg";
import stAbdaKermesse from "../assets/st-abda-kermesse.jpeg";

type GalleryImage = {
  src: string;
  title: string;
};

type SocialProject = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  cover: string;
  coverZoom?: number;
  description: string;
  images: GalleryImage[];
};

const projects: SocialProject[] = [
  {
    id: 1,
    title: "Machewe Firas",
    subtitle: "Social Media Campaign",
    category: "Restaurant & Food",
    cover: firasCover,
    coverZoom: 1.12,
    description:
      "A collection of promotional social media designs showcasing grilled specialties, restaurant offerings, and seasonal campaigns.",
    images: [
      { src: firasGrill, title: "Grill Promotion" },
      { src: firasSandwich, title: "Sandwich Promotion" },
      { src: firasChicken, title: "Chicken Promotion" },
      {
        src: firasChristmas42,
        title: "Christmas Campaign - 42",
      },
      {
        src: firasChristmas36,
        title: "Christmas Campaign - 36",
      },
    ],
  },
  {
    id: 2,
    title: "Machewe Firas",
    subtitle: "New Menu Launch Campaign",
    category: "Product Launch & Promotion",
    cover: firasNewMenuCover,
    coverZoom: 1.12,
    description:
      "A coordinated series of social media promotions introducing four new menu items, with bold typography, appetizing food imagery, and consistent brand styling.",
    images: [
      {
        src: chickenRollSub,
        title: "Chicken Roll SUB",
      },
      {
        src: kababDjej,
