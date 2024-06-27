
import React, { useState, useEffect } from 'react';
import logo from '../src/images/logo.jpg';
import view from '../src/images/view.png';
import stock from '../src/images/stock.jpg';
import st from '../src/images/st.jpg';
import { FaFacebookF, FaTwitter, FaDiscord } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import assetmanagement from '../src/images/assetmanagement.jpg'
import stockmarket from '../src/images/stockmarket.png';
import commidity from '../src/images/commidity.png';
import realastate from '../src/images/realastate.png';
import contact from '../src/images/contact.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // State for About dropdown
  const [contactOpen, setContactOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [showStockModal, setShowStockModal] = useState(false);
  const [showCommodityModal, setShowCommodityModal] = useState(false);
  const [showRealEstateModal, setShowRealEstateModal] = useState(false);

  const toggleStockModal = () => {
    setShowStockModal(!showStockModal);
  };

  const toggleCommodityModal = () => {
    setShowCommodityModal(!showCommodityModal);
  };

  const toggleRealEstateModal = () => {
    setShowRealEstateModal(!showRealEstateModal);
  };


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };
  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  const togglePrivacy = () => {
    setPrivacyOpen(!privacyOpen);
  };
  const toggleTerms = () => {
    setTermsOpen(!termsOpen);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
        { proName: 'NSE:NMDC', title: 'NMDC Limited' },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b-custom">
      <nav className="sticky top-0 bg-[#0A002F] z-20">
        <div className="flex justify-between items-center pl-10 pr-10">
          <div className="ml-1">
            <img src={logo} width="120" alt="Logo" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
          <div className={`md:flex ${menuOpen ? 'fixed top-0 left-0 w-full h-full bg-gray-800 text-white z-50' : 'hidden'}`}>
            {/* About dropdown */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b-custom text-white z-50 ${aboutOpen ? 'block' : 'hidden'}`}>
              <div className="flex justify-center items-center h-full">
                <div className="flex flex-col lg:flex-row w-full h-full items-center p-6 overflow-auto">
                  <div className="lg:w-1/3 w-full flex justify-center lg:justify-start">
                    <img src={logo} width={200} alt="Logo" className="lg:w-3/4 w-3/4 p-4" />
                  </div>
                  <div className="lg:w-2/3 w-full text-center lg:text-left mt-6 lg:mt-0 p-6">
                    <h1 className="text-2xl font-bold mb-4">About Us</h1>
                    <p className="mb-4">
                      We are excited to introduce our new business, Vaisharavana TWS LLP. Specializing in asset management, we provide expert services in the stock market, commodities, and real estate. Our mission is to help you navigate and succeed in these markets with confidence and ease.
                    </p>
                    <p className="mb-4">
                      At Vaisharavana TWS LLP, we understand the complexities and challenges of the financial markets. Our team of seasoned professionals brings years of experience and deep industry knowledge to offer you strategic advice and personalized solutions. Whether you are an individual investor or a corporate entity, we tailor our services to meet your unique needs and objectives.
                    </p>
                    <p className="mb-4">
                      Our comprehensive asset management approach includes thorough market analysis, risk management, and portfolio optimization. We leverage cutting-edge technology and data-driven insights to maximize returns and minimize risks for our clients. With a commitment to transparency, integrity, and excellence, we strive to build long-term relationships based on trust and mutual success.
                    </p>
                    <p className="mb-4">
                      Join us on this journey to financial growth and stability. Vaisharavana TWS LLP is here to guide you every step of the way, ensuring your investments are well-managed and your financial goals are achieved. Let's navigate the markets together and seize the opportunities that lie ahead.
                    </p>
                    <button onClick={toggleAbout} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End About dropdown */}

            {/* Contact dropdown */}
            {contactOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b-custom text-white z-50">
                <div className="flex justify-center items-center h-screen">
                  <div className={`text-center`}>
                    <img src={contact} width={300} alt="Logo" className="ml-2" />
                    <h1 className="text-2xl font-bold mt-4">Contact Us</h1>
                    <p className="mt-2">contact.vaisharavanatws@gmail.com</p>
                    <button onClick={toggleContact} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
                  </div>
                </div>
              </div>
            )}
            {/* End Contact dropdown */}

            {/* Privacy Policy dropdown */}
            {privacyOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b-custom text-white z-50">
    <div className="flex justify-center items-center h-screen">
      <div className="text-center px-24 max-h-screen overflow-auto">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <br />
        <p>
          Privacy Principles
          <br /><br />
          At Vaishravana TWS LLP, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and safeguard your information when you interact with our services.
          <br /><br />
          Information Collection
          <br /><br />
          We collect personal information such as your name, email address, contact details, and other relevant information necessary for providing our services and complying with legal requirements. This information may be obtained directly from you or from third-party sources where permissible by law.
          <br /><br />
          Use of Information
          <br /><br />
          The personal information we collect is used to deliver our services effectively, manage client relationships, improve our offerings, and meet legal obligations. We do not collect sensitive personal information unless required by law or with your explicit consent.
          <br /><br />
          Data Security
          <br /><br />
          We employ physical, electronic, and procedural safeguards to protect your personal information from unauthorized access, use, or disclosure. Our employees are trained to uphold these privacy principles and comply with relevant data protection regulations.
          <br /><br />
          Your Rights
          <br /><br />
          You have the right to access, correct, or request deletion of your personal information held by us. Additionally, you may withdraw consent for processing, object to certain uses, or lodge complaints with regulatory authorities where applicable.
          <br /><br />
          International Transfers
          <br /><br />
          As part of our operations, we may transfer your personal information internationally, ensuring compliance with relevant data protection laws and employing appropriate safeguards.
          <br /><br />
          Changes to this Policy
          <br /><br />
          We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on our website with the effective date of the revisions.
          <br /><br />
          Contact Us
          <br /><br />
          If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us at contact.vaisharavanatws@gmail.com.
        </p>
        <button onClick={togglePrivacy} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
      </div>
    </div>
  </div>
)}

            {/* End Privacy Policy dropdown */}

            {/* Terms dropdown */}
            {/* {termsOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b-custom text-white z-50">
                <div className="flex justify-center items-center h-screen">
                  <div className="text-center">
                    <h1>Terms</h1>
                    <p>This is the Terms content.</p>
                    <button onClick={toggleTerms} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
                  </div>
                </div>
              </div>
            )} */}
{termsOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b-custom text-white z-50">
    <div className="flex justify-center items-center h-screen">
      <div className="text-center px-24 max-h-screen overflow-auto">
        <h1 className="text-2xl font-bold">Terms of Use</h1>
        <br />
        <p>
    
          AS USED HEREIN, THE TERMS “YOU” AND “USER” SHALL MEAN ANY VISITOR TO THE WEBSITE.
          <br /><br />
          PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. BY ACCESSING THIS WEBSITE YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS BELOW. THESE TERMS AND CONDITIONS ARE SUBJECT TO CHANGE WITHOUT NOTICE, FROM TIME TO TIME IN OUR SOLE DISCRETION. WE WILL NOTIFY YOU OF AMENDMENTS TO THESE TERMS AND CONDITIONS BY POSTING THEM TO THIS WEBSITE. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, PLEASE DO NOT ACCESS THIS WEBSITE.
          <br /><br />
          You are strictly prohibited from unauthorized use of our systems or this website, including but not limited to unauthorized entry into our systems, misuse of passwords, or misuse of any information posted to this Website.
          <br /><br />
          You acknowledge that we may disclose and transfer any information that you provide through this Website to (i) any company within Vaishravana TWS LLP, its affiliates, agents or information providers; (ii) to any other person or entity with your consent; or (iii) if we have a right or duty to disclose or are permitted or compelled to so disclose such information by law. You consent to the transmission, transfer or processing of such information to, or through, any country in the world, as we deem necessary or appropriate, and by using and providing information through this Website you agree to such transfers.
          <br /><br />
          Use of this Website may be monitored, tracked and recorded. Anyone using this Website expressly consents to such monitoring, tracking and recording. You are responsible for being familiar with the current version of these Terms and Conditions posted on the Website during each session.
          <br /><br />
          Copyright notices
          <br /><br />
          The works of authorship contained in this Website, including but not limited to all design, text, sound recordings, and images, are owned, except as otherwise expressly stated, by Vaishravana TWS LLP or one of its subsidiaries. Except as otherwise expressly stated herein, they may not be copied, transmitted, displayed, performed, distributed (for compensation or otherwise), licensed, altered, framed, stored for subsequent use, or otherwise used in whole or in part in any manner without the owner’s prior written consent, except to the extent permitted by the Copyright Act of 1976 (17 U.S.C. § 107), as amended, and then, only with notices of the owner’s proprietary rights. Except for any third party exchange data, you may download information and print out a copy for your personal use, so long as you do not remove any copyright or other notice as may be contained in information, as downloaded.
          <br /><br />
          Trademark notices
          <br /><br />
          “Vaishravana,” “Vaishravana TWS,” the Vaishravana TWS logo and the Octagon Symbol are trademarks of Vaishravana TWS LLP. Other featured words or symbols, used to identify the source of goods and services, may be the trademarks of their respective owners in the United States and/or other countries.
          <br /><br />
          Website content and materials
          <br /><br />
          The information on this Website is for information purposes only. It is believed to be reliable, but we do not warrant its completeness, timeliness or accuracy. User accesses, uses, and relies upon such content at User’s own risk. Please seek the advice of professionals as necessary regarding the evaluation of any content on this Website. The information on this Website is not intended as an offer or solicitation for the purchase of any stock, any other security or any financial instrument or to provide any investment service or investment advice in any jurisdiction.
        </p>
        <button onClick={toggleTerms} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
      </div>
    </div>
  </div>
)}


            {/* End Terms dropdown */}

            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-4 md:space-y-0 md:space-x-9">
              <div className="absolute top-4 right-4 md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <a href="#home" className="cursor-pointer text-white">Home</a>
              <h1 className="cursor-pointer text-white" onClick={toggleAbout}>About</h1>
              <a href="#wwi" className="cursor-pointer text-white">WWI</a>
              <h1 className="cursor-pointer text-white" onClick={toggleContact}>Contact Us</h1>
            </div>
          </div>
        </div>
      </nav>


      <section className="flex flex-col md:flex-row justify-between items-center" id='home'>
        <div className="py-24 px-8 md:px-24">
          <h1 className="text-white text-4xl">
            Unique solution & <br />
            <span className="text-pink">innovative approach</span>
            <br />
            to trading
          </h1>
          <p className="mt-5 text-white">
            Stay on top of the market with our innovative technology, extensive product <br /> access.
          </p>
          <button className="gradient-bg mt-5 text-white py-2 px-10 rounded-md">Know More</button>
        </div>
        <div className="sm:w-full md:w-1/2">
          <img src={view} alt="tws" className="w-full h-auto object-cover" />
        </div>
      </section>

      <div className="tradingview-widget-container mt-14">
        <div className="tradingview-widget-container__widget"></div>
      </div>


      <section className="mt-9 ml-4 mr-4 md:ml-20 md:mr-20 flex flex-col-reverse md:flex-row justify-between py-4 px-8">
        <div className="gradientb-bg w-full h-auto md:h-96 mb-3 text-center pt-10 md:pt-20 text-white flex flex-col md:flex-row justify-between">
          <div className="md:px-24 justify-center" >
            <h1 className="text-white text-2xl md:text-4xl">
              Asset Management Company (AMC) What we do ?
              <br />
            </h1>
            <p className="mt-5 text-white">
              The stock market is where people buy and sell pieces of companies, hoping they'll become more valuable. Commodity markets trade things like gold and oil, where people bet on price changes.Real estate involves buying, selling, or renting homes and buildings to earn money from property value increases or rental income. Each market has risks and rewards, affected by the economy and how much people want to buy or sell.
            </p>
            <button className="gradient-bg mt-5 text-white py-2 px-10 rounded-md">Know More</button>
          </div>

        </div>
      </section>




      <section className="ml-auto mr-auto mt-4 max-w-screen-lg mb-20 p-10">
        <h1 className="text-white text-center text-3xl mb-9">Choose type of trade you want</h1>
        <div className="flex flex-col sm:flex-row sm:justify-evenly">
          {/* Stock Market */}
          <div className="border border-gradient w-full sm:w-56 h-52 mb-3 text-center text-white relative overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-blue-600 rounded-md cursor-pointer"
            onClick={toggleStockModal}>
            <img src={stockmarket} className="absolute inset-0 w-full h-full object-cover rounded-md" alt="Stock Market" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-lg font-bold">Stock Market</span>
            </div>
          </div>

          {/* Commodity */}
          <div className="border border-gradient w-full sm:w-56 h-52 mb-3 text-center text-white relative overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-blue-600 rounded-md cursor-pointer"
            onClick={toggleCommodityModal}>
            <img src={commidity} className="absolute inset-0 w-full h-full object-cover rounded-md" alt="Commodity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-lg font-bold">Commodity</span>
            </div>
          </div>

          {/* Real Estate */}
          <div className="border border-gradient w-full sm:w-56 h-52 mb-3 text-center text-white relative overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-blue-600 rounded-md cursor-pointer"
            onClick={toggleRealEstateModal}>
            <img src={realastate} className="absolute inset-0 w-full h-full object-cover rounded-md" alt="Real Estate" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-lg font-bold text-pink">Real Estate</span>
            </div>
          </div>
        </div>

        {/* Stock Market Modal */}
        {showStockModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-200 p-8 w-full sm:w-full lg:w-1/2 rounded-md text-center">
              <button className="absolute top-2 right-2 text-gray-600" onClick={toggleStockModal}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h2 className="text-xl font-bold mb-4">Stock Market</h2>
              <p className="text-justify">
                The stock market facilitates buying and selling of shares in publicly traded companies, enabling firms to raise capital and investors to seek returns through dividends and capital gains. It is influenced by economic indicators, investor sentiment, and regulatory oversight, impacting global economies and offering opportunities for profit amid inherent volatility and risk.
              </p>
              <p>contact us  </p>
              <p>Eamil :  contact.vaisharavanatws@gmail.com</p>
              <button onClick={toggleStockModal} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
            </div>
          </div>
        )}

        {/* Commodity Modal */}
        {showCommodityModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-200 p-8 w-full sm:w-full lg:w-1/2 rounded-md text-center">
              <button className="absolute top-2 right-2 text-gray-600" onClick={toggleCommodityModal}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h2 className="text-xl font-bold mb-4">Commodity</h2>
              <p className="text-justify">

                Commodities are raw materials traded globally via futures contracts, influenced by supply, demand, and economic factors. They include agricultural products, metals, and natural resources crucial for industries and economies. Investors use commodities for diversification and to profit from price fluctuations, monitoring global trends and geopolitical risks for strategic investments.</p>
              <p>contact us  </p>
              <p>Eamil :  contact.vaisharavanatws@gmail.com</p>
              <button onClick={toggleCommodityModal} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
            </div>
          </div>
        )}

        {/* Real Estate Modal */}
        {showRealEstateModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-200 p-8 w-full sm:w-full lg:w-1/2 rounded-md text-center">
              <button className="absolute top-2 right-2 text-gray-600" onClick={toggleRealEstateModal}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h2 className="text-xl font-bold mb-4">Real Estate</h2>
              <p className="text-justify">Real estate includes land and buildings, offering investment opportunities through rental income and property value appreciation. Market dynamics are influenced by factors like location, economic conditions, and investor strategies, making it a key asset class for long-term wealth accumulation.</p>
              <p>Contact Us</p>
              <p>Email: contact.vaisharavanatws@gmail.com</p>
              <button onClick={toggleRealEstateModal} className="mt-4 text-white bg-yellow-700 px-4 py-2 rounded-lg">Close</button>
            </div>
          </div>

        )}
      </section>


      <section id='wwi'>
        <h1 className="text-white text-center text-4xl mb-4">WWI Where we invest</h1>
        <div className="py-1 flex flex-col md:flex-row" >
          <img src={st} alt="Slide 2" className="hidden md:block w-full md:w-1/2" />
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            className="max-w-xl w-full mt-10 mb-10 md:mr-14"
          >


            <div className="w-full h-full p-14 mt-18 mr-9 bg-gray-200 text-gray-800 flex justify-center items-center">
              <div>
                <h2 className="text-xl font-bold">StudyTap</h2>
                <p className="mt-4">
                  Study Tap, with 30k+ users, provides one-tap access to past papers and important questions for JNTUH and JNTUK.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-14 mt-18 bg-gray-400 text-gray-800 flex justify-center items-center">
              <div>
                <h2 className="text-xl font-bold">Kriya Jewellers</h2>
                <p className="mt-4">
                  Kriya Jewellers offers a stunning collection of gold, diamond, and silver jewelry, catering to all your luxury needs.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-14 mt-18 bg-gray-200 text-gray-800 flex justify-center items-center">
              <div>
                <h2 className="text-xl font-bold">Exporto</h2>
                <p className="mt-4">
                  Exporto exports high-quality products globally, connecting local businesses to global trade opportunities.
                </p>
              </div>
            </div>
            <div className="w-full h-full p-14 mt-18 bg-gray-400 text-gray-800 flex justify-center items-center">
              <div>
                <h2 className="text-xl font-bold">Hydro Power</h2>
                <p className="mt-4">
                  Hydropower generates clean electricity using water, contributing to sustainable energy solutions.
                </p>
              </div>
            </div>

          </Carousel>
        </div>

      </section>


      <section className="mt-9 mx-4 md:mx-20 flex flex-col-reverse md:flex-row justify-between py-9 px-8">
        <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r p-8 md:p-16 text-white">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Take on the <span className="text-blue-500">market</span> <br /> with our{' '}
              <span className="text-blue-300">powerful</span> platforms
            </h1>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-right">
            <p className="text-lg mb-6">
              Boost your business with our user-friendly, scalable platforms featuring real-time market insights and automated tools. Transform your operations and stay ahead of the competition.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Get Early Access</button>
          </div>
        </section>
      </section>

      <section className="mt-9 mx-4 md:mx-20 flex flex-col-reverse md:flex-row justify-between py-9 px-8">
        <div className="gradientb-bg w-full h-auto md:h-96 mb-3 text-center pt-10 md:pt-20 text-white md:flex-row justify-between">

          <div className="md:px-24 justify-center">
            <h1 className="text-white text-2xl md:text-4xl mb-5">Made for everyone</h1>
            <p className="text-lg mb-6">
              Our powerful platforms are designed to empower everyone in the trading stock market, commodity, and real estate sectors. With user-friendly interfaces, advanced analytics, and real-time market insights, you can effortlessly navigate and succeed in your industry. Whether you're an individual trader or a large enterprise, our scalable solutions cater to all your needs, ensuring you stay ahead of the competition.            </p>
            <button className="gradient-bg mt-5 mb-5 text-white py-2 px-10 rounded-md">Get Access</button>
          </div>
        </div>
      </section>

      <footer className="text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-20 mr-3" />
            <div className="border-l border-gray-700 pl-3">
              <div className="flex space-x-8 mb-4 md:mb-0">
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
                <a href="#" className="hover:text-gray-400">
                  WWI
                </a>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white-600 hover:text-blue-800 gradient-bg w-6 h-6">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white-400 hover:text-blue-600 gradient-bg w-6 h-6">
              <FaTwitter />
            </a>
            <a href="#" className="text-white-700 hover:text-blue-900 gradient-bg w-6 h-6">
              <FaDiscord />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">&copy; 2024 Gooey Trade. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300" onClick={toggleTerms} >
                Terms of Use
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 " onClick={togglePrivacy} >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;







