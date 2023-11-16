import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: block;
  font-size: 24px;
  font-weight: 500;
  width: 130px;
  border-radius: 5px;
  border: solid 1px #8854ad;
  padding: 10px;
  text-decoration: none;
  color: #000000;
  text-align: center;
  margin: 20px 0px 20px 30px;

  &:hover {
    color: #8854ad;
  }
`;

export const StyledMovieDetails = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px 0px 20px 30px;

  .movie-title {
    font-size: 40px;
    padding-bottom: 14px;
  }
  .title-desc {
    font-size: 22px;
    padding-bottom: 8px;
  }
  .desc-list {
    padding-left: 18px;
    list-style: square;
  }
  .desc {
    font-size: 18px;
    padding-bottom: 14px;
  }
`;

export const StyledAddInfo = styled.div`
  .title-info {
    padding-left: 30px;
  }
`;
