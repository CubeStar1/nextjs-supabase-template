import { Metadata } from "next"
import { AppSidebar } from "@/components/global/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Breadcrumbs } from "@/components/navigation/breadcrumbs"

export const metadata: Metadata = {
  title: "DormTrack",
  description: "A modern platform for hostel management",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
    <AppSidebar/>
    <SidebarInset>
        <Breadcrumbs />
        <main className="flex-1 container mx-auto py-6 px-4">
        {children}
      </main>
    </SidebarInset>
  </SidebarProvider>
  )
} 