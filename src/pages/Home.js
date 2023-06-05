import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";
import logo from "./home.jpg"
const Home = () => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const toggle = document.querySelector(".search__toggle");
      const input = document.querySelector(".search__input");
      const clickedElement = e.target;

      if (clickedElement == toggle) {
        input.value = "";
        return;
      }

      const isSearchField = clickedElement.closest(".search__field");

      if (!isSearchField) {
        toggle.checked = false;
        input.value = "";
      }
    });
  }, []);
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          backgroundSize: "100%",
          borderRadius: 50,
          marginTop: 20,
          flexDirection: "row",
          padding: 100,
          backgroundImage:
            "url('https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg')",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: 50,
            borderRadius: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            background: "rgba(2, 3, 3,0.7)",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 40,
              marginBottom: 0,
            }}
          >
            Busy Chef
          </h1>
          <h1 style={{ color: "white" }}>
            Find favourite tifin service near you.
          </h1>
          <form class="search">
            <input
              type="checkbox"
              id="toggleSearch"
              class="search__toggle"
              hidden
            />
            <div class="search__field">
              <label for="toggleSearch" class="search__label">
                <span class="search__close"></span>
              </label>
              <input
                type="text"
                class="search__input"
                placeholder="Enter your area Name ?"
              />
              <label for="toggleSearch" class="search__label">
                <div class="search__button">
                  <div class="search__icon search__button--toggle"></div>
                </div>
                <button class="search__button search__button--submit">
                  <div class="search__icon"></div>
                </button>
              </label>
            </div>
          </form>
          <button
            style={{
              border: "none",
              height: 30,
              width: 200,
              cursor: "pointer",
              marginTop: 20,
              borderRadius: 10,
              fontWeight: "bold",
              color: "white",
              background: "red",
            }}
          >
            Find Near me
          </button>
        </div>
      </div>
      <div style={{ display: "flex",marginTop:30 }}>
        <div style={{ flex: 1, paddingLeft: 30 ,display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <h1>Restaurants in your pocket</h1>
          <p>
            Order from your favorite restaurants & track on the go, with the
            all-new busychef app.
          </p>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
            style={{ width: 100, height: 35 }}
          />
        </div>
        <div style={{ flex: 1,display:"flex",justifyContent:"center",alignItems:"center" }}>
          <img src={logo} style={{height:500}}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
