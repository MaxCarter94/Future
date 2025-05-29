import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import './ui/global.css'

export default function Page() {
  return (
  <>
  <head>
    <title>Good Kebab</title>
  </head>
    <body>
      <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          Mr Kebab
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded hover:bg-red-100 transition">
            ajouter restaurant
          </button>
          <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded hover:bg-red-100 transition">
            se connecter
          </button>
        </div>
      </nav>
    <main className="flex min-h-screen flex-col p-3">
      <p className={`text-xl text-gray-800 md:leading-normal`}>
            <strong>Trouve les kebabs les moins chers autour de toi!</strong> 
      </p>
      <div className="h-8"></div>
    </main>
    <footer className="bg-gray-800 text-white px-6 py-8 mt-12">
     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
       <div>
          <h2 className="text-lg font-semibold mb-2">À propos</h2>
          <p className="text-sm text-gray-300">
            Mr Kebab est une plateforme dédiée à la découverte et au partage des meilleurs kebabs autour de vous.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm text-gray-300">Email : contact@mrkebab.fr</p>
          <p className="text-sm text-gray-300">Téléphone : +33 1 23 45 67 89</p>
        </div>
      </div>
    </footer>
    </body>
    </>
  );
}
