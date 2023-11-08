import { createDirectus, rest, staticToken} from '@directus/sdk';

export const getDirectusClient = async () => {
  const directus = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL)
                      .with(staticToken(import.meta.env.DIRECTUS_STATIC_TOKEN))
                      .with(rest());
  return directus;
};
