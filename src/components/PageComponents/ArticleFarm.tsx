import React from "react";
import "../../scss/ArticleFarm.scss";
import Header from "../Header/Header";
import ShowNewsSmall from "../showNews/ShowNewsSmall";

const ArticleFarm: React.FC = () => {
    return (
        <div className="profile">
            <Header />
            <div className="profileContainer">
                <div className="upperContainer">
                    <div className="profileTitle">
                        ARTICLE <br /> FARM
                    </div>
                    <div className="sorting">
                        <div className="search">
                            <label htmlFor="search">Search:</label>
                            <input type="search" name="search" id="search" />
                        </div>
                        <div className="sort">
                            <label htmlFor="sort">Sort</label>
                            <select id="sort" name="Sort">
                                <option value="politics">Politics</option>
                                <option value="sports">Sports</option>
                                <option value="finance">Finance</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="lowerContainer">
                    <ShowNewsSmall
                        title="Breakthrough in Cancer Research"
                        description="New treatment shows 90% effectiveness in early trials."
                        voteCounts="13"
                        timer="00:03:21"
                    />
                </div>
            </div>
        </div>
    );
};

export default ArticleFarm;
