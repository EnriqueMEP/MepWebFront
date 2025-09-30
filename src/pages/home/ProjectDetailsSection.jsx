import React from "react";

export const ProjectDetailsSection = () => {
  const projectData = [
    {
      date: "6 febrero, 2024",
      title: "INSTALACIONES ELÉCTRICAS EN PROYECTOS DE AGUA",
      description:
        "En los últimos años, el equipo de MEP-Projects ha desempeñado un papel fundamental, liderando la ejecución de importantes proyectos de tratamiento de aguas.\nLa interconexión entre el agua y la energía se revela no solo como una necesidad crítica, sino como un desafío. Esta complejidad no solo radica en la imperiosa necesidad de agua para la producción de energía, sino también en la interrelación entre la energía, el agua, el clima y el cambio climático.",
    },
    {
      date: "26 febrero, 2024",
      title: "LA METODOLOGÍA BIM EN MEP-PROJECTS",
      description:
        "El modelado BIM (Modelado de Información de Construcción), es un enfoque integral para la planificación, diseño, construcción y gestión de edificaciones e infraestructuras. Proporciona una representación digital en 3D de un proyecto, junto con información adicional que abarca aspectos físicos y funcionales de los elementos involucrados en la construcción y operación de una estructura.",
    },
    {
      date: "28 diciembre, 2024",
      title: "INGENIERÍA DE PLANTAS FOTOVOLTAICAS EN MEP-PROJECTS",
      description:
        "En este contexto dinámico, MEP-Projects se erige como líder en la ingeniería de plantas fotovoltaicas, ofreciendo soluciones integrales desde la ingeniería básica hasta la ingeniería de detalle. Nos enorgullece formar parte de esta revolución hacia un futuro más sostenible, proporcionando servicios que aborden la creciente complejidad de los proyectos de energía solar, aportando nuestra amplia experiencia en proyectos nacionales (España) e internacionales.",
    },
  ];

  return (
    <section
      className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto] mt-[-1175px]"
      role="region"
      aria-label="Detalles de proyectos"
    >
      {projectData.map((project, index) => (
        <article
          key={index}
          className="flex flex-col items-end gap-[var(--cactus-tokens-semantic-gap-gap-06)] pt-[var(--cactus-tokens-semantic-padding-padding-08)] pr-[var(--cactus-tokens-semantic-padding-padding-08)] pb-[var(--cactus-tokens-semantic-padding-padding-08)] pl-[var(--cactus-tokens-semantic-padding-padding-08)] relative flex-1 grow rounded-[var(--cactus-tokens-semantic-radius-radius-04)]"
        >
          <time
            className="self-stretch h-5 mt-[-2.00px] text-cactus-tokens-semantic-color-on-surface text-[length:var(--cactus-label-large-font-size)] leading-[var(--cactus-label-large-line-height)] relative font-cactus-label-large font-[number:var(--cactus-label-large-font-weight)] tracking-[var(--cactus-label-large-letter-spacing)] whitespace-nowrap [font-style:var(--cactus-label-large-font-style)]"
            dateTime={project.date}
          >
            {project.date}
          </time>

          <div className="flex flex-col items-start gap-[var(--cactus-tokens-semantic-gap-gap-04)] relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="self-stretch h-20 mt-[-1.00px] font-cactus-heading-medium-emphasis font-[number:var(--cactus-heading-medium-emphasis-font-weight)] text-[length:var(--cactus-heading-medium-emphasis-font-size)] leading-[var(--cactus-heading-medium-emphasis-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] relative text-cactus-tokens-semantic-color-on-surface tracking-[var(--cactus-heading-medium-emphasis-letter-spacing)] [font-style:var(--cactus-heading-medium-emphasis-font-style)]">
              {project.title}
            </h2>

            <p className="h-[51px] text-cactus-tokens-semantic-color-on-surface text-[length:var(--cactus-body-large-font-size)] leading-[var(--cactus-body-large-line-height)] [-webkit-line-clamp:2] relative self-stretch font-cactus-body-large font-[number:var(--cactus-body-large-font-weight)] tracking-[var(--cactus-body-large-letter-spacing)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical] [font-style:var(--cactus-body-large-font-style)]">
              {project.description.split("\n").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex < project.description.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          <button
            className="h-[var(--buttons-button-button-md-height)] pt-[var(--buttons-button-button-pady)] pr-[var(--buttons-button-button-md-padx)] pb-[var(--buttons-button-button-pady)] pl-[var(--buttons-button-button-md-padx)] inline-flex items-center justify-center gap-[var(--buttons-button-button-gap)] relative bg-[color:var(--buttons-button-primary-backgorund-button-primary-default-bg-color)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-opacity duration-200"
            type="button"
            aria-label={`Mostrar interés en ${project.title}`}
          >
            <span className="font-cactus-button-medium font-[number:var(--cactus-button-medium-font-weight)] text-[length:var(--cactus-button-medium-font-size)] leading-[var(--cactus-button-medium-line-height)] relative flex items-center justify-center w-fit text-[color:var(--buttons-button-button-text-color)] text-center tracking-[var(--cactus-button-medium-letter-spacing)] whitespace-nowrap [font-style:var(--cactus-button-medium-font-style)]">
              Me interesa
            </span>
          </button>
        </article>
      ))}
    </section>
  );
};
