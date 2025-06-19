import { SidebarProvider } from "~/components/ui/sidebar";
import { HomeNavbar } from "../components/home-navbar/home-navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        {children}
      </div>
    </SidebarProvider>
  );
};
