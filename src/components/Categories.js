import React, { useState } from "react"
import { Link } from "gatsby"

export default ({ name, progress, total, finished }) => {
  const [e, setState] = useState(0)

  return (
    <div className="col s12 m6">
      <div
        className={`card-panel z-depth-${e}`}
        style={{ border: "1px solid #0277bd24" }}
        onMouseOver={() => setState(1)}
        onMouseLeave={() => setState(0)}
      >
        <div className="row">
          <h5 className="col s10">{name.name}</h5>
          <h5 className="col s2 right">
            {finished}/{total}
          </h5>
        </div>
        <div
          className="progress light-blue lighten-4"
          style={{ marginBottom: "30px" }}
        >
          <div
            className="determinate light-blue darken-2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="row">
          <div className="col s4 right">
            <Link
              className="btn-large right light-blue darken-2 scale-transition"
              to={`/test/${name.name}`}
            >
              Solve
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 *    <div class="col s12 m3">
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
        <div class="row valign-wrapper">
          <div className="progress" style={{ margin: "10px" }}>
            <div
              className="determinate"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
 * 
 */

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
