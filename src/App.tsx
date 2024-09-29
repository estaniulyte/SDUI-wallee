import DynamicPage from './components/DynamicPage';

function App() {
  const schemaUrl = process.env.REACT_APP_SCHEMA_URL;

  console.log(schemaUrl);
  return (
    <div className="App">
      <DynamicPage url={schemaUrl || ""} />
    </div>
  );
}

export default App;
