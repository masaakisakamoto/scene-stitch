import { ImageResponse } from 'next/og'
import { brand } from '@/lib/brand'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
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
          border: `1px solid ${brand.colors.line}`,
          borderRadius: '16px',
          fontSize: 22,
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
