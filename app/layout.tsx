import 'leaflet/dist/leaflet.css';

export const metadata = {
  title: 'Leaflet Map Example',
  description: 'An interactive map using Leaflet in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}