import { useRoutes } from "react-router-dom";
import "./App.css";
import { route } from "../src/routes";
import { ConfigProvider } from "antd";
import { OverlayProvider } from "./OverlayContext";

function App() {
  const elements = useRoutes(route);
  return (
    <div className="App">
      <OverlayProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#FFE715",
              fontFamily: `"Roboto","Helvetica Neue",sans-serif`,
            },
            components: {
              Button: {
                colorError: "#9ec801",
              },
            },
          }}
        >
          {elements}
        </ConfigProvider>
      </OverlayProvider>
    </div>
  );
}

export default App;
