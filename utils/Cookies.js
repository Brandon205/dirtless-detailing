import React from 'react'

export default function Cookies({closeToast, toastProps }) {

    console.log(toastProps)
  return (
    <div>
        <p>This site uses Cookies for website analytics</p>
        <button onClick={() => { closeToast } }>Accept</button>
    </div>
  )
}
