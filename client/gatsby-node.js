const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  
  const { data } = await graphql(`
    query Portfolio {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            galleryImages
            title
          }
        }
      }
    }
  `)

  data?.allMarkdownRemark?.nodes?.forEach(node => {
    actions.createPage({
      path: '/portfolio/' + node?.frontmatter?.slug,
      component: path.resolve('./src/templates/portfolio-gallery.js'),
      context: { 
        slug: node?.frontmatter?.slug,
        galleryImages: node?.frontmatter?.galleryImages,
      }
    })
  });
}