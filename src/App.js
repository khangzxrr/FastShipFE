import { useRoutes } from "react-router-dom";
import "./App.css";
import { route } from "../src/routes";
import { ConfigProvider } from "antd";


function App() {
  const elements = useRoutes(route);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
