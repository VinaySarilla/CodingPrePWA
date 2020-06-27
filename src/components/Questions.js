import React from "react"
import Question from "./Question"
import Layout from "./Layout"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Questions(props) {
  let AData = require(`../data/${props.pageContext.name}.json`)
  const [state, setState] = useState("")

  const handleChange = e => {
    let text = e.target.value
    setState(text)
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
      <table className="striped centered border">
        <thead>
          <tr>
            <th>Id</th>
            <th>Problem</th>
            <th>Input</th>
            <th>Output</th>
            <th>Level</th>
            <th>Solved</th>
          </tr>
        </thead>
        <tbody>
          {typeof AData[0] != "undefined" ? (
            AData.filter(A =>
              A.Question.toLowerCase().includes(state.toLowerCase())
            ).map(Q => {
              return <Question data={Q} key={Q.id} />
            })
          ) : (
            <tr>No data</tr>
          )}
        </tbody>
      </table>
    </Layout>
  )
}
