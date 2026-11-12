"use client";

import { ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ConnectionNotice } from "@/components/feedback/connection-notice";
import { Button } from "@/components/ui/button";
import styles from "@/components/marketplace.module.css";

export type AccountField = {
  label: string;
  type: string;
  placeholder: string;
};

const accountDraftSchema = z.object({
  email: z.string().email().optional().or(z.literal("")),
  password: z.string().min(8).optional().or(z.literal("")),
  name: z.string().trim().min(1).optional().or(z.literal("")),
  verificationCode: z.string().trim().min(1).optional().or(z.literal("")),
});

type AccountDraftValues = z.infer<typeof accountDraftSchema>;

function getFieldName(label: string): keyof AccountDraftValues {
  if (label.toLowerCase().includes("email")) return "email";
  if (label.toLowerCase().includes("password")) return "password";
  if (label.toLowerCase().includes("verification")) return "verificationCode";
  return "name";
}

export function AccountUnavailableForm({
  fields,
  submitLabel,
}: {
  fields: AccountField[];
  submitLabel: string;
}) {
  const form = useForm<AccountDraftValues>({
    resolver: zodResolver(accountDraftSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      verificationCode: "",
    },
  });

  return (
    <>
      <ConnectionNotice
        title="Account services are not connected yet."
        copy="Account creation, sign-in, password reset, and email verification are unavailable. No authentication request will be sent."
      />
      <form
        aria-describedby="auth-disabled"
        onSubmit={form.handleSubmit(() => undefined)}
      >
        <fieldset disabled className={styles.disabledFieldset}>
          <div className={styles.formStack} style={{ marginTop: 20 }}>
            {fields.map((field) => (
              <label className={styles.formField} key={field.label}>
                {field.label}
                <input
                  {...form.register(getFieldName(field.label))}
                  className={styles.input}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </label>
            ))}
          </div>
          <div className={styles.authActions}>
            <Button className={styles.fullButton} type="submit" disabled>
              {submitLabel} <ArrowRight size={15} aria-hidden="true" />
            </Button>
            <p className={styles.finePrint} id="auth-disabled">
              Disabled: no authentication service is connected. This form
              cannot submit or store account information.
            </p>
          </div>
        </fieldset>
      </form>
    </>
  );
}

