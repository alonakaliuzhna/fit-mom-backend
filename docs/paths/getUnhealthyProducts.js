module.exports = {
  get: {
    tags: ['Products'],
    summary: `Get all non recommended products by user's blood type`,
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        in: 'query',
        name: 'page',
        schema: { type: 'integer' },
        description: 'Page number for pagination. Default: 1',
      },
      {
        in: 'query',
        name: 'limit',
        schema: { type: 'integer' },
        description: 'Number of products per page. Default: 20',
      },
      {
        in: 'query',
        name: 'all',
        schema: { type: 'boolean' },
        description:
          'If this parameter is specified with true, the entire list of unhealthy products will be returned',
      },
    ],
    responses: {
      200: {
        description: 'Products returned',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: { type: 'string' },
                code: { type: 'number' },
                data: {
                  properties: {
                    total: { type: 'number' },
                    products: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          product_id: {
                            type: 'string',
                          },
                          product_title: {
                            type: 'object',
                            properties: {
                              en: {
                                type: 'string',
                              },
                              en: {
                                type: 'string',
                              },
                              ua: {
                                type: 'string',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              example: {
                status: 'success',
                code: 200,
                data: {
                  total: 1,
                  products: [
                    {
                      product_id: '5d51694802b2373622ff553b',
                      product_title: {
                        en: 'Chicken egg (dry yolk)',
                        ua: 'Яйце куряче (жовток сухий)',
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request',
      },
      401: {
        description: 'Valid token required / Not authorized',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
