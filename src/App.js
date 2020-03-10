import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Spinner from 'react-bootstrap/Spinner'
import GameBoard from './components/GameBoard'
import Roulette from './components/Roulette'
import LogBox from './components/LogBox'
import EventBox from './components/EventBox'

function App() {
  const [colorMap, setColorMap] = useState([])
  const [layout, setLayout] = useState([])
  const [stats, setStats] = useState({})
  const [nextGame, setNextGame] = useState([])
  const [logs, setLogs] = useState([])
  const [timer, setTimer] = useState(1)
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState([])
  const [API_link, setAPI_link] = useState(
    'https://dev-games-backend.advbet.com/v1/ab-roulette/1/',
  )
  const [gameResult, setGameResult] = useState('')
  const intervalRef = useRef(null)

  const appendLog = prop => {
    setLogs(prev => [
      ...prev,
      <span>{new Date().toISOString() + ' ' + prop}</span>,
    ])
  }

  const getConfiguration = async () => {
    appendLog('Loading game board')
    appendLog('GET .../configuration')

    const configResponse = await fetch(`${API_link}/configuration`)
    const configData = await configResponse.json()
    const { colors, results, positionToId } = configData
    let resObj = {}
    results.forEach((key, i) => (resObj[key] = colors[i]))
    setColorMap(resObj)
    setLayout(positionToId)
  }

  const getStats = async () => {
    const statsResponse = await fetch(`${API_link}/stats?limit=200`)
    const statsData = await statsResponse.json()
    setStats(statsData)
    appendLog('GET .../stats?limit=200')
  }

  const runTimer = x => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)
  }
  /* eslint-disable */

  useEffect(() => {
    if (!timer) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      spinTheWheel()
    }
  }, [timer])

  const spinTheWheel = async () => {
    appendLog('Spinning the wheel')
    if (loading === false) {
      appendLog(`GET .../game/1416587`)
      const gameResultResponse = await fetch(`${API_link}/game/${nextGame.id}`)
      const gameResultData = await gameResultResponse.json()
      setGameResult(gameResultData.result)
      setLoading(true)
    } else appendLog('Wheel is already spinning')
  }
  useEffect(() => {
    if (gameResult === null) {
      appendLog('Still no result, continue spinning')
      setTimeout(() => {
        spinTheWheel()
      }, 2000)
    }
    if (typeof gameResult === 'number') {
      appendLog(`Result is ${gameResult}`)
      setLoading(false)
      appendLog('Stopping the wheel')
      setEvents(prev => [
        ...prev,
        `Game ${nextGame.id} ended, result is ${gameResult}`,
      ])
      loadTheBoard()
    }
  }, [gameResult])


  const getNextGame = async () => {
    const nextGameResponse = await fetch(`${API_link}/nextGame`)
    const nextGameData = await nextGameResponse.json()
    setNextGame(nextGameData)
    const { fakeStartDelta } = nextGameData
    appendLog('Checking for new game')
    appendLog('GET .../nextGame')
    appendLog(`sleeping for fakeStartDelta ${fakeStartDelta} sec`)
    setTimer(fakeStartDelta)
    runTimer()
  }

  const loadTheBoard = () => {
    getStats()
    getConfiguration()
    getNextGame()
  }

  // First roulette load
  useEffect(() => {
    loadTheBoard()
  }, [])

  return (
    <React.Fragment>
      <div className="p-5 m-5">
        <h1>Roulette Game</h1>
        <form>
          <div className="form-group">
            <label htmlFor="api_base">API base URL</label>
            <input
              className="form-control"
              id="api_base"
              value={API_link}
              onChange={e => setAPI_link(e.target.value)}
            />
          </div>
        </form>
        <div className="row">
          <div className="col-12">
            <Roulette
              stats={stats}
              colorMap={colorMap}
              gameResult={gameResult}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <GameBoard
              colorMap={colorMap}
              layout={layout}
              gameResult={gameResult}
            />
            <EventBox id={nextGame.id} timer={timer} events={events} />
          </div>
          <div className="col-1">
            {loading === true && <Spinner animation="border" role="status" />}
          </div>
          <div className="col-6">
            <LogBox logs={logs} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
