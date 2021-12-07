import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatsGrid = styled.div`
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const StatsBlock = styled.div`
  background: #bbfcfb;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

function Stats({ url }) {
  const { statistics, loading, error } = useStats(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div>
      <h3>Last updated: {statistics?.lastUpdate.slice(0, 10)}</h3>
      <StatsGrid>
        <StatsBlock>
          <h3>Cases:</h3>
          <span>{statistics?.confirmed.value.toLocaleString()}</span>
        </StatsBlock>
        <StatsBlock>
          <h3>Deaths:</h3>
          <span>{statistics?.deaths.value.toLocaleString()}</span>
        </StatsBlock>
      </StatsGrid>
    </div>
  );
}

export default Stats;
