import { useEffect, useState } from "react";

import API from "./services/api";

import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import StatsCards from "./components/StatsCards";

import IntensityChart from "./charts/IntensityChart";
import RegionChart from "./charts/RegionChart";
import TopicChart from "./charts/TopicChart";

const App = () => {

  const [data,setData] = useState([]);

  const [region,setRegion] = useState("");
  const [topic,setTopic] = useState("");
  const [country,setCountry] = useState("");

  const [loading,setLoading] = useState(false);

  useEffect(()=>{

    fetchData();

  },[region,topic,country]);

  const fetchData = async () => {

    try {

      setLoading(true);

      let query = "?";

      if(region){
        query += `region=${region}&`;
      }

      if(topic){
        query += `topic=${topic}&`;
      }

      if(country){
        query += `country=${country}`;
      }

      const res = await API.get(query);

      console.log(res.data);

      setData(res.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  }

  return (

    <div>

      <Navbar />

      <div className="container">

        <Filters
          region={region}
          setRegion={setRegion}
          topic={topic}
          setTopic={setTopic}
          country={country}
          setCountry={setCountry}
        />

        {
          loading
          ? <h2>Loading...</h2>
          : (
            <>
              <StatsCards data={data} />

              <IntensityChart data={data} />

              <RegionChart data={data} />

              <TopicChart data={data} />
            </>
          )
        }

      </div>

    </div>

  )
}

export default App;