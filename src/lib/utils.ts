import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stats = [
  {
    val: 23,
    title: "Enhanced Focus and Creativity",
  },
  {
    val: 65,
    title: "Enhanced Job Satisfaction",
  },
  {
    val: 41,
    title: "Reduced Absenteeism",
  },
  {
    val: 25,
    title: "Improved Productivity",
  },
];

export const features = [
  {
    title: "Boost Employee Morale",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-300",
    desc: "Give your team more than just a paycheck. Cosset your employees with exclusive benefits that show you care about their well-being.",
  },
  {
    title: "Attract & Retain Top Talent",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-300",
    desc: "Stand out in the competitive job market. Our platform helps you attract top-notch talent and keep your best employees engaged for the long term.",
  },
  {
    title: "Customized Packages",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-300",
    desc: "Tailor your employee benefits. Our platform offers customizable packages that align with the unique needs and preferences of your workforce.",
  },
];

export const clients = [
  "google.svg",
  "netflix.svg",
  "airbnb.svg",
  "microsoft.svg",
  "ge.svg",
  "google-cloud.svg",
];

export const links = [
  { title: "Home", url: "#" },
  { title: "About Us", url: "#" },
  { title: "How it works", url: "#" },
  { title: "Vendors", url: "#" },
];
