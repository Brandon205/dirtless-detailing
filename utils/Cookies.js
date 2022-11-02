import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Cookies(props) {

    let handleClick = (e, value) => {
      e.preventDefault()
      if (value) {
        props.acceptCookies()
      } else {
        props.declineCookies()
      }
      props.closeToast()
    }
  return (
    <div>
        <p>This site uses Cookies for website analytics</p>
        <button onClick={(e) => handleClick(e, true) }>Accept</button>
        <button onClick={(e) => handleClick(e, false) }>Decline</button>
    </div>
  )
}
