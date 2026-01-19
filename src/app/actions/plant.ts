'use server';

import { db } from "@/db";
import { plants, careInstructions } from "@/db/schema";
import { eq } from "drizzle-orm";

import { sql, ilike, or } from "drizzle-orm";

export async function getPlants(query?: string) {
  try {
    if (query) {
      const searchPattern = `%${query}%`;
      const allPlants = await db
        .select()
        .from(plants)
        .where(
          or(
            ilike(plants.name, searchPattern),
            // Search within benefits array by converting to string
            sql`array_to_string(${plants.benefits}, ' ') ILIKE ${searchPattern}`
          )
        );
      return allPlants;
    } else {
      // Return 10 random plants if no query
      const randomPlants = await db
        .select()
        .from(plants)
        .orderBy(sql`RANDOM()`)
        .limit(9);
      return randomPlants;
    }
  } catch (error) {
    console.error("Error fetching plants:", error);
    return [];
  }
}

export async function getCareInstruction(plantId: string, stage: string) {
  try {
    const instruction = await db.query.careInstructions.findFirst({
      where: (careInstructions, { and, eq }) => and(
        eq(careInstructions.plantId, plantId),
        eq(careInstructions.stage, stage)
      ),
    });
    return instruction;
  } catch (error) {
    console.error("Error fetching care instruction:", error);
    return null;
  }
}
