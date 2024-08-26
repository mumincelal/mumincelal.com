import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image src="/next.svg" alt="logo" width={300} height={300} />
      <h1 className="text-6xl font-bold">Welcome to Next.js</h1>
      <p className="mt-3 text-2xl">
        Get started by editing{" "}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          pages/index.tsx
        </code>
      </p>
    </div>
  );
}
