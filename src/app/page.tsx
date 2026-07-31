'use client';

import { useRouter } from 'next/navigation';

const COLORS = {
  bg: '#020205',
  gold: '#d4af37',
  goldDark: '#b58d1d',
  text: 'rgba(255,255,255,.92)',
  subtext: 'rgba(255,255,255,.55)',
};

const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME ?? 'Atlas';

const APP_EMOJI =
  process.env.NEXT_PUBLIC_APP_EMOJI ?? '📚';

export default function HomePage() {
  const router = useRouter();

  function handleEnter() {
    router.push('/app');
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: COLORS.bg,
        color: COLORS.text,
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 420,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 56,
            marginBottom: 20,
          }}
        >
          {APP_EMOJI}
        </div>

        <h1
          style={{
            color: COLORS.gold,
            fontSize: 34,
            marginBottom: 12,
            fontWeight: 800,
          }}
        >
          {APP_NAME}
        </h1>

        <p
          style={{
            color: COLORS.subtext,
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          Atlas Knowledge Platform
          <br />
          Research • Knowledge • Intelligence
        </p>

        <button
          onClick={handleEnter}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: 14,
            border: 'none',
            cursor: 'pointer',
            fontSize: 16,
            fontWeight: 700,
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
            color: '#000',
          }}
        >
          Enter Atlas
        </button>
      </div>
    </main>
  );
}
