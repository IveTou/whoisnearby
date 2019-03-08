import Header from '../components/header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export const defaultLayout = Component => class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
      <div style={layoutStyle}>
        <Header />
        <Component {...this.props} />
      </div>);
    }
}

export const protectedLayout = (Component, isAuthtenticated = false ) => class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return isAuthtenticated ? 
      <div style={layoutStyle}>
        <Header />
        <Component {...this.props} />
      </div> 
    : <div><p>Do Login</p></div>;
  }
}