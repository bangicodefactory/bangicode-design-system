import type { Metadata } from "next";
import { CopyButton } from "@/app/components/_components/copy-button";

export const metadata: Metadata = {
  title: "Add a component — Bangicode",
  description: "Step-by-step recipe for adding a new component to the Bangicode registry.",
};

function CodeBlock({ code, lang = "bash" }: { code: string; lang?: string }) {
  void lang;
  return (
    <div className="group relative flex items-start gap-2 rounded-sm border border-border bg-muted px-4 py-3">
      <code className="flex-1 font-mono text-sm text-foreground whitespace-pre">{code}</code>
      <CopyButton value={code} className="opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-primary font-mono text-xs font-bold text-primary-foreground">
          {n}
        </span>
        <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function AddComponentPage() {
  return (
    <article className="max-w-2xl space-y-10">
      <div className="space-y-2">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Getting started
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          Add a component
        </h1>
        <p className="text-base text-muted-foreground">
          Full walkthrough for adding a new component to the registry — from source file to
          published JSON artifact. Uses <code className="font-mono text-xs">badge</code> as the
          running example.
        </p>
      </div>

      <Step n={1} title="Create the source file">
        <p className="text-sm text-muted-foreground">
          All registry components live in{" "}
          <code className="font-mono text-xs text-foreground">registry/bangicode/ui/</code>. Copy
          the pattern from an existing component — <code className="font-mono text-xs">button.tsx</code> is the canonical template.
        </p>
        <CodeBlock code="# create the file\ntouch registry/bangicode/ui/my-component.tsx" />
        <p className="text-sm text-muted-foreground">
          Key rules inside the file:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground list-none pl-0">
          {[
            "Use shadcn aliases only (bg-primary, text-foreground, border-border) — never raw hex.",
            "Use cva() for variants and cn() from @/lib/utils for class merging.",
            "Use rounded-sm (4px) for interactive elements, rounded-lg (8px) for containers.",
            "No shadow-* utilities — use border-border for depth instead.",
            "Sentence case for all visible labels.",
          ].map((rule) => (
            <li key={rule} className="flex gap-2">
              <span className="font-mono text-xs text-muted-foreground mt-0.5">—</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </Step>

      <Step n={2} title="Re-export for the docs app">
        <p className="text-sm text-muted-foreground">
          The docs app imports from{" "}
          <code className="font-mono text-xs text-foreground">components/ui/</code>, not from the registry path directly. Create a thin re-export:
        </p>
        <CodeBlock code={`// components/ui/my-component.tsx\nexport { MyComponent } from "@/registry/bangicode/ui/my-component";`} lang="tsx" />
      </Step>

      <Step n={3} title="Register in registry.json">
        <p className="text-sm text-muted-foreground">
          Add an entry to <code className="font-mono text-xs text-foreground">registry.json</code>{" "}
          following the existing shape:
        </p>
        <CodeBlock code={`{\n  "name": "my-component",\n  "type": "registry:ui",\n  "title": "My component",\n  "description": "One sentence. What it is, key tokens used, Radix primitive if any.",\n  "dependencies": ["@radix-ui/react-something"],\n  "registryDependencies": ["button"],\n  "files": [\n    {\n      "path": "registry/bangicode/ui/my-component.tsx",\n      "type": "registry:ui",\n      "target": "components/ui/my-component.tsx"\n    }\n  ]\n}`} lang="json" />
      </Step>

      <Step n={4} title="Add to the typed catalogue">
        <p className="text-sm text-muted-foreground">
          <code className="font-mono text-xs text-foreground">lib/registry-data.ts</code> drives the
          component docs pages. Add an entry to{" "}
          <code className="font-mono text-xs text-foreground">REGISTRY_ITEMS</code>:
        </p>
        <CodeBlock code={`// lib/registry-data.ts — inside REGISTRY_ITEMS\n{\n  name: "my-component",\n  title: "My component",\n  description: "One sentence matching registry.json.",\n  category: "Feedback", // Form | Disclosure | Feedback | Layout | Dashboard | Marketing\n  dependencies: ["@radix-ui/react-something"],\n  registryDependencies: ["button"],\n},`} lang="ts" />
      </Step>

      <Step n={5} title="Add a showcase section">
        <p className="text-sm text-muted-foreground">
          Open <code className="font-mono text-xs text-foreground">app/page.tsx</code> and add a section that shows the component in its main states. Keep it minimal — the goal is visual verification, not a Storybook.
        </p>
        <CodeBlock code={`{/* My component */}\n<section className="space-y-4">\n  <h2 className="font-montserrat text-xl font-semibold">My component</h2>\n  <div className="flex flex-wrap gap-3">\n    <MyComponent />\n    <MyComponent variant="secondary" />\n  </div>\n</section>`} lang="tsx" />
      </Step>

      <Step n={6} title="Build and verify the registry artifact">
        <CodeBlock code="npm run build:registry" />
        <p className="text-sm text-muted-foreground">
          This runs <code className="font-mono text-xs">shadcn build</code> and writes{" "}
          <code className="font-mono text-xs text-foreground">public/r/my-component.json</code>.
          Verify the file exists and contains the right source:
        </p>
        <CodeBlock code="cat public/r/my-component.json | head -20" />
      </Step>

      <Step n={7} title="Test the install from the artifact">
        <p className="text-sm text-muted-foreground">
          In a separate test project, confirm the artifact installs correctly before pushing:
        </p>
        <CodeBlock code={`# in a throwaway next app:\nnpm run dev  # starts the registry server at localhost:3000\n\n# in the test project:\nnpx shadcn@latest add http://localhost:3000/r/my-component.json`} />
      </Step>

      <Step n={8} title="Commit and push">
        <p className="text-sm text-muted-foreground">
          CI will rebuild tokens, rebuild the registry, run the Next.js production build, and deploy to Netlify automatically on push to <code className="font-mono text-xs">main</code>.
        </p>
        <CodeBlock code={`git add registry/bangicode/ui/my-component.tsx \\\n  components/ui/my-component.tsx \\\n  registry.json lib/registry-data.ts app/page.tsx\ngit commit -m "feat: add my-component to registry"\ngit push origin main`} />
      </Step>

      <section className="rounded-sm border border-border bg-card p-6 space-y-3">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">Token reference</p>
        <p className="text-sm text-muted-foreground">
          All allowed values come from <code className="font-mono text-xs text-foreground">styles/theme.css</code> and the Tailwind utilities derived from it. The mapping from DESIGN.md M3 tokens to shadcn aliases is documented in <code className="font-mono text-xs text-foreground">CLAUDE.md §Material 3 → shadcn alias mapping</code>.
        </p>
      </section>
    </article>
  );
}
