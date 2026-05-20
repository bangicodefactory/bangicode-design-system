"use client";

import Image from "next/image";
import { AlertCircle, Info, Settings, User } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Toaster } from "@/components/ui/sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  return (
    <TooltipProvider>
      <Toaster />
      <main className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Header */}
          <header className="flex flex-col gap-4 border-b border-border pb-8">
            <Image src="/logo.svg" alt="Bangicode" width={280} height={44} priority />
            <p className="font-jetbrains-mono text-xs uppercase tracking-widest text-muted-foreground">
              Design system · v0.1.0 · alpha
            </p>
            <h1 className="font-montserrat text-5xl font-bold tracking-tight text-foreground">
              Engineered trust.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Bangicode&apos;s brand and component registry. Built on{" "}
              <a
                href="https://github.com/google-labs-code/design.md"
                className="text-secondary underline-offset-4 hover:underline"
              >
                DESIGN.md
              </a>
              , shadcn/ui, and Next.js. One source of truth, one component layer, every Bangicode
              project in sync.
            </p>
            <div className="flex gap-3 pt-2">
              <Button variant="primary">View registry</Button>
              <Button variant="secondary">Read the brief</Button>
            </div>
          </header>

          {/* Color tokens */}
          <section className="space-y-6">
            <h2 className="font-montserrat text-2xl font-semibold">Color</h2>
            <p className="text-muted-foreground">
              Sampled directly from DESIGN.md tokens — change the spec and these swatches re-theme
              on the next build.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { name: "primary", label: "Primary Navy", token: "#000c2c" },
                { name: "primary-container", label: "Primary Container", token: "#002058" },
                { name: "secondary", label: "Secondary", token: "#016397" },
                { name: "secondary-container", label: "Sky Container", token: "#80c5fe" },
                { name: "surface", label: "Surface", token: "#f7f9ff" },
                { name: "surface-container", label: "Surface Container", token: "#eceef4" },
                { name: "outline-variant", label: "Outline Variant", token: "#c5c6d1" },
                { name: "error", label: "Error", token: "#ba1a1a" },
              ].map((c) => (
                <div key={c.name} className="overflow-hidden rounded-sm border border-border">
                  <div className="h-20 w-full" style={{ backgroundColor: `var(--color-${c.name})` }} />
                  <div className="space-y-1 p-3">
                    <p className="text-sm font-medium">{c.label}</p>
                    <p className="font-jetbrains-mono text-xs text-muted-foreground">{c.token}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-6">
            <h2 className="font-montserrat text-2xl font-semibold">Typography</h2>
            <p className="text-muted-foreground">
              Montserrat for headlines · Hanken Grotesk for body · JetBrains Mono for technical
              artifacts.
            </p>
            <div className="space-y-4 rounded-sm border border-border bg-card p-6">
              <p className="font-montserrat text-5xl font-bold tracking-tight">
                Display lg — Engineered trust.
              </p>
              <p className="font-montserrat text-3xl font-semibold tracking-tight">
                Headline lg — Built for the long haul.
              </p>
              <p className="font-hanken-grotesk text-base">
                Body md — Bangicode ships software with the care of a master craftsman and the
                discipline of a senior engineering org.
              </p>
              <p className="font-jetbrains-mono text-xs uppercase tracking-widest text-muted-foreground">
                Label caps — Technical artifact
              </p>
            </div>
          </section>

          {/* Buttons */}
          <section className="space-y-6">
            <h2 className="font-montserrat text-2xl font-semibold">Buttons</h2>
            <p className="text-muted-foreground">
              Sentence case. 4px radius. Sky Blue focus ring. Built from shadcn/Radix Slot +
              class-variance-authority.
            </p>
            <div className="flex flex-wrap items-center gap-3 rounded-sm border border-border bg-card p-6">
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete</Button>
              <Button variant="link">Learn more</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-sm border border-border bg-card p-6">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </section>

          {/* Form primitives */}
          <section className="space-y-6">
            <h2 className="font-montserrat text-2xl font-semibold">Form primitives</h2>
            <p className="text-muted-foreground">
              Surface fill, outline-variant border, 4px radius. Sky Blue focus ring throughout.
            </p>
            <div className="grid gap-6 rounded-sm border border-border bg-card p-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="showcase-input">Email address</Label>
                <Input id="showcase-input" type="email" placeholder="hello@bangicode.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="showcase-select">Plan</Label>
                <Select>
                  <SelectTrigger id="showcase-select">
                    <SelectValue placeholder="Choose a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="showcase-textarea">Message</Label>
                <Textarea id="showcase-textarea" placeholder="Tell us about your project…" rows={3} />
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Checkbox id="showcase-checkbox" />
                  <Label htmlFor="showcase-checkbox">I agree to the terms</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="showcase-switch" />
                  <Label htmlFor="showcase-switch">Notifications</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Billing cycle</Label>
                <RadioGroup defaultValue="monthly" className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="monthly" id="r-monthly" />
                    <Label htmlFor="r-monthly">Monthly</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="annual" id="r-annual" />
                    <Label htmlFor="r-annual">Annual</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </section>

          {/* Disclosure primitives */}
          <section className="space-y-6">
            <h2 className="font-montserrat text-2xl font-semibold">Disclosure primitives</h2>
            <p className="text-muted-foreground">
              Dialog, Sheet, Dropdown, Popover, Tabs, Accordion — all Radix-based, Bangicode-themed.
            </p>
            <div className="space-y-6 rounded-sm border border-border bg-card p-6">
              {/* Tabs */}
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                  <TabsTrigger value="api">API</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <p className="text-sm text-muted-foreground">
                    Sky Blue 4px underline on active tab. No card chrome.
                  </p>
                </TabsContent>
                <TabsContent value="usage">
                  <p className="font-jetbrains-mono text-xs text-muted-foreground">
                    npx shadcn add design.bangicode.com/r/tabs.json
                  </p>
                </TabsContent>
                <TabsContent value="api">
                  <p className="text-sm text-muted-foreground">TabsList · TabsTrigger · TabsContent</p>
                </TabsContent>
              </Tabs>

              <Separator />

              {/* Accordion */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the Bangicode design system?</AccordionTrigger>
                  <AccordionContent>
                    A DESIGN.md-driven token pipeline feeding a private shadcn registry — one source
                    of truth for every Bangicode product.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I add a component to my project?</AccordionTrigger>
                  <AccordionContent>
                    Run <code className="font-jetbrains-mono text-xs">npx shadcn add design.bangicode.com/r/&lt;name&gt;.json</code>{" "}
                    in your Next.js project.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Separator />

              {/* Trigger row */}
              <div className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">Open dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm action</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. Please review before continuing.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="ghost">Cancel</Button>
                      <Button variant="primary">Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="secondary">Open sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Side panel</SheetTitle>
                      <SheetDescription>
                        Right-side sheet using the Dialog primitive.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="p-6 pt-0">
                      <p className="text-sm text-muted-foreground">Panel content goes here.</p>
                    </div>
                  </SheetContent>
                </Sheet>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary">
                      <Settings className="h-4 w-4" />
                      Options
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="secondary">Open popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="text-sm font-medium">Popover heading</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Surface-container-high bg, 4px radius, no shadow.
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </section>

          {/* Feedback primitives */}
          <section className="space-y-6">
            <h2 className="font-montserrat text-2xl font-semibold">Feedback primitives</h2>
            <p className="text-muted-foreground">
              Alert, Badge, Tooltip, and Toast — all token-driven, no raw colours.
            </p>
            <div className="space-y-4 rounded-sm border border-border bg-card p-6">
              <Alert>
                <AlertTitle>Default alert</AlertTitle>
                <AlertDescription>
                  Informational message with border-only depth, no shadow.
                </AlertDescription>
              </Alert>
              <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>Sky Blue tinted alert for informational states.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Tech Red reserved for error states only — never decorative.</AlertDescription>
              </Alert>

              <Separator />

              <div className="flex flex-wrap items-center gap-3">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Error</Badge>
              </div>

              <Separator />

              <div className="flex flex-wrap items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Surface-container-high, 4px radius, body-sm</TooltipContent>
                </Tooltip>

                <Button
                  variant="secondary"
                  onClick={() => toast("Registry updated", { description: "All components rebuilt successfully." })}
                >
                  Show toast
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => toast.error("Build failed", { description: "Check the output for details." })}
                >
                  Error toast
                </Button>
              </div>
            </div>
          </section>

          {/* Layout primitives */}
          <section className="space-y-6">
            <h2 className="font-montserrat text-2xl font-semibold">Layout primitives</h2>
            <p className="text-muted-foreground">
              Card, Separator, Avatar, Skeleton — the structural building blocks.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="" alt="Ahmed C" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Ahmed Chioua</CardTitle>
                      <CardDescription>Founder · Bangicode</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    8px radius container, outline-variant border, 24px internal padding. Montserrat
                    title, Hanken Grotesk body.
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Badge variant="secondary">Pro</Badge>
                  <Badge variant="outline">Admin</Badge>
                </CardFooter>
              </Card>

              <div className="space-y-4 rounded-sm border border-border bg-card p-6">
                <p className="font-montserrat text-sm font-semibold">Skeleton loading state</p>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-sm" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-24 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <p className="text-sm font-medium">Separator — horizontal and vertical</p>
              <Separator className="my-4" />
              <div className="flex h-8 items-center gap-4 text-sm text-muted-foreground">
                <span>Overview</span>
                <Separator orientation="vertical" />
                <span>Usage</span>
                <Separator orientation="vertical" />
                <span>API</span>
              </div>
            </div>
          </section>

          <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
            DESIGN.md v0.1 · shadcn registry · Next.js
          </footer>
        </div>
      </main>
    </TooltipProvider>
  );
}
