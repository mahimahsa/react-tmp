import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'


function RightMenu() {


  return (
    <div>
        <Link to='/modern/pin-activation' >
          <span>
            فعالسازی و رمز مجدد
          </span>
        </Link>
    </div>
  )
}
export default RightMenu
