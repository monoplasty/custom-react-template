import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, Spin } from "antd";

import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Suspense
          fallback={
            <Spin
              size="large"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            />
          }
        >
          <Router />
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
