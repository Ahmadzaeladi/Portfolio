import type { PropsWithChildren } from "react";

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans overflow-x-clip">
      {/* Ambient: blueprint grid + pastel glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black_35%,transparent_75%)]"></div>

        <div className="absolute -top-32 -right-32 w-96 sm:w-[32rem] h-96 sm:h-[32rem] rounded-full bg-sky-200/50 blur-3xl animate-blob"></div>
        <div className="absolute top-[35%] -left-32 w-96 sm:w-[28rem] h-96 sm:h-[28rem] rounded-full bg-indigo-200/45 blur-3xl animate-blob-reverse"></div>
        <div className="absolute top-[70%] right-[-10%] w-96 sm:w-[30rem] h-96 sm:h-[30rem] rounded-full bg-teal-200/40 blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 left-[20%] w-96 sm:w-[26rem] h-96 sm:h-[26rem] rounded-full bg-purple-200/35 blur-3xl animate-blob-reverse"></div>
      </div>
      {children}
    </div>
  );
}
