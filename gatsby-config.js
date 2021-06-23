require('dotenv').config()


module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku',],
        secretKey: process.env.STRIPE_SECRET_KEY ,
        downloadFiles: true,
      }
    }
  ],
}
