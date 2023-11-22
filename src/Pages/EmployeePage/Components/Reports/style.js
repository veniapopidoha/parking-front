import styled from 'styled-components';

export const Table = styled.table`
  background-color: rgba(0, 0, 0, 0.3);
  filter: drop-shadow(-3px 5px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  width: 100%;
  padding: 40px;

  th {
    border-radius: 30px;
    border: 1px solid rgba(0, 0, 0, 0);
    background: #fecb21;
    padding: 10px 0;
  }

  tbody {
    margin: 50px;
  }

  tr {
    background-color: #fff;
    border-radius: 30px;
    height: 45px;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`;
