module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3_ACCESS_KEY_ID'),
        secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // slugify: {
  //   enabled: true,
  //   config: {
  //     contentTypes: {
  //       page: {
  //         field: 'slug',
  //         references: 'title',
  //       }
  //     },
  //   },
  // },
  'preview-button': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          targetField: 'slug',
          published: {
            url: 'http://localhost:3000/{slug}',
          },
        }
      ],
    },
  },
  publisher: {
		enabled: false,
	},
  seo: {
    enabled: false,
  },
  'cloudflare-pages': {
    enabled: true,
    config: {
      instances: [
        {
          name: "Production",
          hook_url: 'https://nuxt3-test-711.netlify.app'
        },
        {
          name: "Staging",
          hook_url: ''
        },
        {
          name: "Nuxt Rebuild",
          hook_url: 'https://api.netlify.com/build_hooks/618a7cd50cdeea69c3457b28'
        }
      ]
    }
  }
});