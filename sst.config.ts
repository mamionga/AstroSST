import type { SSTConfig } from 'sst';
import { Web } from './stacks/Web';

export default {
  config(input) {
    return {
      name: 'astrotest',
      region: 'us-west-1'
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: 'nodejs16.x'
    });
    app.stack(Web);
  }
} satisfies SSTConfig;
