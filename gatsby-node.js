const data = require("./src/data/test.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const template = require.resolve(`./src/components/Questions.js`)

  data.forEach(T => {
    var name = T.name

    createPage({
      path: `/test/${name}`,
      component: template,
      context: {
        dataPath: `./src/data/${name}.json`,
        name: T.name,
      },
    })
  })
}
