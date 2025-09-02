import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Performant React with Context tutorial!</h1>

      <div>
        <Link
          href="/performant-react-with-context/bad-design"
          className="tutorial-item"
        >
          Bad Design
        </Link>
      </div>
    </div>
  );
}
