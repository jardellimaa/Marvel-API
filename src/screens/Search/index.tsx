import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native";
import HeroContext from "../../context/HeroContext";
import { Ionicons } from "@expo/vector-icons";
import {
  ImageHeroCover,
  ButtonHero,
  HeroName,
  HeroTextContent,
  ImageHeroCoverOne,
  ButtonHeroOne,
  styles,
  SearchContainer,
  ButtonHeroSearch,
  SearchInput,
  SearchInputContainer,
  SearchFlatList,
} from "./Search.styles";
import { IHero } from "../../interfaces/interfaces";

const imageCover = require("../../../assets/images/popartecover.jpg");

export default function HeroScreen({ navigation }: any) {
  const { heros, reloadHeros } = useContext(HeroContext);

  const [search, setSearch] = useState<string>("");

  const getURI = (path: string, extension: string) => {
    const uri = `${path}.${extension}`;
    return uri.replace("http", "https");
  };

  function cardHeroItem({ item: hero }: any) {
    if (heros.length === 1) {
      return (
        <ButtonHeroOne
          key={hero?.id}
          onPress={() => navigation.navigate("HeroDetail", { hero })}
        >
          <ImageHeroCoverOne
            source={{
              uri: getURI(hero.thumbnail.path, hero.thumbnail.extension),
            }}
          />
          <HeroTextContent>
            <HeroName>Hero: {hero?.name}</HeroName>
          </HeroTextContent>
        </ButtonHeroOne>
      );
    } else {
      return (
        <ButtonHero
          key={hero?.id}
          onPress={() => navigation.navigate("HeroDetail", { hero })}
        >
          <ImageHeroCover
            source={{
              uri: getURI(hero.thumbnail.path, hero.thumbnail.extension),
            }}
          />
          <HeroTextContent>
            <HeroName>Hero: {hero?.name}</HeroName>
          </HeroTextContent>
        </ButtonHero>
      );
    }
  }

  return (
    <SafeAreaView>
      <SearchContainer source={imageCover}>
        <SearchInputContainer>
          <SearchInput
            placeholderTextColor="#fff"
            onChangeText={(e: string) => {
              setSearch(e.toLowerCase());
            }}
            onEndEditing={() => {
              reloadHeros(search);
            }}
            value={search}
            placeholder="Search Here"
          />
          <ButtonHeroSearch
            onPress={() => {
              reloadHeros(search);
            }}
          >
            <Ionicons name="search" size={16} color="black" />
          </ButtonHeroSearch>
        </SearchInputContainer>
        <SearchFlatList
          style={styles.shadow}
          data={heros}
          numColumns={2}
          keyExtractor={(hero: IHero, index: number) =>
            String(hero.id).concat(String(index))
          }
          showsVerticalScrollIndicator={false}
          renderItem={cardHeroItem}
        />
      </SearchContainer>
    </SafeAreaView>
  );
}
