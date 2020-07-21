const data = require("./src/data/Test.json")

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

/**
 * exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage == "build-html") {
    actions.setWebpackConfig({
      modules: {
        rules: [
          {
            test: "/react-materialize/",
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

 */
