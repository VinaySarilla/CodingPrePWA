import React, { useEffect } from "react"
import Question from "./Question"
import Layout from "./Layout"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Questions(props) {
  let AData = require(`../data/${props.pageContext.name}.json`)
  const [state, setState] = useState("")
  const [count, setCount] = useState(0)
  const handleChange = e => {
    let text = e.target.value
    setState(text)
  }
  useEffect(() => {
    let x = JSON.parse(localStorage.getItem(props.pageContext.name))
    setCount(x.length)
  }, [props.pageContext.name])

  const countSets = action => {
    let x = count
    if (action) setCount(x + 1)
    else setCount(x - 1)
  }

  return (
    <Layout>
      <h1 className="center">{props.pageContext.name}</h1>
      <div class="section">
        <div class="row">
          <FontAwesomeIcon size="3x" icon={faSearch} color="#0277bd" />
          <div class="input-field col offset-m4 m4 s10">
            <input
              id="last_name"
              type="text"
              class="validate"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <table className="highlight centered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Problem</th>
            <th className="hide-on-med-and-down">Input</th>
            <th className="hide-on-med-and-down">Output</th>
            <th>Level</th>
            <th>
              {count} / {AData.length}
            </th>
          </tr>
        </thead>
        <tbody>
          {typeof AData[0] != "undefined" ? (
            AData.filter(A =>
              A.Question.toLowerCase().includes(state.toLowerCase())
            ).map(Q => {
              return (
                <Question
                  data={Q}
                  key={Q.id}
                  countSets={countSets}
                  name={props.pageContext.name}
                />
              )
            })
          ) : (
            <tr>No data</tr>
          )}
          {console.log(count)}
        </tbody>
      </table>
    </Layout>
  )
}
