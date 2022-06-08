import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url("/fonts/ProximaNova/proxima_nova_black-webfont.woff") format("woff"),
         url("/fonts/ProximaNova/proxima_nova_black-webfont.woff2") format("wof2");
        font-weight: 900;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url("/fonts/ProximaNova/proxima_nova_bold-webfont.woff") format("woff"),
         url("/fonts/ProximaNova/proxima_nova_bold-webfont.woff2") format("woff2");
        font-weight: 700;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url("/fonts/ProximaNova/proxima_nova_extrabold-webfont.woff") format("woff"),
         url("/fonts/ProximaNova/proxima_nova_extrabold-webfont.woff2") format("woff2");
        font-weight: 800;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url("/fonts/ProximaNova/proxima_nova_thin-webfont.woff") format("woff"),
         url("/fonts/ProximaNova/proxima_nova_thin-webfont.woff2") format("woff2");
        font-weight: 200;
      }
      /**/
      @font-face {
        font-family: "ProximaNova";
        src: local("ProximaNova"),
         url("/fonts/ProximaNova/proximanova-regular-webfont.woff") format("woff"),
         url("/fonts/ProximaNova/proximanova-regular-webfont.woff2") format("woff2");
        font-weight: 400;
      }
      /**/
      /**/
      @font-face {
        font-family: "SharpSans";
        src: url("/fonts/SharpSans/SharpSansNo1-Bold.woff") format("woff"),
         url("/fonts/SharpSans/SharpSansNo1-Bold.woff2") format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      /**/
      @font-face {
        font-family: "SharpSans";
        src: url("/fonts/SharpSans/SharpSansNo1Medium-Regular.woff") format("woff"),
         url("/fonts/SharpSans/SharpSansNo1Medium-Regular.woff2") format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      /**/
      @font-face {
        font-family: "Shsn";
        src: url("/fonts/SharpSans/shsn-webfont.woff") format("woff"),
         url("/fonts/SharpSans/shsn-webfont.woff2") format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
)

export default Fonts