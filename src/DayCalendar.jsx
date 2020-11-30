import * as React from 'react'
import styled from 'styled-components';
import {client} from './utils/football-data-api-client'
import {useAsync} from './utils/hooks'

const MainContent = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: min(100ch, 100%);
`;

const StyledTable = styled.table`
  border-radius: .5rem;
  border: thin solid #eee;
  width: 100%;
`;

const StyledTableHeader = styled.thead`
  margin: 2rem;

  & > tr {

    & > th {
      padding: 1rem;
      text-align: left;
      border-bottom: thin solid #eee;
    }
  }

`;

const StyledTableBody = styled.tbody`
  margin: 2rem;

  & > tr {

    & > td {
      padding: 1rem;
      text-align: left;
      border-bottom: thin solid #eee;
    }
  }

`;

function DayCalendar() {
  const {data, error, run, isLoading, isError, isSuccess} = useAsync({})

  React.useEffect(() => {
    run(client('matches'))
  }, [run])

  return (
    <MainContent>
      {isLoading ? <div>Loading...</div> : null}

      {isError ? (
        <div>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isSuccess ? (
        <>
          <h1>{data.filters.dateFrom}</h1>
          <StyledTable>
            <StyledTableHeader>
              <tr>
                <th>Competition</th>
                <th>Time</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </StyledTableHeader>
            <StyledTableBody>
              {data.matches.map(match => (
                <tr>
                  <td>{match.competition.name} ({match.competition.area.code})</td>
                  <td>{match.utcDate}</td>
                  <td>{match.homeTeam.name}</td>
                  <td>{match.awayTeam.name}</td>
                  <td>{match.status}</td>
                  <td>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</td>
                </tr>
              ))}
            </StyledTableBody>
          </StyledTable>
          <pre></pre>
        </>
        ) : null }
    </MainContent>
  )
}

export {DayCalendar}
