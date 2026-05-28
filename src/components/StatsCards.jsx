const StatsCards = ({data}) => {

    const totalIntensity = data.reduce(
        (acc,item)=>acc + (item.intensity || 0),
        0
    )

    const totalRelevance = data.reduce(
        (acc,item)=>acc + (item.relevance || 0),
        0
    )

    const totalLikelihood = data.reduce(
        (acc,item)=>acc + (item.likelihood || 0),
        0
    )

  return (
    <div className="cards">

        <div className="card">
            <h2>Total Intensity</h2>
            <p>{totalIntensity}</p>
        </div>

        <div className="card">
            <h2>Total Relevance</h2>
            <p>{totalRelevance}</p>
        </div>

        <div className="card">
            <h2>Total Likelihood</h2>
            <p>{totalLikelihood}</p>
        </div>

        <div className="card">
            <h2>Total Records</h2>
            <p>{data.length}</p>
        </div>

    </div>
  )
}

export default StatsCards
