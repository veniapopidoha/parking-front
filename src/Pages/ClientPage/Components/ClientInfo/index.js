import { useSelector } from "react-redux";
import {
  DescriptionD,
  DescriptionT,
  DescriptionWrap,
  Status,
  Title,
  Wrap,
} from "./style";

export const ClientInfo = () => {
  const user = useSelector((state) => state);
  return (
    <>
      <Wrap>
        <Title>
          {user.name}sadsadddddddddddddddddddddddddddddddddddddddddddddd
        </Title>
        <Status>{user.status}dddddddddddddddddddd</Status>
        <dl>
          <DescriptionWrap>
            <DescriptionT>Licence plate</DescriptionT>
            <DescriptionD>СE7248VB</DescriptionD>
          </DescriptionWrap>
          <DescriptionWrap>
            <DescriptionT>Model</DescriptionT>
            <DescriptionD>Reno</DescriptionD>
          </DescriptionWrap>
          <DescriptionWrap>
            <DescriptionT>Colour</DescriptionT>
            <DescriptionD>Wite</DescriptionD>
          </DescriptionWrap>
        </dl>
      </Wrap>
    </>
  );
};
