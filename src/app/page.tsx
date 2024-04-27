import React from "react";
import NextJSFlicker from "./example/page";

export default async function Index() {
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 overflow-hidden w-full">
        <div className="flex-1 h-full overflow-auto">
          <NextJSFlicker />
        </div>
      </div>
    </div>
  );
}
