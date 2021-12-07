import styled from 'styled-components';
import CountriesSelector from '../components/CountriesSelector';
import Stats from '../components/Stats';

const StyledDiv = styled.div`
  margin: auto;
  width: 50%;
  padding: 5px;
`;

export default function Home() {
  return (
    <StyledDiv>
      <h1>Global Covid-19 Statistics:</h1>
      <Stats url="https://covid19.mathdro.id/api" />
      <CountriesSelector />
    </StyledDiv>
  );
}
