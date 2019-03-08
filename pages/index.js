import { defaultLayout } from '../hocs/layouts';
import PostLink from '../components/post-link/';
import fetch from 'isomorphic-unfetch';

const App = defaultLayout((props) => (
  <div>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <PostLink id={show.id} name={show.name}/>
        </li>
      ))}
    </ul>
  </div>
))

App.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  }
}
  
export default App;