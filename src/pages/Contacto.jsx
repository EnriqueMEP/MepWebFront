import React, { useState } from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { 
  HeroSection, 
  EmptySpace 
} from '../design-system/atoms/sections/index.js';

/**
 * Contacto - Página de contacto MEP Engineering
 * 
 * Formulario de contacto, información de la empresa,
 * ubicación y métodos de contacto.
 */

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se implementará el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <PageTemplate
      title="Contacto - MEP Engineering"
      description="Ponte en contacto con MEP Engineering para consultas sobre proyectos de ingeniería. Oficinas en Madrid, España. Formulario de contacto y información empresarial."
      currentPage="contacto"
    >
      <HeroSection
        title="Hablemos de tu proyecto"
        subtitle="Estamos aquí para ayudarte a desarrollar soluciones de ingeniería innovadoras y eficientes"
        showVideo={false}
      />
      
      <EmptySpace height="4rem" />
      
      {/* Sección de Contacto */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>info@mepengineering.es</p>
                <p>proyectos@mepengineering.es</p>
              </div>
              
              <div className="contact-item">
                <h3>📱 Teléfono</h3>
                <p>+34 xxx xxx xxx</p>
              </div>
              
              <div className="contact-item">
                <h3>📍 Dirección</h3>
                <p>Madrid, España</p>
              </div>
              
              <div className="contact-item">
                <h3>🕒 Horario</h3>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <EmptySpace height="4rem" />
      
      <style jsx>{`
        .contact-section {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-container {
          width: 100%;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        .contact-info h2,
        .contact-form h2 {
          color: #1B365D;
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .contact-item {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #1B365D;
        }
        
        .contact-item h3 {
          color: #1B365D;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        
        .contact-item p {
          color: #555;
          margin: 0.25rem 0;
        }
        
        .contact-form {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #1B365D;
          font-weight: 600;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #1B365D;
        }
        
        .submit-btn {
          background: #1B365D;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 4px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
        }
        
        .submit-btn:hover {
          background: #0f2341;
        }
      `}</style>
    </PageTemplate>
  );
};

export default Contacto;