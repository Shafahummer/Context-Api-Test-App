import FirstComponent from "./components/FirstComponent";
import { MyProvider } from './context/provider';

function App() {
  return (
    <MyProvider>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: 'calc(10px + 2vmin)' }}>
          Lorem Ipsum is simply dummy text
        </div>
      </div>
      <FirstComponent />
    </MyProvider>
  );
}

export default App;
