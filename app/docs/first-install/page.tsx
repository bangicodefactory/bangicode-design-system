import type { Metadata } from "next";
import { CopyButton } from "@/app/components/_components/copy-button";

export const metadata: Metadata = {
  title: "First install — Bangicode",
  description: "Get a new Next.js project consuming the Bangicode registry in under 5 minutes.",
};

function CodeBlock({ code, lang = "bash" }: { code: string; lang?: string }) {
  return (
    <div className="group relative flex items-start gap-2 rounded-sm border border-border bg-muted px-4 py-3">
      <code className="flex-1 font-mono text-sm text-foreground whitespace-pre">{code}</code>
      <CopyButton value={code} className="opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

export default function FirstInstallPage() {
  return (
    <article className="max-w-2xl space-y-10">
      <div className="space-y-2">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Getting started
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          First install
        </h1>
        <p className="text-base text-muted-foreground">
          From a blank Next.js project to a fully Bangicode-themed UI in under 5 minutes.
        </p>
      </div>

      {/* Step 1 */}
      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-foreground">
          1. Create a Next.js app
        </h2>
        <CodeBlock code={`npx create-next-app@latest my-app --typescript --tailwind --app\ncd my-app`} />
      </section>

      {/* Step 2 */}
      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-foreground">
          2. Initialise shadcn
        </h2>
        <p className="text-sm text-muted-foreground">
          Point it at the Bangicode registry. When prompted for the base URL, enter{" "}
          <code className="font-mono text-xs text-foreground">https://design.bangicode.ma</code>.
        </p>
        <CodeBlock code="npx shadcn@latest init" />
      </section>

      {/* Step 3 */}
      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-foreground">
          3. Add your first components
        </h2>
        <CodeBlock code={`npx shadcn@latest add https://design.bangicode.ma/r/button.json\nnpx shadcn@latest add https://design.bangicode.ma/r/input.json\nnpx shadcn@latest add https://design.bangicode.ma/r/card.json`} />
        <p className="text-sm text-muted-foreground">
          Each command drops the component source into{" "}
          <code className="font-mono text-xs text-foreground">components/ui/</code>. You own the code — edit freely.
        </p>
      </section>

      {/* Step 4 */}
      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-foreground">
          4. Copy the theme files
        </h2>
        <p className="text-sm text-muted-foreground">
          Components use Bangicode CSS custom properties. Copy both theme files from the design system repo into your project:
        </p>
        <CodeBlock code={`# from bangicode-design-system root:\ncp styles/theme.generated.css your-app/styles/\ncp styles/theme.css your-app/styles/`} lang="bash" />
        <p className="text-sm text-muted-foreground">
          Then import them in your global stylesheet:
        </p>
        <CodeBlock code={`/* app/globals.css */\n@import "./styles/theme.generated.css";\n@import "./styles/theme.css";`} lang="css" />
      </section>

      {/* Step 5 */}
      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-foreground">
          5. Build a quick form
        </h2>
        <CodeBlock code={`import { Button } from "@/components/ui/button";\nimport { Input } from "@/components/ui/input";\nimport { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";\n\nexport default function LoginPage() {\n  return (\n    <Card className="w-96">\n      <CardHeader>\n        <CardTitle>Sign in</CardTitle>\n      </CardHeader>\n      <CardContent className="space-y-4">\n        <Input type="email" placeholder="hello@bangicode.ma" />\n        <Input type="password" placeholder="Password" />\n        <Button variant="primary" className="w-full">Continue</Button>\n      </CardContent>\n    </Card>\n  );\n}`} lang="tsx" />
      </section>

      <section className="rounded-sm border border-border bg-card p-6 space-y-2">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tip</p>
        <p className="text-sm text-muted-foreground">
          Use the <a href="/components" className="text-foreground underline-offset-4 hover:underline">component library</a> to browse all 34 components and copy their install commands. The{" "}
          <a href="/docs/add-component" className="text-foreground underline-offset-4 hover:underline">add a component</a> guide explains how to extend the registry with your own.
        </p>
      </section>
    </article>
  );
}
