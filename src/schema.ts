import { makeSchema } from 'nexus';
import { join } from 'path';

export const schema = makeSchema({
  types: [], // 1
  outputs: {
    schema: join((process as NodeJS.Process).cwd(), 'schema.graphql'), // 2
    typegen: join((process as NodeJS.Process).cwd(), 'nexus-typegen.ts'), // 3
  },
});
