import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
  const text = 'I am a header'
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
          <p>{text}</p>
        </div>
        <div className="settings" data-testid="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
