import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import "materialize-css/dist/css/materialize.min.css"
import Data from "../data/Test.json"
export default () => {
  const isBrowser = typeof window !== `undefined`

  return (
    <Layout>
      <div className="row">
        <div id="DS" class="col s12">
          {Data.map(d => {
            let a = []

            if (isBrowser) {
              if (!JSON.parse(localStorage.getItem(d.name)))
                localStorage.setItem(d.name, JSON.stringify(a))
              let progress = JSON.parse(localStorage.getItem(d.name))
              a = progress
            }

            return (
              <Categories
                name={d}
                progress={(a.length / d.count) * 100}
                total={d.count}
                finished={a.length}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
