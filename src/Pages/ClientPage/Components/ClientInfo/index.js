import {
  DescriptionD,
  DescriptionT,
  DescriptionWrap,
  Status,
  Title,
  Wrap,
} from "./style";

export const ClientInfo = ({ isUser }) => {
  return (
    <>
      <Wrap isUser={isUser}>
        <Title>Veniamin Vitaliovich</Title>
        <Status>Client</Status>
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
