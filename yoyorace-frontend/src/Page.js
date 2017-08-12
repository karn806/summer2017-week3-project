import React, { Component } from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'

function PrettyLink(props) {
  const styles = {
    link: {
      color: 'white'
    },
    activeLink: {
      color: '#58FFFA'
    }
  }
  return (
    <NavLink exact style={styles.link} activeStyle={styles.activeLink} {...props} />
  )
}

function NavBar() {
  const styles = {
    container: {
      padding: 10,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.8)'
    }
  }
  return (
    <div className="flex-center space-around" style={styles.container}>
      <PrettyLink to='/'> Yoyo Fight</PrettyLink>
      <PrettyLink to='/ask-me'>Ask Me</PrettyLink>
    </div>
  )
}

function Credit() {
  const styles = {
    container: {
      padding: 10,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.8)'
    }
  }
  return (
    <div style={styles.container}>
      See the Source on github | <a className="white-link"
         href="https://github.com/MUIC-CS/summer2017-week3-project">
        https://github.com/MUIC-CS/summer2017-week3-project
      </a>
    </div>
  )
}

export default function Page({ children }) {

  const styles = {
    container: {
      minHeight: '100vh'
    },
    header: {},
    content: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    footer: {}
  }
  return (
    <div className="flex-vertical" style={styles.container}>
      <header>
        <NavBar />
      </header>
      <div style={styles.content}>
        {children}
      </div>
      <footer>
        <Credit />
      </footer>
    </div>
  )
}