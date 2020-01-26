module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data',
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-pdf',
    'gatsby-plugin-styled-components',
  ],
};
