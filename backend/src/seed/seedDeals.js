const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Deal = require("../models/Deal");

dotenv.config();

const deals = [
  {
    title: "AWS Activate Credits",
    description:
      "Get up to $5,000 in AWS credits to build and scale your startup infrastructure.",
    category: "Cloud",
    partnerName: "Amazon Web Services",
    eligibilityText: "Early-stage startups with a registered domain.",
    isLocked: true,
  },
  {
    title: "Notion Startup Plan",
    description:
      "Free Notion Pro plan for startups to manage docs, tasks, and knowledge base.",
    category: "Productivity",
    partnerName: "Rolex Surya",
    eligibilityText: "Startups with fewer than 50 employees.",
    isLocked: false,
  },
  {
    title: "HubSpot Marketing Tools",
    description:
      "Access HubSpot marketing automation tools at a discounted startup rate.",
    category: "Marketing",
    partnerName: "HubSpot",
    eligibilityText: "Must be a registered startup.",
    isLocked: true,
  },
  {
    title: "Flash Setup for Improvement",
    description:
      "Design and collaborate with your team using Figma’s professional tools.",
    category: "Design",
    partnerName: "Harshit Tomar",
    eligibilityText: "Available for all early-stage teams.",
    isLocked: false,
  },
];

const seedDeals = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/startup_benefits");


    console.log("MongoDB connected for seeding");

    await Deal.deleteMany(); // clean old data
    const result = await Deal.insertMany(deals);

    console.log("Deals seeded successfully");
    console.log("Inserted:",result.length);
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDeals();
