import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0f2439 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: 700,
          color: '#D4AF37',
          margin: 0,
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: '2rem', margin: '20px 0' }}>页面未找到</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
        抱歉，您访问的页面不存在
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 30px',
          background: '#D4AF37',
          color: '#1E3A5F',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 600,
        }}
      >
        返回首页
      </Link>
    </div>
  )
}
