import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  /** Add padding-top for pages without hero banners */
  withTopPadding?: boolean;
}

export const PageLayout = ({ 
  children, 
  className = "",
  withTopPadding = false 
}: PageLayoutProps) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <Navigation />
      {withTopPadding ? (
        <main className="pt-20">{children}</main>
      ) : (
        children
      )}
      <Footer />
    </div>
  );
};
