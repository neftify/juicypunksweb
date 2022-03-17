import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Juicy Punk</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="relative bg-white overflow-hidden" style={{backgroundImage: 'url("/flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="bg-tarnsparent">
          <nav className="flex justify-between p-6 px-4"><div className="flex justify-between items-center w-full">
            <div className="w-1/2 xl:w-1/3">
              <a className="block max-w-max" href="#">
                <img src="/images/Untitled-Artwork.png" alt="" className="h-12"/>
              </a>
            </div>
            <div className="w-1/2 xl:w-1/3">
              <ul className="hidden xl:flex xl:justify-center"><li className="mr-12"><span className="text-coolGray-500 hover:text-coolGray-900 font-medium"><Link href="#about">About</Link></span></li>
                <li className="mr-12"><span className="text-coolGray-500 hover:text-coolGray-900 font-medium"><Link href="#thegame">the Game</Link></span></li>
                <li className="mr-12"><span className="text-coolGray-500 hover:text-coolGray-900 font-medium"><Link href="https://docs.juicypunks.com">Docs</Link></span></li>
                <li><span className="text-coolGray-500 hover:text-coolGray-900 font-medium"><Link href="#team">Team</Link></span></li>
              </ul></div>
            <div className="w-1/2 xl:w-1/3">
              <div className="hidden xl:flex items-center justify-end"><a className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md" href="#">Leaderboards</a><a className="inline-block py-2 px-4 text-sm leading-5 text-violet-50 bg-violet-500 hover:bg-violet-600 font-medium focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md" href="#">Launch App</a></div>
            </div>
          </div>
            <button className="navbar-burger self-center xl:hidden">
              <svg width={35} height={35} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect className="text-coolGray-50" width={32} height={32} rx={6} fill="currentColor" /><path className="text-coolGray-500" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor" /></svg></button>
          </nav><div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
          <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
            <nav className="relative p-6 h-full overflow-y-auto"><div className="flex flex-col justify-between h-full">
              <a className="inline-block" href="#">
                <img src="/flex-ui-assets/logos/flex-ui-violet-light.svg" alt="" className="h-8"/>
              </a>
              <ul className="py-6"><li><span className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"><Link href="#about">About</Link></span></li>
                <li><span className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"><Link href="#thegame">the Game</Link></span></li>
                <li><span className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"><Link href="https://docs.juicypunks.com">Docs</Link></span></li>
                <li><span className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"><Link href="#team">Team</Link></span></li>
              </ul><div className="flex flex-wrap">
              <div className="w-full mb-2"><a className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium text-center rounded-md" href="#">Log In</a></div>
              <div className="w-full"><a className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-violet-500 hover:bg-violet-600 font-medium text-center focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md" href="#">Sign Up</a></div>
            </div>
            </div>
            </nav><a className="navbar-close absolute top-5 p-4 right-3" href="#">
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987" /></svg></a>
          </div>
        </div>
        </div>
          <div className="py-20 md:py-28">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap xl:items-center -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Run. Juice. Earn.</h1>
                  <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Run and jump across the universe collecting $JUICE and unlocking new levels that can be minted as NFTs.</p>
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-violet-500 rounded-md shadow-sm text-violet-50" href="#">Connect Wallet</a></div>
                    <div className="w-full md:w-auto py-1 md:py-0"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#">Leaderboards</a></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative mx-auto md:mr-0 max-w-max">
                    <img src="/images/Untitled-Artwork-2.jpg" alt="" className="relative rounded-7xl"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 xl:pt-24 bg-white" style={{backgroundImage: 'url("/flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-10">
              <div className="max-w-md">
                <span id="about" className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl">ABOUT</span>
                <h3 className="mb-8 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">Built by the team at Neftify.</h3>
                <p className="text-lg md:text-xl text-coolGray-500 font-medium">Juicy Punk was created by three friends who set out to make a cool game, test their skills, and see how fast they could build.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap justify-center -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md">
                    <img src="/images/IMG-7644-jpg.sb-d05fba05-PaE3Zo" alt="" className="mx-auto"/>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md">
                    <img src="/images/Untitled-Artwork.png" alt="" className="mx-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="py-24 bg-white overflow-hidden" style={{backgroundImage: 'url("/flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <div className="relative mx-auto md:ml-0 max-w-max">
                <img src="/flex-ui-assets/elements/circle3-green.svg" alt="" className="absolute z-10 -right-8 -top-8 w-28 md:w-auto"/>
                <img className="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto" src="flex-ui-assets/elements/dots3-yellow.svg" alt="" />
                <img src="flex-ui-assets/images/how-it-works/stock.png" alt="" /></div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <span id="thegame" className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm">the game</span>
              <h2 className="mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">An endless runner where the objective is to collect $JUICE to unlock levels.</h2>
              <div className="flex flex-wrap -mx-4 text-center md:text-left">
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full">1</div>
                  <h3 className="mb-2 text-xl font-bold">Play the Game</h3>
                  <p className="font-medium text-coolGray-500">Juicy Punk is an endless side-scrolling runner with only one input; jump.</p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full">2</div>
                  <h3 className="mb-2 text-xl font-bold">Collect $JUICE</h3>
                  <p className="font-medium text-coolGray-500">The objective is to collect $JUICE before it runs out. The more you run, the less $JUICE available.</p>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full">3</div>
                  <h3 className="mb-2 text-xl font-bold">Burn $JUICE</h3>
                  <p className="font-medium text-coolGray-500">Burn $JUICE to mint NFTs that represent new levels. </p>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full">4</div>
                  <h3 className="mb-2 text-xl font-bold">Unlock New Levels</h3>
                  <p className="font-medium text-coolGray-500">Launch the app with levels NFTs to unlock new landscapes and continue to earn more $JUICE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="relative py-24 bg-white w-full" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="relative container px-4 mx-auto">
          <div className="mb-16 text-center">
            <span id="team" className="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl">Team</span>
            <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">The team behind the Juice.</h3>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">We're Neftify Media, a sister company of Neftify.</p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
              <div className="text-center max-w-xs mx-auto">
                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src="/images/ernesto.jpeg" alt="" /><h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Ernesto</h3>
                <span className="inline-block mb-6 text-lg font-medium text-violet-500">Game Mechanics</span>
                <div className="flex items-center justify-center">
                  <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="https://twitter.com/ernestojojeda">
                    <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" /></svg></a>
                  <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://www.instagram.com/ernestoojeda22/">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" /></svg></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
              <div className="text-center max-w-xs mx-auto">
                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src="/images/steven.jpeg" alt="" /><h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Steven</h3>
                <span className="inline-block mb-6 text-lg font-medium text-violet-500">Blockchain Engineer</span>
                <div className="flex items-center justify-center">
                  <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="https://twitter.com/stevenlriv">
                    <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" /></svg></a>
                  <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://www.instagram.com/stevenlriv/">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" /></svg></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
              <div className="text-center max-w-xs mx-auto">
                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src="/images/owtlw.jpeg" alt="" /><h3 className="mb-1 text-lg text-coolGray-800 font-semibold">OWTLW</h3>
                <span className="inline-block mb-6 text-lg font-medium text-violet-500">Art &amp; Design</span>
                <div className="flex items-center justify-center">
                  <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="https://twitter.com/OWTLW">
                    <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" /></svg></a>
                  <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://www.instagram.com/owtlw/">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" /></svg></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 xl:mb-0">
              <div className="text-center max-w-xs mx-auto">
                <img className="w-24 h-24 mx-auto mb-6 rounded-full" src="/images/luis.png" alt="" /><h3 className="mb-1 text-lg text-coolGray-800 font-semibold">Luis</h3>
                <span className="inline-block mb-6 text-lg font-medium text-violet-500">Front-End Developer</span>
                <div className="flex items-center justify-center">
                  <a className="inline-block mr-5 text-coolGray-300 hover:text-coolGray-400" href="https://twitter.com/lostboson">
                    <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" /></svg></a>
                  <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://www.instagram.com/lostboson/">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z" fill="currentColor" /></svg></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 md:mb-0">
            </div>
          </div>
        </div>
        </section>
        <section className="bg-white overflow-hidden w-full" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}><div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center pt-24 pb-12 -mx-4">
            <div className="w-full md:w-3/4 px-4">
              <a className="block mb-8 max-w-max" href="#">
                <img className="h-12" src="images/Untitled-Artwork.png" alt="" /></a>
              <p className="mb-12 text-base md:text-lg text-coolGray-400 font-medium md:max-w-sm">We make cool shit.</p>
              <div className="mb-12 md:mb-0 flex flex-wrap -mx-3 md:-mx-6">
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6"><span className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"><Link href="#about">About</Link></span></div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6"><span className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"><Link href="#team">Team</Link></span></div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6"><span className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"><Link href="https://docs.juicypunks.com">Docs</Link></span></div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6"><span className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"><Link href="http://discord.gg/neftify">Discord</Link></span></div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6"><span className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"><Link href="https://twitter.com/neftify">Twitter</Link></span></div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6"><span className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"><Link href="https://github.com/neftify">Github</Link></span></div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6" />
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <div className="lg:pr-10 lg:ml-auto lg:max-w-max">
                <a className="block mb-4" href="#">
                  <img src="flex-ui-assets/elements/app-store.svg" alt="" /></a>
                <a className="block" href="#">
                  <img src="flex-ui-assets/elements/google-play.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
          <div className="border-b border-coolGray-100" />
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center py-12 md:pb-32">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <p className="text-coolGray-400 font-medium">© 2021 Flex. All rights reserved.</p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-wrap md:justify-end -mx-5">
                  <div className="px-5">
                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://twitter.com/neftify">
                      <svg width={19} height={16} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z" fill="currentColor" /></svg></a>
                  </div>
                  <div className="px-5">
                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://github.com/neftify">
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.887 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z" fill="currentColor" /></svg></a>
                  </div>
                  <div className="px-5">
                    <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://www.linkedin.com/company/neftify/">
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z" fill="currentColor" /></svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Home
