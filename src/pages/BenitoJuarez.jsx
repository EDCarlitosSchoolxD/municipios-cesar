import React from 'react'
import { Navegacion } from '../components/Navegacion'
import { Card } from '../components/Card'

export const BenitoJuarez = () => {
  return (
    <>
        <Navegacion/>
        <main className='w-11/12 mx-auto mt-10'>
            
          <h2 className='text-center font-bold text-3xl mb-10'>Benito Juarez</h2>

          <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-5'>
            
               <p className='p-10 text-xl'>
               Cancún (en maya: kaan y kun, "cuna o nido de serpientes") es una ciudad en el estado de Quintana Roo y es cabecera del municipio de Benito Juárez, se ubica en el oriente de México, a más de 1,700 km de la Ciudad de México. Considerada un destino turístico de nivel internacional, con certificación de la Organización Mundial del Turismo. 
               <br />
               En pocos años, 
               el lugar tuvo una notable transformación, pues pasó de ser una isla de pescadores rodeada de selva virgen y playas desconocidas, a convertirse en el centro turístico mexicano más reconocido en el mundo, junto con Acapulco. 
               <br />
               La Organización Mundial del Turismo (OMT),
               a través de la Fundación OMT-Themis concedió el premio Lo Mejor de lo Mejor "a la excelencia y la gobernanza" al Fideicomiso de Promoción Turística de Cancún el 3 de febrero de 2007. 
               <br />
               Actualmente Cancún es el destino que recibe más turistas internacionales de México, junto con la Ciudad de México   
              </p> 

              <img src="https://blog.homie.mx/wp-content/uploads/2023/01/benito-juarez-quintana-roo.jpg"
               alt="Benito Juarez"
              className='p-4'
               /> 
          </div>            

          <div>
            <h2 className='text-center font-bold text-3xl my-10'>Atractivos turísticos:</h2>

            <div className='flex flex-wrap justify-evenly gap-10'>
              <Card img="https://www.venturapark.com/wp-content/themes/ventura/img/como-llega-ventura-park-cancun.jpg" title="Ventura Park" >
              Es un nuevo concepto que ofrece Cancún, el cual es un Mega Parque Temático conformado por 7 atracciones, en las cuales encontraras varias actividades y atracciones para todos los gustos. Atrévete a subirte a la montaña rusa, aventarte de una tirolesa, nadar con delfines o en una alberca de olas y manejar en una pista de Go-karts, entre muchas otras cosas. El Parque cuenta con varios paquetes para que puedas disfrutar de todas las actividades.
              </Card>

              <Card img="https://i.ytimg.com/vi/lk-Fq4O6HwU/maxresdefault.jpg" title="Xel-Ha" >
              Considerado el acuario natural más grande del mundo, en Xel-Ha disfrutarás de múltiples actividades acuáticas como nado con delfines, snorkel o Sea Trek, que es básicamente una caminata subacuática. El lugar, por supuesto, cuenta con todos los servicios necesarios para que tú sólo te preocupes por pasar un día agradable. Son más de 20 las atracciones de las que podrás disfrutar, así que no pierdas tiempo y planea bien tu visita.
              </Card>

              <Card img="https://images.dolphinaris.com/images/2015/10/musa03.jpg" title="Museo Subacuático de Arte" >
              Tal como su nombre lo indica, este museo se encuentra en las profundidades del mar Caribe y ofrece una experiencia única a quien lo visita. Su objetivo es mostrar cómo pueden interactuar el arte y la naturaleza. Las esculturas que han sido sumergidas están hechas de materiales que promueven la vida coralina. Consta de dos galerías: Salón Manchones y Salón Nizuc, el primero a ocho metros y el segundo a cuatro. Sumérgete y quedarás maravillado.
              </Card>

              <Card img="https://www.cancunadventure.net/images/parks/xplor-rivers.jpg" title="Parque Xplor" >
              Con todo un mundo subterráneo por descubrir, el parque Xplor te ofrece las mejores aventuras selváticas y acuáticas para que grandes y pequeños disfruten de esta maravilla natural. Recorrer ríos subterráneos en balsas, atravesar la selva a bordo de un vehículo anfibio, volar en cualquiera de sus 14 tirolesas o nadar en los ríos subterráneos son algunas de las actividades a realizar. Pasa un agradable día explorando lo mejor de la Riviera Maya.
              </Card>

              <Card img="data:image/jpeg;base64,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" title="Museo Maya de Cancún:" >
              El tercer espacio museístico más importante para el INAH, encontrarás las colecciones arqueológicas de la cultura maya más importantes del país con piezas de Palenque, Chichén Itzá, Comalcalco, entre otros lugares. Temáticas desde la arqueología de Quintana Roo, hasta la civilización maya son tratadas en este espacio. Sin duda es un museo que no debes perderte a tu paso por Cancún y la sede actual recién fue inaugurada en 2012.
              </Card>

              <Card img="https://cdn.mexicodestinos.com/lugares/ka-yok-planetario-de-cancun-princ-min.jpg" title="Ka Yok Planetario" >
              Este espacio, que se localiza en la zona centro de la ciudad de Cancún, busca acercarte a la ciencia y la tecnología de una forma agradable y divertida. El lugar cuenta con un Museo del Agua, auditorio y observatorio. Además no deja a un lado la importancia de la civilización maya en el mundo actual y te invita a visitar las zonas arqueológicas de la región. Por supuestos, también podrás gozar de múltiples proyecciones astronómicas y científicas.
              </Card>
            </div>
            
          </div>

          <div>
            <h2 className='text-center font-bold text-3xl my-10'>Arqueologicos:</h2>

            <div className='flex flex-wrap justify-evenly gap-10'>
              <Card img="https://www.elcaminomascorto.es/wp-content/uploads/MG_2514.jpg" title="Zona Arqueológica de El Rey" >
              La Zona Arqueológica más importante de la isla de Cancún, se cree que los primeros pobladores la habitaron 300 años antes de nuestra era construyendo casas de madera con techos de palma. Sus pinturas murales incluyen representaciones de deidades mayas y elementos religiosos. Formado por 47 estructuras, te sorprenderán las construcciones en medio de la magnífica naturaleza que las rodea.
              </Card>

              <Card img="https://www.mexicodestinos.com/blog/wp-content/uploads/2013/12/Mandala-Beach.jpg" title="Fiestas" >
              En Cancún se realiza un carnaval con fecha móvil durante el cual se celebran gran número de eventos, tales como peleas de gallos y presentaciones artísticas. Es también importante la feria anual Expo Cancún, que se celebra en noviembre.
Uno de los eventos populares más importantes que se realizan en el municipio es el Festival Internacional de Cultura del Caribe, en el que se dan cita los países de la región y diversos estados de la República, se efectúa en toda la entidad y la ciudad de Cancún es una de las sedes, en él se presentan diversos espectáculos artísticos y culturales y se efectúan actividades académicas donde participan profesionistas de diferentes disciplinas en el planteamiento y propuestas de solución a problemas de la cuenca del Caribe, este festival tiene verificativo durante el mes de noviembre, en 1997 se llevó a cabo la VIII edición con 808 participantes de 14 países y otras entidades.

              </Card>

              <Card img="https://i0.wp.com/caribempresarial.com/wp-content/uploads/2022/10/Regresa-el-Festival-Internacional-de-Musica-Cancun-tras-dos-anos-de-ausencia-por-la-pandemia5.jpg?fit=1280%2C853&ssl=1" title="Música" >
              Al igual que las festividades, la música de la región se compone de piezas típicas de diversas partes del país, así como la influencia del calipso, la salsa, el reggae y el merengue de la zona caribe
              </Card>

              <Card img="https://media-cdn.tripadvisor.com/media/photo-s/03/97/ba/3c/mercado-28.jpg" title="Artesanía" >
              Si bien la producción local no es muy grande, en la región se elaboran artesanías de conchas marinas, hamacas de hilo, figuras en madera tallada y bordados. En Cancún es posible encontrar piezas artesanales de todas partes del país que se comercializan en atención al turismo internacional.
              </Card>

              <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC5vCLN1V5_Wsk4eHYr5yue75MkUyQIlAdQ&usqp=CAU" title="Gastronomía" >
              A ser un polo de desarrollo turístico, Cancún es un lugar donde es posible degustar tanto  gastronomía de todo el país, como cocina internacional, que incluye platillos asiáticos; además es posible disfrutar de manjares elaborados a base de los productos pesqueros de la región, como son langosta, camarón y caracol.
Como platillo fundamental de la tradicional cocina quintanarroense se prepara el pescado en tikinxic que se condimenta con achiote para luego asarse a la brasa u hornearse bajo tierra. Por la cercanía geográfica y la inmigración buena parte de la comida típica es similar a la de Yucatán.

              </Card>

            </div>
            
          </div>

        </main>



    </>
  )
}
