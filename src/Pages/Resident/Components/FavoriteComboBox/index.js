import { useEffect, useMemo, useState } from "react";
import {
  ComboBox,
  Icon,
  IconContainer,
  InputWrap,
  StyledInput,
  ComboBoxText,
  Button,
} from "./style";
import { useSelector } from "react-redux";

export const FavoriteComboBox = ({
  favoriteValue,
  setFavoriteValue,
  setFavorite,
}) => {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const user = useSelector((state) => state);

  const handleFavoritesModal = (favoriteValue) => {
    setFavoriteValue(favoriteValue);
    setIsFavoritesOpen(false);
  };

  const filteredFavorites = useMemo(() => {
    const filteredFavorites = user.visitors
      .filter((visitor) => {
        return (
          visitor.favorite &&
          visitor.plate.toLowerCase().includes(favoriteValue.toLowerCase())
        );
      })
      .map((filteredFavorite) => (
        <ComboBoxText
          key={filteredFavorite.plate}
          onClick={() => {
            handleFavoritesModal(filteredFavorite.plate);
            setFavorite(filteredFavorite);
          }}
        >
          {filteredFavorite.plate}
        </ComboBoxText>
      ));

    return filteredFavorites;
  }, [favoriteValue, user.visitors]);

  return (
    <>
      <InputWrap>
        <StyledInput
          onChange={(e) => {
            setFavoriteValue(e.target.value);
            setIsFavoritesOpen(true);
          }}
          placeholder="Favorite"
          name="favorite"
          value={favoriteValue}
        />
        {favoriteValue && isFavoritesOpen && filteredFavorites.length > 0 && (
          <ComboBox>{filteredFavorites}</ComboBox>
        )}
      </InputWrap>
    </>
  );
};
