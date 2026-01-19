
import "dotenv/config";
import { db } from "./index";
import { plants, careInstructions } from "./schema";
import { eq, and } from "drizzle-orm";

// Combined data structure for easier maintenance
const fullPlantData = [
  
  {
    id: 'tulsi',
    name: 'Holy Basil (Tulsi)',
    difficulty: 'Easy',
    benefits: ['Respiratory health', 'Immunity boost', 'Stress relief'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ocimum_tenuiflorum_Makandi.jpg',
    instructions: {
      planting: {
        title: 'Planting Tulsi',
        steps: [
          'Choose a well-draining pot with drainage holes',
          'Fill with organic potting mix enriched with cow manure',
          'Plant seeds 1/4 inch deep or transplant seedlings carefully',
          'Keep soil consistently moist but not waterlogged'
        ],
        tips: ['Best planted in spring', 'Tulsi worships the sun']
      },
      watering: {
        title: 'Watering Tulsi',
        steps: [
          'Water when top inch of soil feels dry',
          'Water thoroughly until it drains',
          'Reduce watering in winter months',
          'Use room temperature water'
        ],
        tips: ['Avoid wetting the leaves in evening', 'Morning watering is best']
      },
      sunlight: {
        title: 'Sunlight for Tulsi',
        steps: [
          'Provide 6-8 hours of direct sunlight daily',
          'Place in south-facing window or balcony',
          'Rotate pot weekly for even growth',
          'Protect from scorching afternoon sun in peak summer'
        ],
        tips: ['Tulsi loves bright, direct sunlight', 'Leggy growth indicates low light']
      },
      fertilizing: {
        title: 'Fertilizing Tulsi',
        steps: [
          'Feed with balanced organic fertilizer monthly',
          'Use diluted neem cake water every 2 weeks',
          'Reduce feeding in winter',
          'Avoid chemical fertilizers'
        ],
        tips: ['Organic fertilizers enhance medicinal properties', 'Tea compost works well']
      },
      harvesting: {
        title: 'Harvesting Tulsi',
        steps: [
          'Start harvesting when plant is 6 inches tall',
          'Pinch off flower buds (manjaris) to encourage bushiness',
          'Harvest leaves in morning after dew dries',
          'Cut stems above a node'
        ],
        tips: ['Regular harvesting promotes growth', 'Dry leaves for tea']
      }
    }
  }];

async function seed() {
  console.log("Seeding plants...");
  for (const plant of fullPlantData) {
    const { instructions, ...plantData } = plant;

    await db.insert(plants).values(plantData).onConflictDoUpdate({
      target: plants.id,
      set: plantData
    });
    console.log(`Upserted plant: ${plantData.name}`);

    if (instructions) {
      await db.delete(careInstructions).where(eq(careInstructions.plantId, plantData.id));

      for (const [stage, data] of Object.entries(instructions)) {
        await db.insert(careInstructions).values({
          plantId: plantData.id,
          stage,
          title: data.title,
          steps: data.steps,
          tips: data.tips
        });
        console.log(`Inserted instructions for ${plantData.name} - ${stage}`);
      }
    }
  }
  console.log("Seeding complete!");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
