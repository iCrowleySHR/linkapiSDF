import{r}from"./index-BS76D-Bf.js";function a(){return r.useEffect(()=>{if(document.getElementById("userway-script"))return;const t=document.createElement("script");t.id="userway-script",t.src="https://cdn.userway.org/widget.js",t.setAttribute("data-account","KmNQWOhE4K"),t.async=!0,document.body.appendChild(t);const e=document.createElement("div");e.id="vlibras-container",e.setAttribute("vw",""),e.className="enabled",e.innerHTML=`
            <div vw-access-button class="active"></div>

            <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
            </div>
        `,document.body.appendChild(e);const i=document.createElement("script");i.id="vlibras-script",i.src="https://vlibras.gov.br/app/vlibras-plugin.js",i.async=!0,i.onload=()=>{window.VLibras&&new window.VLibras.Widget("https://vlibras.gov.br/app")},document.body.appendChild(i)},[]),null}export{a as default};
