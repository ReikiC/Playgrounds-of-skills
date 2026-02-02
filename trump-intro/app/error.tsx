'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#B22222', marginBottom: '15px' }}>
        出错了！
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '25px' }}>
        抱歉，页面加载出现问题
      </p>
      <button
        onClick={reset}
        style={{
          padding: '12px 30px',
          fontSize: '1rem',
          background: '#1E3A5F',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#0f2439'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#1E3A5F'}
      >
        重试
      </button>
    </div>
  )
}
