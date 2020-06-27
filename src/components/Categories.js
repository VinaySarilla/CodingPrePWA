import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faTerminal } from "@fortawesome/free-solid-svg-icons"

export default ({ name }) => {
  const img1 = require(`../images/${name.name}.png`)

  return (
    <div class="col s6 m3">
      <div class="card center">
        <div class="card-image">
          <img src={img1} />
          <Link
            class="btn-floating btn-large center halfway-fab waves-effect waves-light blue darken-2 hide-on-md"
            to={`/test/${name.name}`}
          >
            <FontAwesomeIcon
              size="2x"
              icon={faTerminal}
              style={{ margin: "13px", marginLeft: "10px" }}
            />
          </Link>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

/**
 *     <div class="col s12 m4">
      <Link to={`test/${name}`} className="center">
        <div class="card-panel grey lighten-5 z-depth-1 center">
          <div class="row valign-wrapper">
            <div class="col s12 m6">
              <img
                src={img1}
                alt=""
                class="circle responsive-img"
                height="50%"
              />
            </div>
            <div class="col s12 m6">
              <p class="black-text flow-text">{name}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
 * 
 */

/**
 * 
    <div className="col s12 m4">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">
            <h3>{name}</h3>
          </span>
          <p>I Am {name}</p>
        </div>
        <div class="card-action">
          <Link to={`DS/${name}`}>{name}</Link>
        </div>
      </div>
    </div>
 */
