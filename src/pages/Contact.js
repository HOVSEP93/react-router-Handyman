import React from "react";
import { useLocation } from "react-router";

const Contact = () => {
  const queryString = useLocation().search;
  console.log(queryString);
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2> Hey {name}, Contact us here...</h2>
      <p>
        Pariatur elit enim irure do cillum Lorem enim veniam.Minim fugiat
        laboris veniam Lorem eiusmod officia reprehenderit enim occaecat aute
        laboris. Ex dolore dolore non officia id occaecat do. Sunt ipsum
        occaecat qui officia velit reprehenderit ipsum dolor. Nisi consequat
        deserunt exercitation esse voluptate est elit labore proident sunt quis
        in laborum. Nostrud occaecat sit sunt magna pariatur laboris sint.
      </p>
    </div>
  );
};

export default Contact;
