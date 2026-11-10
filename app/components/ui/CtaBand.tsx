import type { ReactNode } from "react";
import { Button } from "./Button";

type Props = {
  title: ReactNode;
  lead?: ReactNode;
  /** Replaces the default Book Online + Send an Inquiry buttons. */
  actions?: ReactNode;
};

/** The closing call to action: a surface card with a headline and the two standard buttons. */
export function CtaBand({ title, lead, actions }: Props) {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-line bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12">
      <div className="max-w-2xl">
        <h2 className="text-title-sm font-bold text-ink md:text-title">{title}</h2>
        {lead && <p className="mt-3 text-lead text-muted">{lead}</p>}
      </div>
      <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
        {actions ?? (
          <>
            <Button href="/booking" size="lg">
              Book Online
            </Button>
            <Button href="/inquiry" variant="secondary" size="lg">
              Send an Inquiry
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
