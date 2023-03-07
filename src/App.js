import { ThemeProvider, createTheme } from "@mui/material";
import Table from "./components/Table";

export default function App() {
  // https://stackoverflow.com/questions/71564028/cannot-read-properties-of-undefined-reading-direction-react-js-material-tabl
  const defaultMaterialTheme = createTheme();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <ThemeProvider theme={defaultMaterialTheme}>
        <Table />
      </ThemeProvider>
    </div>
  );
}
