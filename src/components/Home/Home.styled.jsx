import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  .link {
    text-decoration: none;
  }
  .img {
    object-fit: cover;
  }
  .movies-title {
    max-width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #000000;
  }
  .movies-title:hover {
    color: #8854ad;
  }
`;
export const StyledListItem = styled.li`
  width: 300px;
  border: 1px solid #363333;
  border-radius: 4px;
  overflow: hidden;
`;
export const StyledTitle = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;
