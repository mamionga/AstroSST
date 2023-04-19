import { AstroSite, StackContext } from 'sst/constructs';

export function Web({ stack }: StackContext) {
  const site = new AstroSite(stack, 'site', {
    path: 'web/',
    buildCommand: 'pnpm run build'
  });

  stack.addOutputs({
    SITE: site.url ?? ''
  });

  return site;
}
