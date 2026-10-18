import React from "react";
import AppShell from "@/components/commons/AppShell";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import Home from "@/components/views/Home";

export default function App() {
  return (
    <AppShell>
      <LandingPageLayout>
        <Home />
      </LandingPageLayout>
    </AppShell>
  );
}
