import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import ColorCards from "./components/ColorCards";
import Pagination from "./components/Pagination";

function App() {
  const [colors, setColor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchUrl =
    "https://cors-anywhere.herokuapp.com/http://www.colourlovers.com/api/palettes/new?format=json";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setColor(request.data);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, [pages]);

  //get back pages:

  const indexOfLastPost = pages * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = colors.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setPages(pageNumber);

  return (
    <>
      <div className="app">
        <Header></Header>
        <div className="app_body">
          <h1>
            ColourLovers. <span className="app_body_span">Live.</span>
          </h1>

          <ColorCards isLoading={isLoading} colors={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={colors.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
