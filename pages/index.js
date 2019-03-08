import DefaultLayout from '../hocs/defaultLayout';
import PostLink from '../components/post-link/';
import fetch from 'isomorphic-unfetch';

const App = (props) => (
  <DefaultLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <PostLink id={show.id} name={show.name}/>
        </li>
      ))}
    </ul>
  </DefaultLayout>
)

App.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
}
  
export default App;