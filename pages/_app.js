import '../public/icons/mdb-flags.css'
import '../public/icons/flaticon.css'
import '../styles/global.scss'
import Header from '@/components/layout/header/Header'
// import Footer from '@/components/layout/footer/Footer's
import '@flaticon/flaticon-uicons/css/all/all.css'
import '../public/icons/flaticon.css'
import Footer from '@/components/Footer/page'
const App = ({Component, pageProps}) => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Acme&family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,800;0,900;1,600;1,700&family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&family=Roboto:wght@100;300;400;500;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,100;0,200;0,300;1,200&family=Kanit:ital,wght@0,100;0,200;0,400;1,100;1,300;1,400&family=Lato:wght@300;400&family=Manrope:wght@300;400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,200&family=Roboto+Mono:wght@400;500;600;700&family=Rubik+Pixels&display=swap');

        :root{
          --font-acme: 'Acme', sans-serif;
          --font-firaCode: 'Fira Sans', sans-serif;
          --font-roboto: 'Roboto', sans-serif;
          --font-robotoMono: 'Roboto Mono', monospace;
          
        }
      `}</style>
      <Header/>
        <Component {...{pageProps}}/>
<div className='z-[0]'>
<Footer/>

</div>
    </>
  )
}

export default App