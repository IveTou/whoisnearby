import Header from '../components/header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const DefaultLayout = ({ children, isAuthenticated = true }) => {
  return isAuthenticated && (
    <div style={layoutStyle}>
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;