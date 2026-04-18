import { ImageResponse } from 'next/og'
import { brand } from '@/lib/brand'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: brand.colors.paper,
          color: brand.colors.ink,
          border: `2px solid ${brand.colors.line}`,
          borderRadius: '48px',
          fontSize: 54,
          fontWeight: 700,
          letterSpacing: '-0.08em',
        }}
      >
        {brand.mark}
      </div>
    ),
    {
      ...size,
    },
  )
}
