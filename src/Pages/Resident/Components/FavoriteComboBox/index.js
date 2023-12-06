import { useMemo, useState } from "react";
import { ComboBox, Icon, InputWrap, ComboBoxText } from "./style";
import { useSelector } from "react-redux";
import Bars from "../../../../images/bars.svg";

export const FavoriteComboBox = ({ setFavorite }) => {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const user = useSelector((state) => state);

  const filteredFavorites = useMemo(() => {
    const filteredFavorites = user.visitors
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
  }, [user.visitors]);

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
