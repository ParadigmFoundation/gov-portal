import React from 'react';

function WarningSign() {
  return (
    <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1">
      <defs>
        <rect x="13" y="12" width="18" height="18" id="rect-1" />
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="View-Proposal-Challenge" transform="translate(-497.000000, -548.000000)">
          <g id="Group-8" transform="translate(441.000000, 143.000000)">
            <g id="Group-7" transform="translate(43.000000, 392.000000)">
              <g id="Bitmap">
                <image x="13" y="12" width="18" height="18" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAMSWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSSWiBCEgJvYnSq5QQWgQBqYKNkAQSSowJQcTOIqvg2kUE1BVdFXHRtQCyVtS1Loq9PxRRWVkXCzZU3qTAuvq99753vm/u/e+Zc/5TMvdmBgCdWp5UmofqApAvKZAlRIayJqals0hdAAVaQBsOTx5fLmXHx8cAKEP3f8qb6wBR3q+4KLm+nf+voicQyvkAIPEQZwrk/HyI9wOAl/KlsgIAiL5Qbz2zQKrEkyE2kMEEIZYqcbYalypxphpXqWySEjgQ7wKATOPxZNkAaLdAPauQnw15tG9C7CoRiCUA6JAhDuKLeAKIoyAelZ8/XYmhHXDI/IIn+x+cmcOcPF72MFbXohJymFguzePN+j/b8b8lP08xFMMODppIFpWgrBn27Wbu9GglpkHcK8mMjYNYH+J3YoHKHmKUKlJEJavtUVO+nAN7BpgQuwp4YdEQm0IcIcmLjdHoM7PEEVyI4QpBi8QF3CSN72KhPDxRw1krm54QN4SzZBy2xreRJ1PFVdqfVOQmszX8N0VC7hD/62JRUqo6Z4xaKE6JhVgbYqY8NzFabYPZFIs4sUM2MkWCMn8biP2FkshQNT82NUsWkaCxl+XLh+rFFovE3FgNri4QJUVpeHbxear8jSBuEUrYyUM8QvnEmKFaBMKwcHXt2CWhJFlTL9YpLQhN0Pi+lObFa+xxqjAvUqm3gthUXpio8cWDCuCCVPPjsdKC+CR1nnhmDm9cvDofvAjEAA4IAyyggCMTTAc5QNze29wLn9QzEYAHZCAbCIGLRjPkkaqakcBrIigGf0IkBPJhv1DVrBAUQv2nYa366gKyVLOFKo9c8BjifBAN8uCzQuUlGY6WAh5Bjfib6HyYax4cyrlvdWyoidFoFEO8LJ0hS2I4MYwYRYwgOuImeBAegMfAawgc7rgv7jeU7d/2hMeEDsJDwjVCJ+HWNHGJ7Kt6WGA86IQRIjQ1Z35ZM24HWb3wUDwQ8kNunImbABfcE0Zi48EwthfUcjSZK6v/mvsfNXzRdY0dxZWCUkZQQigOX3tqO2l7DbMoe/plh9S5Zg73lTM883V8zhedFsB79NeW2GJsH3YaO46dxQ5hzYCFHcVasAvYYSUeXkWPVKtoKFqCKp9cyCP+Jh5PE1PZSblrg2uP60f1XIGwSPl9BJzp0lkycbaogMWGX34hiyvhjx7Fcnd18wNA+T+i/ky9Yqr+HxDmub91JfcACEwbHBw89LcuBr6n+58CQO39W2ffAAD9CABnFvEVskK1DldeCIAKdOAbZQzMgTVwgPW4A28QAEJAOBgH4kASSANTYZdFcD3LwEwwBywEZaACrABrQTXYBLaAHeBnsBc0g0PgOPgNnAeXwDVwB66ebvAM9IE3YABBEBJCRxiIMWKB2CLOiDviiwQh4UgMkoCkIRlINiJBFMgc5DukAlmFVCObkXrkF+Qgchw5i3Qgt5AHSA/yEvmAYigNNUDNUDt0DOqLstFoNAmdgmajM9BitBRdhlahdegutAk9jp5Hr6Gd6DO0HwOYFsbELDEXzBfjYHFYOpaFybB5WDlWidVhjVgr/J2vYJ1YL/YeJ+IMnIW7wBUchSfjfHwGPg9filfjO/Am/CR+BX+A9+GfCXSCKcGZ4E/gEiYSsgkzCWWESsI2wgHCKfg2dRPeEIlEJtGe6APfxjRiDnE2cSlxA3E38Rixg9hF7CeRSMYkZ1IgKY7EIxWQykjrSbtIR0mXSd2kd2QtsgXZnRxBTidLyCXkSvJO8hHyZfIT8gBFl2JL8afEUQSUWZTllK2UVspFSjdlgKpHtacGUpOoOdSF1CpqI/UU9S71lZaWlpWWn9YELbHWAq0qrT1aZ7QeaL2n6dOcaBzaZJqCtoy2nXaMdov2ik6n29FD6On0Avoyej39BP0+/Z02Q3u0NldboD1fu0a7Sfuy9nMdio6tDltnqk6xTqXOPp2LOr26FF07XY4uT3eebo3uQd0buv16DD03vTi9fL2lejv1zuo91Sfp2+mH6wv0S/W36J/Q72JgDGsGh8FnfMfYyjjF6DYgGtgbcA1yDCoMfjZoN+gz1Df0NEwxLDKsMTxs2MnEmHZMLjOPuZy5l3md+WGE2Qj2COGIJSMaR1we8dZopFGIkdCo3Gi30TWjD8Ys43DjXOOVxs3G90xwEyeTCSYzTTaanDLpHWkwMmAkf2T5yL0jb5uipk6mCaazTbeYXjDtNzM3izSTmq03O2HWa840DzHPMV9jfsS8x4JhEWQhtlhjcdTiD5Yhi83KY1WxTrL6LE0toywVlpst2y0HrOytkq1KrHZb3bOmWvtaZ1mvsW6z7rOxsBlvM8emwea2LcXW11Zku872tO1bO3u7VLvv7Zrtntob2XPti+0b7O860B2CHWY41DlcdSQ6+jrmOm5wvOSEOnk5iZxqnC46o87ezmLnDc4dowij/EZJRtWNuuFCc2G7FLo0uDwYzRwdM7pkdPPo52NsxqSPWTnm9JjPrl6uea5bXe+46buNcytxa3V76e7kznevcb/qQfeI8Jjv0eLxwtPZU+i50fOmF8NrvNf3Xm1en7x9vGXejd49PjY+GT61Pjd8DXzjfZf6nvEj+IX6zfc75Pfe39u/wH+v/18BLgG5ATsDno61Hyscu3VsV6BVIC9wc2BnECsoI+jHoM5gy2BecF3wwxDrEEHItpAnbEd2DnsX+3moa6gs9EDoW44/Zy7nWBgWFhlWHtYerh+eHF4dfj/CKiI7oiGiL9IrcnbksShCVHTUyqgbXDMun1vP7RvnM27uuJPRtOjE6OrohzFOMbKY1vHo+HHjV4+/G2sbK4ltjgNx3LjVcffi7eNnxP86gTghfkLNhMcJbglzEk4nMhKnJe5MfJMUmrQ86U6yQ7IiuS1FJ2VySn3K29Sw1FWpnRPHTJw78XyaSZo4rSWdlJ6Svi29f1L4pLWTuid7TS6bfH2K/ZSiKWenmkzNm3p4ms403rR9GYSM1IydGR95cbw6Xn8mN7M2s4/P4a/jPxOECNYIeoSBwlXCJ1mBWauynmYHZq/O7hEFiypFvWKOuFr8IicqZ1PO29y43O25g3mpebvzyfkZ+Qcl+pJcycnp5tOLpndInaVl0s4Z/jPWzuiTRcu2yRH5FHlLgQHcsF9QOCgWKR4UBhXWFL6bmTJzX5FekaTowiynWUtmPSmOKP5pNj6bP7ttjuWchXMezGXP3TwPmZc5r22+9fzS+d0LIhfsWEhdmLvw9xLXklUlr79L/a611Kx0QWnXoshFDWXaZbKyG98HfL9pMb5YvLh9iceS9Us+lwvKz1W4VlRWfFzKX3ruB7cfqn4YXJa1rH259/KNK4grJCuurwxeuWOV3qriVV2rx69uWsNaU77m9dppa89WelZuWkddp1jXWRVT1bLeZv2K9R+rRdXXakJrdtea1i6pfbtBsOHyxpCNjZvMNlVs+vCj+MebmyM3N9XZ1VVuIW4p3PJ4a8rW0z/5/lS/zWRbxbZP2yXbO3ck7DhZ71Nfv9N05/IGtEHR0LNr8q5LP4f93NLo0rh5N3N3xR6wR7Hnj18yfrm+N3pv2z7ffY37bffXHmAcKG9CmmY19TWLmjtb0lo6Do472NYa0Hrg19G/bj9keajmsOHh5UeoR0qPDB4tPtp/THqs93j28a62aW13Tkw8cfXkhJPtp6JPnfkt4rcTp9mnj54JPHPorP/Zg+d8zzWf9z7fdMHrwoHfvX4/0O7d3nTR52LLJb9LrR1jO45cDr58/ErYld+ucq+evxZ7reN68vWbNybf6LwpuPn0Vt6tF7cLbw/cWXCXcLf8nu69yvum9+v+5fiv3Z3enYcfhD248DDx4Z0uftezR/JHH7tLH9MfVz6xeFL/1P3poZ6Inkt/TPqj+5n02UBv2Z96f9Y+d3i+/6+Qvy70TezrfiF7Mfhy6SvjV9tfe75u64/vv/8m/83A2/J3xu92vPd9f/pD6ocnAzM/kj5WfXL81Po5+vPdwfzBQSlPxlNtBTA40KwsAF5uh/uENAAYl+D+YZL6nKcSRH02VSHwn7D6LKgSbwAa4U25XeccA2APHHYLIDd8Vm7Vk0IA6uExPDQiz/JwV3PR4ImH8G5w8JUZAKRWAD7JBgcHNgwOftoKk70FwLEZ6vOlUojwbPBjiBJdMxIsAF/JvwHHt4A11+SAigAACuRJREFUeAHtnVnIVVUYhq1osLIULCwp7G9QK2mGaKASIiWKTCpKLzQyKqGiwYqiwObhQi+MBskuigYxuom6siAsxItUGlEzU0pTaUTDxve1f8f2cPY5a629195r7fV+8P3nnP2v4fue9Z511h7OPkOGyERABERABERABERABERABERABERABERABERABERABERABERABAInsFfg8TUd3oEI4Hr4yfDRg8FswuNq+MvwnXCZCFgReAilf4b/U+A/Yvs9cJkIGBGYgFKfw4sE1bl9Jcoeb9SyCiVLYDgy3wjvFE+/1+tRZ1iy1JR4XwJvo0Q/ERX9/82+ratAkgSuLCGqTGxTkiSnpAsJDMV/vodnAnF9/BZtsC2ZCOwm8AT+uoqps97jYioCJDAA3wXvFIjra7bFNmWJE1iK/F1FVFSPbcoSJnANci8SR9ntVyfMNenUq1qwFwmQOwNayCcosWeQc5Eoqtr+dIJck055LLL/swZhsQ/2JUuEwDLkWdWs1K8d9iVLgMB05NhPDFX/f1oCXJNOkSeKtzYgLPapk9Qtlt78BkSVzX7zWsw16dR4nVUdC/ZMSJ2P7JsxyFpGYAXy6Rzsul8zBlmLCMxELnWLqKi/GS3imnQqvCq0iQV7kbAYC2OSRU7gWcRfNMhNbV8QOdPkw+di+e8AhcWYtJCPVJ78zmQIC/aiWVEL+UiFdSPiLhrUULbPipRtsmFzccwvlIYioKI4GKMW8hHJ9MUIRJWJ7YWIuCYd6pkRiYri4kKeMcsCJsAFO2/Ykc0GsTwyZt2gJWBhzY5QVJn4bwmYa9KhjUT2v0QsLC7kmYMsMAIvI57s3R/r46LAmCYfzjktEFX2ZtBCPhA574M4vmyRsLiQZ06yhgnchv6zd3tbHm9tmGny3ce+YC96I3AnRAv5BuX9KvouGpzYt7/SINekuz63BlEtRh88NnZojjSf3wx/C+5bvMxRVjMBmxvQ2gpgM3IxuV6Ke3A8/mTbvml55iirkcBd6Mt0cFzKnWaRy3meY7nTIhYVLUHgSNTljftdBGNS5zGH2J7zGA9zZc4yzwTeQPsmAnEtM8Yh/tM9x/S6Q0yqYkHgIs8DyEtYXK4y4E+juArZtB5zl3kgsC/aXAc3HQiXcrtKxP2H59iYOxnIKiZwH9pzEYtNHX4N3tVs+nEte69rcKrXncBR2LwD7jogNvW6R9B76941xUYGZCGriEAdByMz8VEktrYfKmT1fT8usQ1O5bsTuKTGQaMoXIw3sfUtqHz7ZCIrQWB/1PW9YM8PGJ8f7BDvCNTpbMfnazIhm2DNZdqvMxn+0GTdv/LgMmAH1AllkMmcmvtsTXdcpP4O9/nO79a2y1HuYxqIk2yCXciHPGM9D3AusweqlTKXPuuesZgg49RdayyH+jKU7zab1LFtnGWsLM6T1nXE1q2PyQ7xJlmF78RvGxyoMxyon99gvGTlMss6pGleJcSPwgcQfpNrB573s7WDbCtUWJ6s7q+wvVY2NYCseL6u25Rf17ZJDmSnNhwzF/JkF4yFNmMtBJmmT7TGNmNRTPwoJLtgLCRhXQkqIVwaEqOwKCiym8InIVgowuIpkVB2nV2OvA8LYTARw3w4WTZuoQjrIZAY1TiN/wJwWYi7iNFHulzIP+ijYds2QxDWAIK+wzZwj+VdROJSx1cK/PIFmTZqIQgrhAV7fhBinrGYB3d+Gl/INy2sqwEhhAU7ByQzF2G51Mn68/FIpmTbmDUpLC4yudgMzVw+1g4JLQnE0+hCvklhPYzkQ1mw53XhMvu4iDHfp4/nZDvXR8MhtzkWwf0Jr+touk0/7zmAWxFoLmRM1rVbUzPWS8g01JuLtWXGopjImKxrtyaENR1ZnlN7puYdunysudQxj6hcSbKeVq6J8GvzCPVWuM1HU91lv3LA6POOM1XkT+a1nh2oe8Z6BAmGfqc6l3OFLnUc9Otchcy5s9RKm4CsQl2w52eF7Zb0+ebM1w/1OdlzDFpnoe45dQqBtw2yMd7hr7ONUF9zDFplM5FNqLC7xWUD/4jIcpthk1zIZfl7fD/Auw1gqNtsLj05NrLctiBe77+RWMfinXfIOwwek9kIy6ZsCAwORxCPhhBImRi4WOTNzEKdmYri4sebqfEGt0XthLqdY+J1Ie9zxtoLwfOoLx9jM5svoMY2Y3EssrHxNi4+hTULUfPdHKPZCMumbEgsODYco6gslh/7LvqoOtWC9qUoW9RO6Nt5xsDLQt7XjPW0r4AtBrxMUZtZyBfDMvGb1qWonjItbFPOBxROsTfYBBFgWRthhXqVhilWjlXlS5aqheV9UWhKq2S5lISVjVmlO1lVC+tmDKjX3diSgjGtbnMZDO8/GrtxzG6qMokqhcUDb09WGVyDbQ1Y9H2SRdmQiz6O4II8kL0IgYW+F2Qa3yeGCjgI5Ta1KO9GrjbtxZpXKZoOWizlFiEnCqfIeC35cngs+ZjGeXZRwjbbq1qwrUSnp9h0HEnZLYhzMfwD+HY47UT4xfAr+KKFxrE8LYS8bkcQpu8GlYuDVekfOy87Y42EqL6GDwtB4YqhMgK/oiXuwGxzbbHsXiG/bStRudIPtx7HdF6Z8MrMWFywLyvTueoGT4A/dv6RS5SuwuJpjM/gjXzL1iVR1XEiwK/C8TjdX7a1Xc9z8R5M19p2pvLREeAa+hf4x7aRu8xYR6KTdXCb82m2cYVU/jcEswr+BZyL2glwnrQdDk/BfkeSvK7/O9/Jvo4OUjhs8BPynNkD5lX4H49zpcDitR4cKvnXxERAfo88xxkQG4MynL1TENdFBjyci6xNACLXFOMtCI1B2a3wtouLC3kvdh9abTs85sc8bY3XjqfA5l5TMKaLd97mmYodatpwpOUojhHwny3j59416/Q6aW3ZZJDFefsBHmLa2C860yPv89FQ20VFVqvgtqJiPR7neZ9PWm7UgNEReRNhcdE2peXAsvS4aHc1rj9TMKOfpuknrP1BamEKtAZz3LdErrxNUCpGTVAbhdZPWHNQc6Cwdvv+cXSJlFLixFzvdmXFBTsXayns7eRzPMEBGL98sSMxVtQGNdLVes1Yz6NGKqdt8nBcDjewTgo7N3lO1MaC/AaT55ejUP5dnNLzv5H7BSaQBsvwkuxd8JQY5XOdbMFqyDcJgyI07h2Oh/cznpzdAM+DTu35+m6QeGCv0+ZiA2eslI1rpuvgvBsywXUe2xqNbbfBuXd0BDxl41Ue1NH7eQidR975DlybL6Dnuwksx9/VcF5Ccxb8PLhsTwLUDr//sNs6hbUUW3lAVCYCtgQ4Y03MKuX3Cqdio0SVkdGjLQFq5/8zNNmMxV1lTmOjbFtTeRHIEdiI52PhO7noonHBbrXbuLuW/ojAngQOxUtOVkv5h98h2wLnrCUTgbIEeAZiFGes2+GarcriVP2MAE/kb+PiXaLKkOixKgKTKKyBqlpTOyIwSGCAa6x/hEMEKiawgzPWhoobVXMisJnCWicOIlAxgTUU1pKKG1VzIvAW11j8ytJ2eM9rmMVKBAwJ8DjWYTyO9QecLy6By0SgLIE5aODDfCPv4AX3EOVi4KqBd/OCyp7zI5HrLddGVS9tdouhnZ6nBWejwKcSmN5ghhpYiXI3wfcwLt6LjLfxuRDOm4wdB5eJQEZgDZ6sgPPCUF1xnFHRowiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAjEReBfwJ+AsJp+AnMAAAAASUVORK5CYII=" />
                <use fill="#FD4848" fillRule="evenodd" xlinkHref="#rect-1" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default WarningSign;