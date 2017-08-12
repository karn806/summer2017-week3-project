import React, { Component } from 'react'
import './index.css'

function YoyoProfile({ name, count, max, onGiveYoyo, style }) {
  return (
    <div style={style} className="flex-center space-around person-container">
      <div>
        <AdorableAvatar name={name} />
      </div>
      <div className="flex-vertical">
        <h2>
          {name}: {count}
        </h2>
        <div>
          <input type="button" onClick={onGiveYoyo} value={`Give yoyo to ${name}`} />
        </div>
        <div>
          {max ? 'Yummy' : 'Give me more!'}
        </div>
      </div>
    </div>
  )
}

YoyoProfile.defaultProps = {
  style: {}
}

function AdorableAvatar({ name }) {
  return (
    <img alt={name} src={`https://api.adorable.io/avatars/100/${name}.png`} width="100" />
  )
}

function TotalYoyo({ count }) {
  return (<div>
    <h3>Total: {count}</h3>
  </div>)
}

function CenterPage({ children }) {
  return (
    <div className="flex-vertical full-height space-around">
      <div className="flex-center">
        {children}
      </div>
    </div>)
}

function Card({ children }) {
  return (
    <div className="card-bg">
      {children}
    </div>
  )
}

export default class YoyoRace extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ply: 0,
      boat: 0
    }
  }

  giveYoyoToPly() {
    this.setState((st) => ({ ply: st.ply + 1 }))
  }

  giveYoyoToBoat() {
    this.setState((st) => ({ boat: st.boat + 1 }))
  }


  render() {
    const { ply, boat } = this.state
    return (
      <CenterPage>
        <Card>
          <div className="flex-vertical">
            <h1>Yoyo Race</h1>
            <div className="flex-center space-around">
              <YoyoProfile
                name="Ply"
                count={ply}
                max={ply > boat}
                onGiveYoyo={() => this.giveYoyoToPly()}
              />
              <YoyoProfile
                name="Boat"
                count={boat}
                max={ply < boat}
                onGiveYoyo={() => this.giveYoyoToBoat()}
                style={{ backgroundColor: "#6F86FF" }}
              />
            </div>
            <div className="flex-center">
              <TotalYoyo count={ply + boat} />
            </div>
          </div>
        </Card>
      </CenterPage>
    )
  }
}