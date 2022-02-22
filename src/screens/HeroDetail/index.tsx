import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { api, AUTHENTICATION } from "../../services/api";
import {
  ComicsCards,
  CardInfo,
  HeroInfo,
  ComicsInfos,
  ComicCover,
  ComicsInfoText,
  ComicConteiner,
  styles,
} from "./HeroDatail.styles";
import { IHeroComic, IPrices } from "../../interfaces/interfaces";

export default function HeroDetail({ route }: any) {
  const heroChosen = route.params.hero;
  const [heroComics, setHeroComics] = useState<IHeroComic[]>([]);

  useEffect(() => {
    reloadComics(heroChosen.id);
  }, [heroChosen]);

  const reloadComics = (id: number) => {
    api
      .get(`/v1/public/characters/${id}/comics`, { params: AUTHENTICATION })
      .then((response: any) => {
        setHeroComics([...response.data.data.results]);
      })
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const getURI = (path: string, extension: string) => {
    const uri = `${path}.${extension}`;
    return uri.replace("http", "https");
  };

  const getPriceName = (type: string) => {
    if (type === "printPrice") {
      return "Print Price";
    } else {
      return "Digital Purchase Price";
    }
  };

  //console.log(heroChosen);

  function HeroComics({ item: comic }: any) {
    return (
      <ComicsCards>
        <ComicCover
          source={{
            uri: getURI(comic.thumbnail.path, comic.thumbnail.extension),
          }}
        />
        <ComicsInfos>
          <ComicsInfoText>Title: {comic?.title}</ComicsInfoText>
          <ComicsInfoText>Number: {comic?.issueNumber}</ComicsInfoText>
          {comic?.prices?.map((priceItem: IPrices) => (
            <ComicsInfoText>
              {getPriceName(priceItem?.type)}: ${priceItem?.price}
            </ComicsInfoText>
          ))}
        </ComicsInfos>
      </ComicsCards>
    );
  }

  return (
    <>
      <SafeAreaView>
        <ComicConteiner
          source={{
            uri: getURI(
              heroChosen.thumbnail.path,
              heroChosen.thumbnail.extension
            ),
          }}
        >
          <CardInfo style={styles.shadow}>
            <HeroInfo>Hero: {heroChosen?.name}</HeroInfo>
          </CardInfo>
          <FlatList
            data={heroComics}
            style={styles.shadow}
            numColumns={1}
            keyExtractor={(heroComic: IHeroComic, index: number) =>
              String(heroComic.id).concat(String(index))
            }
            showsVerticalScrollIndicator={false}
            renderItem={HeroComics}
          />
        </ComicConteiner>
      </SafeAreaView>
    </>
  );
}
