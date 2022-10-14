import { createClient } from "next-sanity";

const config = {
  dataset: process.env.DATASET,
  projectId: process.env.PROJECT_ID,
  apiVersion: '2022-10-13',
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);



