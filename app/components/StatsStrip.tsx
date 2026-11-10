const stats = [
  { value: "10 Years", label: "of experience" },
  { value: "1,500+", label: "Details completed" },
  { value: "40+", label: "5-star reviews" },
  { value: "In Shop", label: "or mobile services" }
];

/** The four numbers under the home page hero. Dividers come from a 1px gap over the line color. */
export function StatsStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <dl className="mx-auto grid max-w-[1280px] gap-px bg-line sm:grid-cols-2 lg:grid-cols-4 2xl:max-w-[1536px]">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col-reverse justify-end bg-surface px-6 py-7 lg:py-9">
            <dt className="mt-1 text-sm text-muted">{label}</dt>
            <dd className="text-[2.5rem] font-extrabold leading-none text-ink">
              {value.endsWith("+") ? (
                <>
                  {value.slice(0, -1)}
                  <span className="text-accent">+</span>
                </>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
