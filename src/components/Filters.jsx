const Filters = ({
    region,
    setRegion,
    topic,
    setTopic,
    country,
    setCountry
}) => {

  return (
    <div className="filters">

        <select
        value={region}
        onChange={(e)=>setRegion(e.target.value)}
        >
            <option value="">All Regions</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Northern America">
                Northern America
            </option>
        </select>

        <select
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        >
            <option value="">All Topics</option>
            <option value="oil">Oil</option>
            <option value="gas">Gas</option>
            <option value="economy">Economy</option>
        </select>

        <select
        value={country}
        onChange={(e)=>setCountry(e.target.value)}
        >
            <option value="">All Countries</option>
            <option value="United States of America">
                USA
            </option>
            <option value="China">China</option>
            <option value="India">India</option>
        </select>

    </div>
  )
}

export default Filters