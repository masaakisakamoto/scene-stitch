import { ImageResponse } from 'next/og'
import { brand, ogDefaults } from '@/lib/brand'

type OgCardProps = {
  eyebrow: string
  title: string
  subtitle: string
  metaLine?: string
  label?: string
}

export function createOgImage({ eyebrow, title, subtitle, metaLine, label }: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background: brand.colors.paper,
          color: brand.colors.ink,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: `1px solid ${brand.colors.line}`,
            borderRadius: '28px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div
              style={{
                fontSize: 22,
                textTransform: 'uppercase',
                letterSpacing: '0.28em',
                color: brand.colors.muted,
              }}
            >
              {eyebrow}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '64px', height: '1px', background: brand.colors.ink }} />
              <div style={{ fontSize: 24, letterSpacing: '0.18em', fontWeight: 700 }}>{brand.mark}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '980px' }}>
            <div
              style={{
                fontSize: 94,
                lineHeight: 0.96,
                letterSpacing: '-0.05em',
                fontWeight: 700,
              }}
            >
              {title}
            </div>
            <div
              style={{
                maxWidth: '880px',
                fontSize: 30,
                lineHeight: 1.35,
                color: brand.colors.muted,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: 24, color: brand.colors.muted }}>
              {metaLine ?? brand.socialByline}
            </div>
            <div style={{ width: '420px', height: '1px', background: brand.colors.line }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
            {label ? (
              <div
                style={{
                  fontSize: 18,
                  textTransform: 'uppercase',
                  letterSpacing: '0.24em',
                  color: brand.colors.muted,
                }}
              >
                {label}
              </div>
            ) : null}
            <div style={{ fontSize: 26, letterSpacing: '0.18em', fontWeight: 700 }}>{brand.name}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogDefaults.size,
    },
  )
}
