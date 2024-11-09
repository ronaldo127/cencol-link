import React, { useState } from "react";

const CleanURLComponent = () => {
  const [inputURL, setInputURL] = useState("");
  const [cleanedURL, setCleanedURL] = useState("");

  const handleInputChange = (event) => {
    const url = event.target.value;
    setInputURL(url);

    // Replace the initial part with the desired domain
    const cleaned = url.replace(/^.*studentwebftp\.centennialcollege\.ca/, 'http://studentweb.cencol.ca');
    setCleanedURL(cleaned);
  };

  return (
    <div>
      <h2>URL Cleaner</h2>
      <input
        type="text"
        placeholder="Enter the URL"
        value={inputURL}
        onChange={handleInputChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <p>Cleaned URL:</p>
      <a href={cleanedURL} target="_blank">{cleanedURL}</a>
    </div>
  );
};

export default CleanURLComponent;
