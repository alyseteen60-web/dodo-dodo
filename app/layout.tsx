import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dodo | dodo",
  description: "Production Deployment\nDeployment\napp-4jji6mpby-workeg.vercel.app\nDomains\napp-web-psi-ashen.vercel.app\nStatus\nReady\nCreated\n18m ago by analolo6000-2808\n\nanalolo6000-2808 Avatar\nSource\nmain\n3fcabe6\nfix: escape metadata title and description with JSON.stringify in all …\n\nDeployment Settings\n3 Recommendations\nTo deploy to Production, drop your project anywhere on this page, connect to git, or run vercel --prod via the CLI.\nProduction Checklist\n\n0/5\nConnect Git Repository\nAdd Custom Domain\nPreview Deployment\nEnable Web Analytics\nEnable Speed Insights\nObservability\n\n6h\nEdge Requests\n162\n",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}