import React from "react"
export default function test(props) {
  console.log(props.pageContext)
  return <div></div>
}

/*export const query = graphql`
  query($path: String!) {
    allArrayJson(filter: { name: { eq: $path } }) {
      edges {
        node {
          name
          Questions{
              Question
          }
        }
      }
    }
  }
`
*/
