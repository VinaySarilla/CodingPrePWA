import React, { useState } from "react"
import { useEffect } from "react"

const Question = ({ data }) => {
  const { id, Question, level, input, output } = data

  const [state, setstate] = useState(false)

  useEffect(() => {
    let d = localStorage.getItem(id)

    if (JSON.parse(d)) {
      setstate(true)
    }
  }, [id])

  const saveData = () => {
    if (state) {
      setstate(false)
      localStorage.removeItem(id)
    } else {
      setstate(true)
      localStorage.setItem(id, true)
    }
  }
  //
  return (
    <tr className="" style={{ fontWeight: "bold" }}>
      <td>{id}</td>
      <td>{Question}</td>
      <td>{input}</td>
      <td>{output}</td>
      {level === "Easy" ? (
        <td className="green-text text-bold">{level}</td>
      ) : (
        <td className="orange-text">{level}</td>
      )}
      <td>
        <label>
          <input type="checkbox" checked={state} onClick={saveData} />
          <span></span>
        </label>
      </td>
    </tr>
  )
}

export default Question
