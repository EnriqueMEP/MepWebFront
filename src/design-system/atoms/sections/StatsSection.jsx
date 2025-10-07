import React from 'react';
import { useSemanticTokens } from '../../foundations/theme-hooks.js';
import { 
  breakpoints, 
  containers,
  grids,
  generateResponsiveStyles,
  generateContainerStyles,
  generateGridStyles
} from '../../foundations/layout.js';

/**
 * StatsSection - Sección de estadísticas
 * 
 * Props:
 * - title: Título de la sección (default: "MEP en cifras")
 * - stats: Array de objetos con { value, label, description? }
 */
const StatsSection = ({
  title = "MEP en cifras",
  stats = []
}) => {
  const semanticColors = useSemanticTokens();

  const statsStyles = `
    /* Statistics Section */
    .stats-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: relative;
      z-index: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .stats-section {
        gap: 2.78vw;
      }
    }

    .stats-title {
      width: 100%;
      text-align: left;
      margin-bottom: 1rem;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .stats-title {
        margin-bottom: 1.5vw;
      }
    }

    /* Stats Grid */
    ${generateGridStyles(grids.stats, 'stats-grid')}

    .stat-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 0.14vw;
      min-width: 150px;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .stat-item {
        min-width: auto;
        flex: 1;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: statsStyles }} />
      
      <section className="stats-section">
        <div className="stats-title">
          <div className="text-display-medium" style={{ color: semanticColors.content.text }}>
            {title}
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="text-display-medium-bold" style={{ 
                color: semanticColors.content.text,
                textAlign: 'center'
              }}>
                {stat.value}
              </div>
              
              <div className="text-display-small" style={{ 
                color: semanticColors.content.text,
                textAlign: 'center'
              }}>
                {stat.label}
              </div>
              
              {stat.description && (
                <div className="text-heading-small" style={{ 
                  color: semanticColors.content.text,
                  textAlign: 'center'
                }}>
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatsSection;