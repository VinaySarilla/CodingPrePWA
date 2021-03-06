import React, { useState } from "react"
import { useEffect } from "react"
const Question = ({ data, countSets, name }) => {
  const { id, Question, level, input, output } = data
  const [state, setstate] = useState(false)
  const [alerts, setalert] = useState({ clicked: false, cname: "hide" })
  const isBrowser = typeof window !== `undefined`

  useEffect(() => {
    let x = localStorage.getItem(name)
    if (x.includes(id)) setstate(true)
  }, [id, name])

  const saveData = () => {
    countSets(!state)
    setstate(!state)
    let x = JSON.parse(localStorage.getItem(name))
    let index = x.indexOf(id)

    if (state) {
      x.splice(index, 1)
      localStorage.setItem(name, JSON.stringify(x))
    } else {
      x.push(id)
      localStorage.setItem(name, JSON.stringify(x))
    }
  }

  const ShowDesc = () => {
    if (alerts.clicked) {
      setalert({
        clicked: false,
        cname: "hide",
      })
    } else {
      setalert({
        clicked: true,
        cname: "",
      })
    }
  }
  return (
    <>
      <tr className="" style={{ fontWeight: "600" }}>
        <td>{id}</td>
        <td onClick={ShowDesc} className="blue-text">
          {Question}
        </td>
        <td className="hide-on-med-and-down">{input}</td>
        <td className="hide-on-med-and-down">{output}</td>
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
      <tr colspan="2" className={`${alerts.cname}`}>
        <td>{id}</td>
        <td onClick={ShowDesc} colSpan="5" className="blue-text">
          <p className="col s12 m6">
            {Question} : ---- Input : {input} ----- Output : {output}
          </p>
        </td>
      </tr>
    </>
  )
}

export default Question

/**
 *         <Modal header="Modal Header" trigger={<a href="#">{Question}</a>}>
        <p className="flow-text">Input:{input}</p>
      <p className="flow-text">Input:{output}</p>
  </Modal>

 */
