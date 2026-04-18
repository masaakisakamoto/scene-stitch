import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()

function exists(relPath) {
  return fs.existsSync(path.join(root, relPath))
}

function readFileMaybe(relPath) {
  const filePath = path.join(root, relPath)
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : ''
}

function readEnvValue(key) {
  const envFiles = ['.env.local', '.env']
  for (const file of envFiles) {
    const content = readFileMaybe(file)
    const line = content
      .split(/\r?\n/)
      .find((entry) => entry.startsWith(`${key}=`))
    if (line) {
      return line.slice(key.length + 1).trim()
    }
  }
  return process.env[key] ?? ''
}

const checks = [
  ['app/layout.tsx', exists('app/layout.tsx')],
  ['app/opengraph-image.tsx', exists('app/opengraph-image.tsx')],
  ['app/robots.ts', exists('app/robots.ts')],
  ['app/sitemap.ts', exists('app/sitemap.ts')],
  ['app/manifest.ts', exists('app/manifest.ts')],
  ['app/changelog/page.tsx', exists('app/changelog/page.tsx')],
  ['content/scenes/punk.mdx', exists('content/scenes/punk.mdx')],
  ['content/scenes/hip-hop.mdx', exists('content/scenes/hip-hop.mdx')],
  ['content/scenes/ura-hara.mdx', exists('content/scenes/ura-hara.mdx')],
  ['content/scenes/shibuya-kei.mdx', exists('content/scenes/shibuya-kei.mdx')],
  ['content/scenes/visual-kei.mdx', exists('content/scenes/visual-kei.mdx')],
  ['public/brand/scene-stitch-wordmark.svg', exists('public/brand/scene-stitch-wordmark.svg')],
  ['vercel.json', exists('vercel.json')],
]

const sceneDir = path.join(root, 'content', 'scenes')
const mdxCount = exists('content/scenes')
  ? fs.readdirSync(sceneDir).filter((name) => name.endsWith('.mdx')).length
  : 0

const rawSiteUrl = readEnvValue('NEXT_PUBLIC_SITE_URL')
const siteUrlOk =
  Boolean(rawSiteUrl) &&
  !rawSiteUrl.includes('example.com') &&
  !rawSiteUrl.includes('your-domain.com')

const gaId = readEnvValue('NEXT_PUBLIC_GA_ID')
const googleVerification = readEnvValue('GOOGLE_SITE_VERIFICATION')
const vercelAnalytics = readEnvValue('NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS')

let failed = false

console.log('\nSCENE/STITCH preflight\n')

for (const [label, ok] of checks) {
  console.log(`${ok ? '✓' : '✗'} ${label}`)
  if (!ok) failed = true
}

console.log(`\n${mdxCount >= 5 ? '✓' : '!'} MDX scene files: ${mdxCount}`)

if (!siteUrlOk) {
  console.log('! NEXT_PUBLIC_SITE_URL is not set yet. This is okay before domain setup, but set it before final go-live.')
} else {
  console.log(`✓ NEXT_PUBLIC_SITE_URL = ${rawSiteUrl}`)
}

console.log(gaId ? `✓ NEXT_PUBLIC_GA_ID = ${gaId}` : '! NEXT_PUBLIC_GA_ID is empty. Analytics is optional; add it after launch if needed.')
console.log(
  googleVerification
    ? '✓ GOOGLE_SITE_VERIFICATION is set.'
    : '! GOOGLE_SITE_VERIFICATION is empty. That is okay until you verify a URL-prefix property in Search Console.'
)
console.log(
  vercelAnalytics === 'true'
    ? '✓ Vercel Analytics is enabled.'
    : '! Vercel Analytics is disabled. Turn it on only when you want post-launch traffic visibility.'
)

console.log('\nRecommended final command sequence:')
console.log('1) npm install')
console.log('2) npm run preflight')
console.log('3) npm run typecheck')
console.log('4) npm run build')

if (failed) {
  console.log('\nPreflight found missing required files.')
  process.exit(1)
}

console.log('\nRequired files are in place.\n')
