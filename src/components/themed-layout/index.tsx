"use client";

import { Header } from "@components/header";
import { ThemedLayoutV2 } from "@refinedev/antd";
import React from "react";

const HeaderComponent = () => {
  return (
    <>
      This is the Header Component
      {/* <Header sticky={false} /> */}
    </>
  );
};

export const ThemedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Footer={() => <>This is a footer</>}
      Header={() => <HeaderComponent />}
      Title={() => <>TITLE HERE</>}
    >
      {children}
    </ThemedLayoutV2>
  );
};
