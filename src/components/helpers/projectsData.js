const projectsData = [
  {
    projectName: 'thriveMotors',
    title: 'Thrive Motors',
    description: 'A Single Page Application built with React and Apollo. Hasura/GraphQL backend deployed to Heroku. Front end static hosting on S3, with a CloudFront distribution.',
    links: [
      {
        url: 'https://www.thrivemotors.com',
        urlName: 'Website',
      },
    ],
  },
  {
    projectName: 'solo',
    title: 'Solo',
    description: 'Minimalist note taking and distraction-free writing web app built with React. Apollo handles state and data management. Hasura + PostgreSQL + GraphQL handles basic CRUD.',
    links: [
      {
        url: 'https://www.writesolo.com',
        urlName: 'Website',
      },
      {
        url: 'https://www.producthunt.com/posts/solo-4ec5077b-f9fb-4ed0-ba77-f656e69c9a63',
        urlName: 'ProductHunt (100+ upvotes)',
      },
    ],
  },
  {
    projectName: 'amigosDMS',
    title: 'Amigos DMS',
    description: 'CRM, inventory and invoice management web app built with Meteor.js, using Blaze to run our UI layer and MongoDB for data storage. Docker image deployed to AWS EC2.',
    links: [
      {
        url: 'https://www.amigosdms.com',
        urlName: 'Website',
      },
    ],
  },
];

export default projectsData;
