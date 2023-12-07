import { useMemo, useState } from "react";
import { ComboBox, Icon, InputWrap, ComboBoxText } from "./style";
import Bars from "../../../../images/bars.svg";
import { useSelector } from "react-redux";

export const FavoriteComboBox = ({ setFavorite, visitors }) => {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const data = useSelector((state) => state);

  const filteredFavorites = useMemo(() => {
    const filteredFavorites = data.visitors
      .filter((visitor) => visitor.isFavorite === true)
      .map((filteredFavorite) => (
        <ComboBoxText
          key={filteredFavorite.plate}
          onClick={() => {
            setIsFavoritesOpen(false);
            setFavorite(filteredFavorite);
          }}
        >
          {filteredFavorite.plate}
        </ComboBoxText>
      ));

    return filteredFavorites;
  }, [visitors, isFavoritesOpen]);

  return (
    <>
      <InputWrap>
        <button onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}>
          <Icon src={Bars} alt="icon" />
        </button>
        {isFavoritesOpen && filteredFavorites.length > 0 && (
          <ComboBox>{filteredFavorites}</ComboBox>
        )}
      </InputWrap>
    </>
  );
};
