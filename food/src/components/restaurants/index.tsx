import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { RestaurantItem } from "./horizontal";
import { RESTAURANTS } from "@/src/constants/restaurants";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const data = RESTAURANTS;
      setRestaurants(data);
    }

    getFoods();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
