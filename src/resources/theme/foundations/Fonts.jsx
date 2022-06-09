import React from 'react'
import { Global } from '@emotion/react'
import proximaNovaBlackWoff from '../../fonts/ProximaNova/proxima_nova_black-webfont.woff'
import proximaNovaBlackWoff2 from '../../fonts/ProximaNova/proxima_nova_black-webfont.woff2'

import proximaNovaBoldWoff from '../../fonts/ProximaNova/proxima_nova_bold-webfont.woff'
import proximaNovaBoldWoff2 from '../../fonts/ProximaNova/proxima_nova_bold-webfont.woff2'

import proximaNovaExtraBoldWoff from '../../fonts/ProximaNova/proxima_nova_extrabold-webfont.woff'
import proximaNovaExtraBoldWoff2 from '../../fonts/ProximaNova/proxima_nova_extrabold-webfont.woff2'

import proximaNovaThinWoff from '../../fonts/ProximaNova/proxima_nova_thin-webfont.woff'
import proximaNovaThinWoff2 from '../../fonts/ProximaNova/proxima_nova_thin-webfont.woff2'

import proximaNovaRegularWoff from '../../fonts/ProximaNova/proximanova-regular-webfont.woff'
import proximaNovaRegularWoff2 from '../../fonts/ProximaNova/proximanova-regular-webfont.woff2'

import SharpSansBoldWoff from '../../fonts/SharpSans/SharpSansNo1-Bold.woff'
import SharpSansBoldWoff2 from '../../fonts/SharpSans/SharpSansNo1-Bold.woff2'

import SharpSansMediumWoff from '../../fonts/SharpSans/SharpSansNo1Medium-Regular.woff'
import SharpSansMediumWoff2 from '../../fonts/SharpSans/SharpSansNo1Medium-Regular.woff2'

import SharpSansShsnWoff from '../../fonts/Shsn/shsn-webfont.woff'
import SharpSansShsnWoff2 from '../../fonts/Shsn/shsn-webfont.woff2'



const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url(${proximaNovaBlackWoff}) format("woff"),
         url(${proximaNovaBlackWoff2}) format("wof2");
        font-weight: 900;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url(${proximaNovaBoldWoff}) format("woff"),
         url(${proximaNovaBoldWoff2}) format("woff2");
        font-weight: 700;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url(${proximaNovaExtraBoldWoff} format("woff"),
         url(${proximaNovaExtraBoldWoff2} format("woff2");
        font-weight: 800;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url(${proximaNovaThinWoff}) format("woff"),
         url(${proximaNovaThinWoff2}) format("woff2");
        font-weight: 200;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url(${proximaNovaRegularWoff}) format("woff"),
         url(${proximaNovaRegularWoff2}) format("woff2");
        font-weight: 400;
      }
      /**/
      /**/
      @font-face {
        font-family: "SharpSans";
        src: url(${SharpSansBoldWoff}) format("woff"),
         url(${SharpSansBoldWoff2}) format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      /**/
      @font-face {
        font-family: "SharpSans";
        src: url(${SharpSansMediumWoff}) format("woff"),
         url(${SharpSansMediumWoff2}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      /**/
      @font-face {
        font-family: "Shsn";
        src: url(${SharpSansShsnWoff}) format("woff"),
         url(${SharpSansShsnWoff2}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
)

export default Fonts