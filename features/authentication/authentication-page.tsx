import { PublicLayout } from "@/components/layout/public-layout";
import { AuthenticationIntro } from "@/components/cards/authentication-intro";
import { AccountUnavailableForm, type AccountField } from "@/components/forms/account-unavailable-form";
import styles from "@/components/marketplace.module.css";

export type AuthMode = "login" | "customer" | "professional" | "forgot" | "verify";

const content: Record<AuthMode, { title: string; sub: string; fields: AccountField[]; button: string }> = {
  login: { title: "Welcome back", sub: "Sign in to your Marketplace workspace.", fields: [{ label: "Email address", type: "email", placeholder: "you@example.com" }, { label: "Password", type: "password", placeholder: "Enter your password" }], button: "Sign in" },
  customer: { title: "Join as a customer", sub: "Create a space to find the services you need.", fields: [{ label: "Your name", type: "text", placeholder: "Name" }, { label: "Email address", type: "email", placeholder: "you@example.com" }, { label: "Password", type: "password", placeholder: "Create a password" }], button: "Create customer account" },
  professional: { title: "Join as a professional", sub: "Start building your independent practice on Marketplace.", fields: [{ label: "Your name", type: "text", placeholder: "Name" }, { label: "Email address", type: "email", placeholder: "you@example.com" }, { label: "Password", type: "password", placeholder: "Create a password" }], button: "Create professional account" },
  forgot: { title: "Reset your password", sub: "Enter your email address to request a reset link.", fields: [{ label: "Email address", type: "email", placeholder: "you@example.com" }], button: "Request reset link" },
  verify: { title: "Check your email", sub: "Email verification is not connected yet. No verification message has been sent.", fields: [{ label: "Verification code", type: "text", placeholder: "Code entry unavailable" }], button: "Verify email" },
};

function AuthLinks({ mode }: { mode: AuthMode }) {
  if (mode === "login") {
    return <>New to Marketplace? <a href="/signup/customer">Create an account</a><br /><a href="/forgot-password">Forgot password?</a></>;
  }
  if (mode === "forgot" || mode === "verify") return <a href="/login">Return to sign in</a>;
  return <>Already have an account? <a href="/login">Log in</a><br />Looking for a different account? <a href={mode === "customer" ? "/signup/professional" : "/signup/customer"}>{mode === "customer" ? "Join as a professional" : "Join as a customer"}</a></>;
}

export function AuthenticationPage({ mode }: { mode: AuthMode }) {
  const current = content[mode];
  const audience = mode === "customer" || mode === "professional" ? mode : "general";
  return (
    <PublicLayout>
      <main className={styles.authWrap}>
        <AuthenticationIntro audience={audience} />
        <section className={styles.authMain}>
          <p className={styles.eyebrow}>{mode === "professional" ? "For professionals" : mode === "customer" ? "For customers" : "Your account"}</p>
          <h1>{current.title}</h1>
          <p>{current.sub}</p>
          <AccountUnavailableForm fields={current.fields} submitLabel={current.button} />
          <div className={styles.authFoot}><AuthLinks mode={mode} /></div>
        </section>
      </main>
    </PublicLayout>
  );
}

