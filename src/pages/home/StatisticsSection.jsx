import React from "react";
import IMG2 from "./IMG-2.png";
import IMG3 from "./IMG-3.png";
import IMG4 from "./IMG-4.png";
import IMG from "./IMG.png";
import { RiArrowRightLine } from "./RiArrowRightLine";

const projectsData = [
  {
    id: 1,
    image: IMG,
    badge: "Ing. de Detalle",
    title: 'Planta Fotovoltaica\n"Puerto Cruz I" de 21,15MWp',
    description: "",
  },
  {
    id: 2,
    image: IMG2,
    badge: "Ing. de Detalle",
    title: 'Planta Fotovoltaica\n"Puerto Cruz I" de 21,15MWp',
    description: "",
  },
  {
    id: 3,
    image: IMG3,
    badge: "Ing. de Detalle",
    title: 'Planta Fotovoltaica\n"Puerto Cruz I" de 21,15MWp',
    description: "",
  },
  {
    id: 4,
    image: IMG4,
    badge: "Ing. de Detalle",
    title: 'Planta Fotovoltaica\n"Puerto Cruz I" de 21,15MWp',
    description: "",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <article className="inline-flex flex-col h-[var(--card-card-vertical-height-card-height-vertical-xl)] items-start relative flex-[0_0_auto] shadow-cactus-elevation-light-02">
      <img
        className="relative w-60 h-[120px] object-cover"
        alt={`Project image for ${project.title.split("\n")[0]}`}
        src={project.image}
      />

      <div className="flex w-60 items-start gap-2.5 pt-[var(--card-card-vertical-padding-card-vertical-xl-pady)] pr-[var(--card-card-vertical-padding-card-vertical-xl-pady)] pb-[var(--card-card-vertical-padding-card-vertical-xl-pady)] pl-[var(--card-card-vertical-padding-card-vertical-xl-pady)] relative flex-1 grow bg-[color:var(--card-card-card-bg-color)] border-t [border-top-style:solid] border-[color:var(--card-card-card-border-color)]">
        <div className="flex flex-col items-end gap-[var(--cactus-tokens-semantic-padding-padding-06)] relative flex-1 self-stretch grow">
          <div className="flex flex-col items-start gap-[var(--cactus-tokens-semantic-gap-gap-02)] relative flex-1 self-stretch w-full grow">
            <div className="inline-flex h-[var(--badge-badge-badge-sm-height)] items-center justify-center pt-[var(--badge-badge-text-padding-badge-sm-pady)] pr-[var(--badge-badge-text-padding-badge-sm-padx)] pb-[var(--badge-badge-text-padding-badge-sm-pady)] pl-[var(--badge-badge-text-padding-badge-sm-padx)] relative rounded-[var(--badge-badge-text-badge-text-border-radius)] border border-solid border-[color:var(--badge-badge-badge-outline-border-color)] min-h-[var(--cactus-tokens-semantic-height-height-06)]">
              <span className="w-fit mt-[-3.00px] mb-[-1.00px] text-[color:var(--badge-badge-badge-outline-text-color)] text-[length:var(--cactus-label-small-font-size)] leading-[var(--cactus-label-small-line-height)] relative font-cactus-label-small font-[number:var(--cactus-label-small-font-weight)] tracking-[var(--cactus-label-small-letter-spacing)] whitespace-nowrap [font-style:var(--cactus-label-small-font-style)]">
                {project.badge}
              </span>
            </div>

            <div className="flex flex-col items-start gap-[var(--cactus-tokens-semantic-gap-gap-01)] relative self-stretch w-full flex-[0_0_auto] mb-[-18.00px]">
              <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-cactus-title-medium-emphasis font-[number:var(--cactus-title-medium-emphasis-font-weight)] text-[color:var(--card-card-card-text-color)] text-[length:var(--cactus-title-medium-emphasis-font-size)] tracking-[var(--cactus-title-medium-emphasis-letter-spacing)] leading-[var(--cactus-title-medium-emphasis-line-height)] [font-style:var(--cactus-title-medium-emphasis-font-style)]">
                {project.title.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < project.title.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>

              <p className="flex-1 text-[color:var(--card-card-card-text-color)] text-[length:var(--cactus-body-medium-font-size)] leading-[var(--cactus-body-medium-line-height)] whitespace-nowrap [-webkit-line-clamp:1] relative self-stretch font-cactus-body-medium font-[number:var(--cactus-body-medium-font-weight)] tracking-[var(--cactus-body-medium-letter-spacing)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical] [font-style:var(--cactus-body-medium-font-style)]">
                {project.description}
              </p>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <button
              className="flex w-[142px] h-[var(--buttons-button-button-md-height)] items-center justify-center gap-[var(--buttons-button-button-gap)] pt-[var(--buttons-button-button-pady)] pr-[var(--buttons-button-button-md-padx)] pb-[var(--buttons-button-button-pady)] pl-[var(--buttons-button-button-md-padx)] relative bg-[color:var(--buttons-button-primary-backgorund-button-primary-default-bg-color)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-opacity"
              aria-label={`Ver más detalles del proyecto ${project.title.split("\n")[0]}`}
            >
              <span className="font-cactus-button-medium font-[number:var(--cactus-button-medium-font-weight)] text-[length:var(--cactus-button-medium-font-size)] leading-[var(--cactus-button-medium-line-height)] relative flex items-center justify-center w-fit text-[color:var(--buttons-button-button-text-color)] text-center tracking-[var(--cactus-button-medium-letter-spacing)] whitespace-nowrap [font-style:var(--cactus-button-medium-font-style)]">
                Ver más
              </span>

              <div className="flex w-5 h-5 items-center justify-center gap-2.5 p-2.5 relative aspect-[1]">
                <RiArrowRightLine className="!relative !w-5 !h-5 !mt-[-10.00px] !mb-[-10.00px] !ml-[-10.00px] !mr-[-10.00px] !aspect-[1]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export const StatisticsSection = () => {
  return (
    <section className="flex flex-col items-start gap-[var(--cactus-tokens-semantic-gap-gap-10)] relative self-stretch w-full flex-[0_0_auto] mt-[-1175px]">
      <header className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-cactus-display-medium font-[number:var(--cactus-display-medium-font-weight)] text-cactus-tokens-semantic-color-on-surface text-[length:var(--cactus-display-medium-font-size)] tracking-[var(--cactus-display-medium-letter-spacing)] leading-[var(--cactus-display-medium-line-height)] [font-style:var(--cactus-display-medium-font-style)]">
          Nuestros proyectos
        </h2>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-[var(--cactus-tokens-semantic-gap-gap-08)] relative self-stretch w-full flex-[0_0_auto]">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
