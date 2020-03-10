import React, { useEffect, useState } from 'react'


function GameBoard(props) {
  const [gameLayout, setGameLayout] = useState([])
  const { layout, colorMap, gameResult } = props

  const blinkButton = (res, idx) => {
    if (res === idx) {
      return 'blink_me'
    }

    if (res === idx) {
      setTimeout(() => {
        return ""
      }, 4000)
    }
  }
    /* eslint-disable */
  useEffect(() => {
    let arr = []
    for (let i = 0; i < layout.length; i++) {
      arr = [
        ...arr,
        <button
          key={i}
          data-id={`slot-${layout[i]}`}
          type="button"
          className={`col-1 btn btn-${colorMap[layout[i]]} ${blinkButton(
            gameResult,
            layout[i],
          )}`}
          style={{animation: gameResult === layout[i] && "blinker 1s linear 5"}}
        >
          {layout[i]}
        </button>,
      ]
    }
    setGameLayout(arr)
  }, [layout])
      /* eslint-enable */

  return (
    <>
      <h4>Game board</h4>
      <div className="row">
        <div className="col-10 ">
          <div id="game_board" className="row">
            {gameLayout.map(item => {
              return item
            })}
          </div>
        </div>
        <div className="col-2">
          <div id="spinner" style={{ height: '100px' }}></div>
        </div>
      </div>
    </>
  )
}

export default GameBoard
