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
  { title: "Home", url: "#top" },
  { title: "About Us", url: "#about" },
  { title: "Testimonials", url: "#testimonials" },
  { title: "Vendors", url: "#vendors" },
];

export const vendorBenefits = [
  {
    title: "Expansive Customer Reach",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    desc: "Reach a broader audience and attract new customers through Coscut's diverse user base, providing vendors with an opportunity to tap into a previously untapped market.",
  },
  {
    title: "Elevated Brand Visibility",
    bg: "bg-sky-50",
    color: "text-sky-500",
    desc: "Feature your discounts on a platform dedicated to enhancing employee well-being, gaining increased visibility and fostering positive brand associations.",
  },
  {
    title: "Targeted Marketing Impact",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    desc: "Tailor your promotions to specific demographics or employee segments, ensuring that your offerings resonate with the right audience for more impactful marketing.",
  },
  {
    title: "Customer Retention Strategies",
    bg: "bg-sky-50",
    color: "text-sky-500",
    desc: "Leverage exclusive discounts to build customer loyalty and encourage repeat business, enhancing long-term relationships with a satisfied customer base.",
  },
  {
    title: "Data-Driven Insights",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    desc: "Access valuable data and insights into customer preferences and behaviors, empowering vendors to refine marketing strategies and improve product offerings based on real-time feedback.",
  },
  {
    title: "Competitive Advantage",
    bg: "bg-sky-50",
    color: "text-sky-500",
    desc: "Stand out in the market by aligning with a platform that prioritizes employee well-being, gaining a competitive edge and attracting socially conscious consumers.",
  },
  {
    title: "Cost-Effective Marketing",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    desc: "Utilize Coscut as a cost-effective marketing channel, reaching engaged customers without the need for extensive advertising budgets.",
  },
  {
    title: "Measurable Return on Investment (ROI)",
    bg: "bg-sky-50",
    color: "text-sky-500",
    desc: "Measure the effectiveness of promotions through the platform, allowing vendors to track the performance of discounts and calculate the return on investment.",
  },
  {
    title: "Positive Social Impact",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    desc: "Associate with a platform focused on employee well-being, contributing to a positive social impact and aligning your brand with socially responsible values.",
  },
  {
    title: "Collaboration Opportunities",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    desc: "Explore collaboration opportunities with other vendors within the Coscut network, fostering partnerships and cross-promotions for mutual benefit.",
  },
];
