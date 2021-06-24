const Company ={
  name:"Example shop",
  description:"",
  logo:"https://i.postimg.cc/KjKy5Qgq/logo-4.png",
  url:"www.pagina.com"
}

const menuContent =[
    {
      caption: "Inicio",
      href: "/",
    },
    {
      caption: "Nav 1",
      href: "",
    },
    {
      caption: "Nav 2",
      href: "",
    },
    {
      caption: "Nav 3",
      href: "",
    },
  ]

const Caroulsel = [
  {
    name:"img 1",
    url:"https://i.postimg.cc/s2QPcJQv/Slider1.png",
  },
  {
    name:"img 2",
    url:"https://i.postimg.cc/vTz5BqjS/Slider2.png",
  },
  {
    name:"img 3",
    url:"https://i.postimg.cc/8z3MjrKD/Slider3.png",
  }
]

const AdvertisingItems = [
  {
    name:"Promo_1",
    url:"/productos/producto-1",
    title:"Promocion Uno",
    subtile:"La mejor promocion ",
    img:"https://i.postimg.cc/L6dmpFxH/Rectangle-1.png",
  },
  {
    name:"Promo_2",
    url:"/productos/producto-2",
    title:"Promocion dos",
    subtile:"Otra promocion",
    img:"https://i.postimg.cc/L6dmpFxH/Rectangle-1.png",
  },
  {
    name:"Promo_3",
    url:"/productos/producto-3",
    title:"",
    subtile:"",
    img:"https://i.postimg.cc/L6dmpFxH/Rectangle-1.png",
  }
]

const Banner = [
  {
    name:"",
    url:"",
    img:""
  }
]

const FooterItems =[
  {
    icon:"https://i.postimg.cc/d3nZBnqL/caja-1.png",
    title:"Envíos Gratis",
    subtile:"Compras mayores de $599 pesos con envío gratis a todo México. "    
  },
  {
    icon:"https://i.postimg.cc/7hQYhRHM/caja-de-devolucion.png",
    title:"Fácil de devolver",
    subtile:"Fácil de comprar y fácil de devolver. "    
  },
  {
    icon:"https://i.postimg.cc/8c3NNr4Z/servicio-al-cliente.png",
    title:"Soporte 24/7",
    subtile:"Habla con nosotros al instante para solucionar cualquier duda o problema. "    
  },
  {
    icon:"https://i.postimg.cc/nzStGQyn/tarjeta-de-credito.png",
    title:"Pagos 100% Seguros",
    subtile:"La mejor tecnología de pagos en línea disponible para ti. Es fácil, rápido y seguro. "    
  }
]

const socialItems = [
  {
      name: "Youtube",
      icon: "https://i.postimg.cc/pTbVqs86/youtube-1.png",
      url: "",
  },
  {
      name: "Twitter",
      icon: "https://i.postimg.cc/tJ9qH7Bd/gorjeo.png",
      url: "",
  },
  {
      name: "Linkedin",
      icon: "https://i.postimg.cc/hPySHDTx/linkedin.png",
      url: "",
  },
  {
      name: "Instagram",
      icon: "https://i.postimg.cc/Wb3VmBC4/instagram.png",
      url: "",
  },
  {
      name: "Facebook",
      icon: "https://i.postimg.cc/j54TvtRD/facebook.png",
      url: "",
  },
]



module.exports ={
   menuContent: menuContent,
   Company: Company,
   Caroulsel: Caroulsel,
   socialItems:socialItems,
   AdvertisingItems:AdvertisingItems,
   FooterItems:FooterItems
}