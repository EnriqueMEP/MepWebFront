import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex items-center justify-between pt-[var(--cactus-tokens-semantic-gap-gap-12)] pr-[var(--cactus-tokens-semantic-gap-gap-12)] pb-[var(--cactus-tokens-semantic-gap-gap-12)] pl-[var(--cactus-tokens-semantic-gap-gap-12)] relative self-stretch w-full flex-[0_0_auto] mt-[-1175px]">
      <div className="flex flex-col w-[512px] items-end justify-end gap-12 relative">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex h-[var(--badge-badge-badge-lg-height)] items-center justify-center pt-[var(--badge-badge-text-padding-badge-lg-pady)] pr-[var(--badge-badge-text-padding-badge-lg-padx)] pb-[var(--badge-badge-text-padding-badge-lg-pady)] pl-[var(--badge-badge-text-padding-badge-lg-padx)] relative rounded-[var(--badge-badge-text-badge-text-border-radius)] border border-solid border-[color:var(--badge-badge-badge-text-border-color)]">
            <span className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-cactus-label-large font-[number:var(--cactus-label-large-font-weight)] text-[color:var(--badge-badge-badge-outline-text-color)] text-[length:var(--cactus-label-large-font-size)] tracking-[var(--cactus-label-large-letter-spacing)] leading-[var(--cactus-label-large-line-height)] whitespace-nowrap [font-style:var(--cactus-label-large-font-style)]">
              Nuevo
            </span>
          </div>

          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="self-stretch mt-[-1.00px] text-[length:var(--cactus-display-large-font-size)] leading-[var(--cactus-display-large-line-height)] relative font-cactus-display-large font-[number:var(--cactus-display-large-font-weight)] text-cactus-tokens-semantic-color-on-surface tracking-[var(--cactus-display-large-letter-spacing)] [font-style:var(--cactus-display-large-font-style)]">
              Avanzamos
              <br />
              comprometidos
            </h1>

            <p className="self-stretch font-cactus-title-large text-[length:var(--cactus-title-large-font-size)] leading-[var(--cactus-title-large-line-height)] relative font-[number:var(--cactus-title-large-font-weight)] text-cactus-tokens-semantic-color-on-surface tracking-[var(--cactus-title-large-letter-spacing)] [font-style:var(--cactus-title-large-font-style)]">
              Nuestra compañía refuerza su identidad de marca comunicando así su
              crecimiento y solidez dentro del mercado. Comprometiéndose a
              seguir aportando valor a futuro.
            </p>
          </div>
        </div>

        <button
          className="h-[var(--buttons-button-button-xl-height)] pt-[var(--buttons-button-button-pady)] pr-[var(--buttons-button-button-xl-padx)] pb-[var(--buttons-button-button-pady)] pl-[var(--buttons-button-button-xl-padx)] inline-flex items-center justify-center gap-[var(--buttons-button-button-gap)] relative bg-[color:var(--buttons-button-primary-backgorund-button-primary-default-bg-color)] cursor-pointer transition-colors duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--buttons-button-primary-backgorund-button-primary-default-bg-color)]"
          type="button"
          aria-label="Conocer más sobre nuestros compromisos"
        >
          <span className="font-cactus-button-xl font-[number:var(--cactus-button-xl-font-weight)] text-[length:var(--cactus-button-xl-font-size)] leading-[var(--cactus-button-xl-line-height)] relative flex items-center justify-center w-fit text-[color:var(--buttons-button-button-text-color)] text-center tracking-[var(--cactus-button-xl-letter-spacing)] whitespace-nowrap [font-style:var(--cactus-button-xl-font-style)]">
            Conocer más
          </span>
        </button>
      </div>

      <div
        className="relative w-[646px] h-[362px]"
        role="img"
        aria-label="Imagen representativa de nuestros compromisos"
      />
    </section>
  );
};
