module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `${__dirname}/data`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
  ],
};
