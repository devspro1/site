import { ImageResponse } from 'next/og'

// export const runtime = 'edge'

export const alt = 'DEVS - AI-Driven Engineering'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#050505',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'rgba(79, 70, 229, 0.2)', // indigo-600 with 20% opacity
            filter: 'blur(120px)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              background: 'linear-gradient(to bottom right, #6366f1, #9333ea)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <span style={{ color: 'white', fontSize: '32px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>/</span>
          </div>
          <span style={{ fontSize: '48px', color: 'white', fontWeight: 'bold', letterSpacing: '-0.05em' }}>DEVS</span>
        </div>

        <h1
          style={{
            fontSize: '84px',
            fontFamily: 'sans-serif',
            color: 'white',
            lineHeight: 1.1,
            fontWeight: 'bold',
            letterSpacing: '-0.05em',
            marginBottom: '32px',
            zIndex: 10,
          }}
        >
          Ship enterprise-grade<br/>software <span style={{ color: '#818cf8' }}>faster.</span>
        </h1>
        <p
          style={{
            fontSize: '32px',
            fontFamily: 'sans-serif',
            color: '#a1a1aa',
            lineHeight: 1.5,
            maxWidth: '900px',
            zIndex: 10,
          }}
        >
          We accelerate Time-to-Market for funded startups, FinTech, and B2B SaaS using advanced AI tools and deep Python expertise.
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
