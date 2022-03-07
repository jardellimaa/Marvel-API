import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, RefreshControl } from "react-native";
import { api, AUTHENTICATION } from "../../services/api";
import {
  DetailFlatList,
  ComicsCards,
  CardInfo,
  HeroInfo,
  ComicsInfos,
  ComicCover,
  ComicsInfoText,
  ComicConteiner,
  styles,
  EmptyContainer,
  EmptyName,
} from "./HeroDatail.styles";
import { IHeroComic, IPrices } from "../../interfaces/interfaces";

export default function HeroDetail({ route }: any) {
  const heroChosen = route.params.hero;
  const [heroComics, setHeroComics] = useState<IHeroComic[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    reloadComics(heroChosen.id);
  }, [heroChosen]);

  const reloadComics = (id: number, reload = false) => {
    if (loading) return;

    if (!reload) if (total > 0 && heroComics.length === total) return;
    if (reload) setHeroComics([]);

    setLoading(true);

    const params = {
      offset: reload ? 0 : offset,
      ...AUTHENTICATION,
    };

    api
      .get(`/v1/public/characters/${id}/comics`, { params })
      .then((response: any) => {
        if (reload) {
          setHeroComics([...response.data.data.results]);
          setOffset(20);
        } else {
          setHeroComics([...heroComics, ...response.data.data.results]);
          setOffset(offset + 20);
        }
        setTotal(response.data.data.total);
        setLoading(false);
      })
      .catch((err: any) => {
        console.error("ops! ocorreu um erro" + err);
        setLoading(false);
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

  function cardHeroComics({ item: comic }: any) {
    return (
      <ComicsCards>
        <ComicCover
          source={{
            uri: getURI(comic.thumbnail.path, comic.thumbnail.extension),
          }}
        />
        <ComicsInfos>
          <ComicsInfoText>Title: {comic.title}</ComicsInfoText>
          <ComicsInfoText>Number: {comic.issueNumber}</ComicsInfoText>
          {comic?.prices?.map((priceItem: IPrices, index: number) => (
            <ComicsInfoText key={index}>
              {getPriceName(priceItem.type)}: ${priceItem.price}
            </ComicsInfoText>
          ))}
        </ComicsInfos>
      </ComicsCards>
    );
  }

  const listEmpty = () => {
    return (
      <EmptyContainer>
        <EmptyName>Nenhum item</EmptyName>
        <EmptyName>encontrado</EmptyName>
      </EmptyContainer>
    );
  };

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
            <HeroInfo>{heroChosen.name}</HeroInfo>
          </CardInfo>
          <DetailFlatList
            data={heroComics}
            style={styles.shadow}
            numColumns={1}
            onEndReached={() => reloadComics(heroChosen.id)}
            onEndReachedThreshold={1}
            keyExtractor={(item: any, index: number) => `${item.id}-${index}`}
            showsVerticalScrollIndicator={true}
            renderItem={cardHeroComics}
            refreshing={loading}
            ListEmptyComponent={!loading ? listEmpty : null}
            onRefresh={() => reloadComics(heroChosen.id, true)}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                colors={["#341948"]}
                onRefresh={() => reloadComics(heroChosen.id, true)}
              />
            }
          />
        </ComicConteiner>
      </SafeAreaView>
    </>
  );
}
