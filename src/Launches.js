import { useQuery, gql } from '@apollo/client';

const GET_FIVE_LAUNCHES= gql`
query GetFiveLaunches {
        
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;


function Launches() {
  const { loading, error, data } = useQuery(GET_FIVE_LAUNCHES);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  return data.launches.map(({ launch_date_utc, launch_success, rocket, links, details }, index) => (
    <div key={index}>
      <p>
        {launch_date_utc}: {`${launch_success ? "OK" : "No OK"}`}: {rocket.rocket_name}: <a rel="noreferrer" target="_blank" href={links.video_link}>Lien YouTube</a>, {details}
      </p>
      
    </div>
  ));
}

export default Launches