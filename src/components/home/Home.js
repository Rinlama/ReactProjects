import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function Home() {
  return (
    <div>
      <Header></Header>
      <div className="home-main">
        <form className="d-flex justify-content-center">
          <div className="form-group m-0">
            <input
              type="text"
              className="form-control search-form-control"
              placeholder="Enter delivery address"
            />
          </div>
          <button type="submit" className="ml-2 btn btn-danger btn-sm">
            Search
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
