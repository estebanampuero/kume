import {
    Bot,
    MessageSquare,
    Calendar,
    Plug,
    CreditCard,
    BarChart3,
  } from 'lucide-react'
  
  export const NAV = [
    { label: 'Productos', href: '#productos' },
    { label: 'Características', href: '#features' },
    { label: 'Precios', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
  ]
  
  export const LOGOS = Array.from({ length: 10 }).map((_, i) => ({ id: i + 1 }))
  
  export const FEATURES = [
    {
      icon: MessageSquare,
      title: 'Inbox omnicanal',
      desc: 'Unifica WhatsApp, Instagram, Messenger y webchat en un solo panel con historial y etiquetas.',
    },
    {
      icon: Bot,
      title: 'Agentes de IA',
      desc: 'Conversaciones naturales que entienden contexto, imágenes y voz para ejecutar acciones reales.',
    },
    {
      icon: Calendar,
      title: 'Agenda y reservas',
      desc: 'Ofrece disponibilidad en tiempo real y confirma citas automáticamente, integrado a tu calendario.',
    },
    {
      icon: Plug,
      title: 'Integraciones',
      desc: 'Conecta Shopify, HubSpot, Pipedrive, Google y +20 servicios. Sin código.',
    },
    {
      icon: CreditCard,
      title: 'Pagos y cobros',
      desc: 'Cierra ventas por chat con links de pago, suscripciones y seguimiento.',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      desc: 'Embudo conversacional, atribución y métricas de performance por campaña y canal.',
    },
  ]
  
  export const PRODUCTS = [
    {
      tag: 'Suite',
      title: 'Mercur*',
      desc: 'Inbox + CRM + Calendario + Automatización. Todo centralizado.',
      points: ['Asignación inteligente', 'Macros/Flujos', 'Plantillas multilenguaje'],
    },
    {
      tag: 'Asistente',
      title: 'Iris*',
      desc: 'Agente IA listo en minutos. Responde, califica y deriva a ventas.',
      points: ['Entrena con PDFs', 'Multimedia (voz/imágenes)', 'Aprendizaje continuo'],
    },
    {
      tag: 'Conectores',
      title: 'Axis*',
      desc: 'No-code para integrar CRMs, e‑commerce y planillas a tus flujos conversacionales.',
      points: ['+20 integraciones', 'Webhooks y APIs', 'Mapeo visual de datos'],
    },
    {
      tag: 'Atribución',
      title: 'Ads*',
      desc: 'Cierra el loop entre campañas y ventas: UTMs, eventos y conversión por WhatsApp.',
      points: ['Eventos a Meta/GA4', 'Leads verificados', 'ROI por canal'],
    },
  ]
  
  export const PRICING = [
    {
      name: 'Starter',
      price: 'US$ 19',
      cadence: '/mes',
      features: [
        '1 agente IA básico',
        '1 canal conectado',
        'Hasta 1.000 conversaciones',
        'Soporte por email',
      ],
      cta: 'Probar ahora',
      highlighted: false,
    },
    {
      name: 'Business',
      price: 'US$ 349',
      cadence: '/mes',
      features: [
        'Agentes avanzados',
        '2 canales + 2 pipelines',
        'Hasta 5.000 conversaciones',
        'Soporte prioritario',
      ],
      cta: 'Empezar',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'A medida',
      cadence: '',
      features: [
        'SLA y seguridad',
        'Onboarding y training',
        'Usuarios y permisos avanzados',
        'Integraciones personalizadas',
      ],
      cta: 'Hablar con ventas',
      highlighted: false,
    },
  ]
  
  export const FAQ = [
    {
      q: '¿Puedo conectar mi CRM y mi tienda online?',
      a: 'Sí. Incluye conectores listos para Shopify, HubSpot, Pipedrive y más. También puedes usar webhooks y APIs.',
    },
    {
      q: '¿Cuánto tarda en configurarse?',
      a: 'Un setup inicial puede resolverse en 15–60 minutos con plantillas y wizards incluidos.',
    },
    {
      q: '¿Cómo se calculan las conversaciones?',
      a: 'Se cuentan hilos únicos por canal en un periodo de facturación. Los límites son configurables por plan.',
    },
    {
      q: '¿Tienen garantía o período de prueba?',
      a: 'Puedes comenzar con el plan Starter y subir cuando lo necesites. Incluye garantía de satisfacción.',
    },
  ]