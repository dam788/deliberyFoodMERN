//! FUNCIOKN DE UTILIDAD PARA FORMATEAR PRECIOS...

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};
