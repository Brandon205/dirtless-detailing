import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Confirmation",
  description: "Thank you for scheduling your auto detail with Dirt-Less Detailing.",
  alternates: { canonical: "https://www.dirtlessdetailing.com/confirmation" },
  robots: {
    index: false,
    follow: false
  }
};

export default function ConfirmationLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
