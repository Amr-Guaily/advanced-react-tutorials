import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Performant React with Context tutorial!</h1>

      <div className="flex gap-4 my-5">
        <Link
          href="/performant-react-with-context/bad-design"
          className="tutorial-item"
        >
          Bad Design
        </Link>

        <Link
          href="/performant-react-with-context/good-design"
          className="tutorial-item"
        >
          Good Design
        </Link>
      </div>
    </div>
  );
}
