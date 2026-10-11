# Deployment

The project uses Next.js static export (`output: 'export'`) and generates the deployable website in `out/`.

## Vercel

1. Push the source folder to a Git repository.
2. Import the repository into Vercel.
3. Use the default Next.js build command: `npm run build`.
4. Deploy.

## GitHub Pages or another static host

1. Run `npm install`.
2. Run `npm run build`.
3. Publish the contents of `out/` to the static host.
4. For GitHub Pages under a repository subpath, configure the appropriate `basePath` and `assetPrefix` in `next.config.ts` before building.

## Pre-deployment validation

```bash
npm run lint
npm run typecheck
npm run build
```
