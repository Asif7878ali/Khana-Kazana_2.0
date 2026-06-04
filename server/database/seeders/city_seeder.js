import { Cities } from "../../constants/cities.js";
import City from "../modals/city_modal.js";

const citySeeder = async () => {
  await City.deleteMany({});

  const cities = [];

  Object.entries(Cities).forEach(([stateCode, cityList]) => {
    cityList.forEach((city) => {
      cities.push({
        stateCode,
        name: city.name,
      });
    });
  });

  await City.insertMany(cities);

  console.log("Cities Seeded Successfully ✅");
};

export default citySeeder;