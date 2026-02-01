const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Deal = require("../models/Deal");

dotenv.config();

const deals = [
  {
    title: "Stranger Things",
    description:
      "Millie Bobby Brown build and scale your startup infrastructure.",
    category: "Web Series",
    partnerName: "Steve Harringtone",
    eligibilityText: "Early-stage startups with a registered domain.",
    isLocked: true,
  },
  {
    title: "Momos Startup Plan",
    description:
      "Free Momos Pro plan for startups to manage costomers.",
    category: "Foody",
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
  {
    title: "Animal Park",
    description:
      "Ranvir Kapur is the main character of movie who shadow by Lord Bobby",
    category: "Bollywood Movie",
    partnerName: "Steve Harringtone",
    eligibilityText: "Early-stage startups with a registered domain.",
    isLocked: false,
  },
  {
  title: "Startup Legal Essentials",
  description:
    "Access legal templates and consultation for incorporation and compliance.",
  category: "Legal",
  partnerName: "LegalEase",
  eligibilityText: "Newly registered startups only.",
  isLocked: false,
  },
  {
  title: "AI Resume Booster",
  description:
    "Optimize resumes using AI-powered suggestions and smart formatting.",
  category: "HR Tech",
  partnerName: "ResumeAI",
  eligibilityText: "Open to job seekers and early-stage startups.",
  isLocked: false,
}
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
