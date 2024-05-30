export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div
          className="mx-auto py-5 px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: '70%' }}
        >
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              {`Welcome To My Project ( Hello World )`}
            </h1>
            <p className="text-md text-gray-600 mt-2">
              Welcome to Diar's Telemedicine App: A Fun Exploration of
              Cutting-Edge Technologies. Enjoy and Manage Bookings at
              www.baba.com!
            </p>
          </header>
          {children}
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2024 Diar's Application
      </footer>
    </div>
  );
}
