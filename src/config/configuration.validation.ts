import Joi from 'joi';

export const configurationValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(3000),

  API_PREFIX: Joi.string().default('api'),

  API_VERSION: Joi.string().default('v1'),

  DB_TYPE: Joi.string()
    .valid('postgres')
    .default('postgres'),

  DB_HOST: Joi.string().required(),

  DB_PORT: Joi.number().default(5432),

  DB_USERNAME: Joi.string().required(),

  DB_PASSWORD: Joi.string().required(),

  DB_NAME: Joi.string().required(),

  DATABASE_URL: Joi.string().required(),

  // CLIENT_URL: Joi.string().uri().required(),
});