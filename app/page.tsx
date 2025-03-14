import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          textAlign: 'center',
          textDecoration: 'underline',
        }}
      >
        <h1>Welcome to the Advanced-React Tutorials...</h1>
      </div>
      <div
        style={{
          padding: '20px',
          display: 'flex',
        }}
      >
        <Link
          href="/prevent-renders/children-as-props"
          className="tutorial-item"
        >
          Prevent renderes composition:
          <br /> Children as Props
        </Link>
      </div>
    </div>
  );
}
