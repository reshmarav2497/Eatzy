import { restDataList } from "../utils/mockData";
import RestCard from "./RestCard";
import ShimmerCard from "./ShimmerCard";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainComp = () => {
  const [restList, setRestList] = useState([]);
  const [filterRestList, setFilterRestList] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [searchInp, setSearchInp] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchRestDataList();
  }, []);

  const fetchRestDataList = async () => {
    try {
      // const data = await fetch(API_URL);
      // const json = await data.json();
      // const filData =
      //   json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants;
      //localStorage.setItem("restList", JSON.stringify(filData));
      //setRestList(filData);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            setRestList(restDataList);
            setFilterRestList(restDataList);
            resolve();
          } catch (err) {
            console.log("err => ", err);
          }
        }, 2000);
      });
    } catch (error) {
      console.log("Error fetching data, using mock data instead.", error);
      setRestList(restDataList);
      setFilterRestList(restDataList);
    } finally {
      console.log("Finally executed after 5 seconds");
      setIsLoading(false);
    }
  };

  const handleFilterToggle = useCallback(() => {
    console.log("Toggle state ", isFiltered);
    //Apply filter
    if (!isFiltered) {
      const filtered = restList.filter((list) => list.info.avgRating > 4);
      console.log(filtered);
      setFilterRestList(filtered);
    } else {
      //reset list
      setFilterRestList(restList);
    }
    setIsFiltered(!isFiltered); //toggle state
  }, [restList, isFiltered]);

  // Memoized search handler
  const handleSearch = useCallback(
    (e) => {
      setSearchInp(e.target.value);
      if (e.target.value.trim() === "") {
        setFilterRestList(restList);
        return;
      }
      const filterByValue = restList.filter((item) => {
        return item.info.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setFilterRestList(filterByValue);
    },
    [restList]
  );

  return (
    <main className="mainBody">
      {loading ? (
        <>
          <div className="shimmer-btn-cont">
            <button className="shimmer-btn animate"></button>
          </div>
          <div className="resturantCont">
            {Array(20)
              .fill("")
              .map((_, index) => (
                <ShimmerCard key={index} />
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="filter-reset-search">
            <button
              className={`filter-btn ${isFiltered ? "active" : ""}`}
              onClick={handleFilterToggle}
            >
              Ratings 4.0+
            </button>
            <div className="search-div">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "gray" }}
              />
              <input
                className="search-input"
                placeholder="Search for restaurants..."
                id="search-inp"
                value={searchInp}
                onChange={handleSearch}
              ></input>
            </div>
          </div>
          {filterRestList.length === 0 && !loading ? (
            <div className="no-results">
              No restaurants found matching "{searchInp}"
            </div>
          ) : (
            <div className="resturantCont">
              {filterRestList.map((resturant) => (
                <RestCard key={resturant.info.id} resData={resturant} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default MainComp;
