import * as React from "react";
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

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="font-montserrat text-xl">Create an account</CardTitle>
        <CardDescription>Enter your details below to create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="signup-name">Full name</FieldLabel>
              <Input id="signup-name" type="text" placeholder="Jane Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="signup-email">Email</FieldLabel>
              <Input
                id="signup-email"
                type="email"
                placeholder="hello@bangicode.ma"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We won&apos;t share it with anyone.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="signup-password">Password</FieldLabel>
              <Input id="signup-password" type="password" required />
              <FieldDescription>Must be at least 8 characters long.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="signup-confirm">Confirm password</FieldLabel>
              <Input id="signup-confirm" type="password" required />
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" className="w-full">
                  Create account
                </Button>
                <Button variant="secondary" type="button" className="w-full">
                  Sign up with Google
                </Button>
                <FieldDescription className="text-center">
                  Already have an account?{" "}
                  <a href="#" className="text-accent underline-offset-4 hover:underline">
                    Sign in
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
