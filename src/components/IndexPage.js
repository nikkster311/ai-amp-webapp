import React from "react";
import SampleComponent from "./SampleComponent";

function IndexPage() {
  return (
    <div>
      <h2>Index Page</h2>
      <div className="sample-components-wrapper">
        <SampleComponent />
        <SampleComponent />
        <SampleComponent />
        <SampleComponent />
        <SampleComponent />
      </div>
    </div>
  );
}

export default IndexPage;
