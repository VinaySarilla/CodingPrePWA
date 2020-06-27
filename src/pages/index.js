import React from "react"
import Layout from "../components/Layout"
import Categories from "../components/Categories"
import "materialize-css/dist/css/materialize.min.css"
import data from "../data/test.json"
export default () => {
  return (
    <Layout>
      <div className="row">
        <div id="DS" class="col s12">
          {data.map((d, index) => (
            <Categories name={d} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
