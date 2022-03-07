import React, { useState, useContext } from "react";
import { SafeAreaView, RefreshControl, Keyboard } from "react-native";
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
  EmptyContainer,
  EmptyName,
} from "./Search.styles";

const imageCover = require("../../../assets/images/popartecover.jpg");

export default function HeroScreen({ navigation }: any) {
  const { heros, reloadHeros, loading } = useContext(HeroContext);

  const [search, setSearch] = useState<string>("");

  const getURI = (path: string, extension: string) => {
    const uri = `${path}.${extension}`;
    return uri.replace("http", "https");
  };

  const cardHeroItem = ({ item: hero, index }: any) => {
    return heros.length % 2 === 1 && index === heros.length - 1 ? (
      <ButtonHeroOne
        onPress={() => navigation.navigate("HeroDetail", { hero })}
      >
        <ImageHeroCoverOne
          source={{
            uri: getURI(hero?.thumbnail?.path, hero?.thumbnail?.extension),
          }}
        />
        <HeroTextContent>
          <HeroName>{hero?.name}</HeroName>
        </HeroTextContent>
      </ButtonHeroOne>
    ) : (
      <ButtonHero onPress={() => navigation.navigate("HeroDetail", { hero })}>
        <ImageHeroCover
          source={{
            uri: getURI(hero?.thumbnail?.path, hero?.thumbnail?.extension),
          }}
        />
        <HeroTextContent>
          <HeroName>{hero?.name}</HeroName>
        </HeroTextContent>
      </ButtonHero>
    );
  };

  const listEmpty = () => {
    return (
      <EmptyContainer>
        <EmptyName>Nenhum item</EmptyName>
        <EmptyName>encontrado</EmptyName>
      </EmptyContainer>
    );
  };

  return (
    <SafeAreaView>
      <SearchContainer source={imageCover}>
        <SearchInputContainer>
          <SearchInput
            placeholderTextColor="#fff"
            onChangeText={(e: string) => {
              setSearch(e);
            }}
            onEndEditing={() => {
              reloadHeros(search, true);
            }}
            value={search}
            placeholder="Search Here"
          />
          <ButtonHeroSearch
            onPress={() => {
              reloadHeros(search, true);
              Keyboard.dismiss();
            }}
          >
            <Ionicons name="search" size={16} color="black" />
          </ButtonHeroSearch>
        </SearchInputContainer>
        <SearchFlatList
          style={styles.shadow}
          data={heros}
          numColumns={2}
          onEndReached={() => reloadHeros(search)}
          onEndReachedThreshold={1}
          keyExtractor={(item: any, index: number) => `${item.id}-${index}`}
          showsVerticalScrollIndicator={true}
          renderItem={cardHeroItem}
          refreshing={loading}
          onRefresh={() => reloadHeros(search, true)}
          ListEmptyComponent={!loading ? listEmpty : null}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              colors={["red"]}
              onRefresh={() => reloadHeros(search, true)}
            />
          }
        />
      </SearchContainer>
    </SafeAreaView>
  );
}
