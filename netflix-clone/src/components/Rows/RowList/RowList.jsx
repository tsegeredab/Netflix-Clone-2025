//import React from 'react'
import Row from "../Row/Row";
import requests from "../../../Utils/requests";

const RowList = () => {
    return (
        <>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow={false}
            />
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRatedMovies}
                isLargeRow={true}
            />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
                isLargeRow={true}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow={true}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow={true}
            />

        </>
    );
};

export default RowList;
