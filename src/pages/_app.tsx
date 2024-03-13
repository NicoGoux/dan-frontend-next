// import "normalize.css/normalize.css";
import "app/styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { AppContextProvider } from "app/context/AppContext";
import theme from "../theme/themeConfig";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <AppContextProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </AppContextProvider>
  </ConfigProvider>
);

export default App;
