import React from "react";

export const ProjectsOverviewSection = () => {
  const statsData = [
    {
      value: "3,6Gw",
      label: "proyectados",
      description: "en el útimo año",
    },
    {
      value: "+25%",
      label: "Crecimiento anual",
      description: "en últimos 5 años",
    },
    {
      value: "+68K hrs",
      label: "anuales",
      description: "de ingeniería",
    },
    {
      value: "+365 Mkw",
      label: "generados en el último año",
      description: "",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto] mt-[-1175px]">
      <header className="relative w-fit mt-[-1.00px] font-cactus-display-medium font-[number:var(--cactus-display-medium-font-weight)] text-cactus-tokens-semantic-color-on-surface text-[length:var(--cactus-display-medium-font-size)] tracking-[var(--cactus-display-medium-letter-spacing)] leading-[var(--cactus-display-medium-line-height)] whitespace-nowrap [font-style:var(--cactus-display-medium-font-style)]">
        MEP en cifras
      </header>

      <div className="flex items-start justify-between px-10 py-0 relative self-stretch w-full flex-[0_0_auto]">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-end justify-end gap-[var(--cactus-tokens-semantic-gap-gap-01)] relative flex-[0_0_auto]"
          >
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-cactus-display-medium-emphasis font-[number:var(--cactus-display-medium-emphasis-font-weight)] text-cactus-tokens-semantic-color-on-surface text-[length:var(--cactus-display-medium-emphasis-font-size)] text-center tracking-[var(--cactus-display-medium-emphasis-letter-spacing)] leading-[var(--cactus-display-medium-emphasis-line-height)] whitespace-nowrap [font-style:var(--cactus-display-medium-emphasis-font-style)]">
              {stat.value}
            </div>

            {index === 3 ? (
              <p className="flex items-center justify-center w-fit font-cactus-body-large text-[length:var(--cactus-body-large-font-size)] text-center leading-[var(--cactus-body-large-line-height)] whitespace-nowrap relative font-[number:var(--cactus-body-large-font-weight)] text-cactus-tokens-semantic-color-on-surface tracking-[var(--cactus-body-large-letter-spacing)] [font-style:var(--cactus-body-large-font-style)]">
                {stat.label}
              </p>
            ) : (
              <>
                <div className="flex items-center justify-center w-fit text-[length:var(--cactus-display-small-font-size)] text-center leading-[var(--cactus-display-small-line-height)] whitespace-nowrap relative font-cactus-display-small font-[number:var(--cactus-display-small-font-weight)] text-cactus-tokens-semantic-color-on-surface tracking-[var(--cactus-display-small-letter-spacing)] [font-style:var(--cactus-display-small-font-style)]">
                  {stat.label}
                </div>

                {stat.description && (
                  <div className="flex items-center justify-center w-fit font-cactus-heading-small font-[number:var(--cactus-heading-small-font-weight)] text-[length:var(--cactus-heading-small-font-size)] text-right leading-[var(--cactus-heading-small-line-height)] relative text-cactus-tokens-semantic-color-on-surface tracking-[var(--cactus-heading-small-letter-spacing)] whitespace-nowrap [font-style:var(--cactus-heading-small-font-style)]">
                    {stat.description}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
