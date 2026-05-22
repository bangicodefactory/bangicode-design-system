import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/bangicode/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bangicode/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bangicode/ui/field";
import { Input } from "@/registry/bangicode/ui/input";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="font-montserrat text-xl">Sign in to your account</CardTitle>
          <CardDescription>Enter your email below to sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="hello@bangicode.ma" required />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block font-hanken-grotesk text-sm text-accent underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
                <Button variant="secondary" type="button" className="w-full">
                  Sign in with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="text-accent underline underline-offset-4">
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
