const doodleConfig = {
  next: {
    document: {
      language: 'en',
    },
  },
  components: {
    seo: {
      titleTemplate: '%s - BadgeBuddy',
      default: {
        title: 'Welcome',
        description: 'Easily create badges for .md files',
      },
    },
    head: {
      favicon: {
        path: '/favicon.svg',
        type: 'image/svg+xml',
      },
    },
    logo: {
      srText: 'BadgeBuddy',
      altText:
        'The logo of Badge Buddy. Features a rounded badge on the left and Badge Buddy text on the right.',
      path: '/logo.svg',
      width: 376,
      height: 60,
    },
  },
};

export default doodleConfig;
