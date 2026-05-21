import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ComponentNav } from "./_components/component-nav";

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-screen-xl items-center gap-4 px-6">
          <Link href="/" className="mr-4 shrink-0">
            <Image src="/logo.svg" alt="Bangicode" width={140} height={22} priority />
          </Link>
          <span className="text-sm text-muted-foreground">Components</span>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-screen-xl flex-1 gap-0 px-6">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border py-8 pr-6 lg:block">
          <ComponentNav />
        </aside>

        <main className="min-w-0 flex-1 py-10 lg:pl-10">{children}</main>
      </div>
    </div>
  );
}
