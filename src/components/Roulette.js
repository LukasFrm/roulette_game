import React, { useEffect, useState } from 'react'

function Roulette(props) {
  const [rouletteRes, setRouletteRes] = useState([])
  const [count, setCount] = useState([])
  const { stats, colorMap, gameResult } = props

  useEffect(() => {
    let arr1 = []
    let arr2 = []
    Object.values(stats).map(item => {
      arr1.push(item.result)
      arr2.push(item.count)
      return null
    })
    setRouletteRes(arr1)
    setCount(arr2)
  }, [stats])

  return (
    <React.Fragment>
      <h4>Stats (last 200)</h4>
      <table id="stats" className="table">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <th colSpan="5" className="cold">
              Cold
            </th>
            <th colSpan="27" className="neutral">
              Neutral
            </th>
            <th colSpan="5" className="hot">
              Hot
            </th>
          </tr>
          <tr>
            <th>Slot</th>
            {rouletteRes.map((item, index) => {
              return (
                <td
                  key={index}
                  className={`btn-${colorMap[item]}`}
                  style={{
                    animation: gameResult === item && 'blinker 1s linear 5',
                  }}
                >
                  {item}
                </td>
              )
            })}
          </tr>
          <tr>
            <th>Hits</th>
            {count.map((item, index) => {
              let hitColor = 'neutral'
              if (index < 5) hitColor = 'cold'
              if (index > 31) hitColor = 'hot'

              return (
                <td className={`${hitColor}`} key={index}>
                  {item}
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Roulette
