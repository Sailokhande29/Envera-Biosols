import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">Envera BioSols</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-xl">
        Digital Ledger Management for Your Business. Track customers, manage transactions, and generate reports with ease.
      </p>
      <a
        href="/dashboard"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Go to Dashboard
      </a>
    </main>
  );
}
