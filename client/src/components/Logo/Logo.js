import * as React from 'react';

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={101}
    height={32}
    fill='none'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='url(#b)'
        d='M17.108 0h-2.48C6.55 0 0 7.163 0 16s6.55 16 14.629 16h2.479c8.08 0 14.629-7.163 14.629-16S25.187 0 17.108 0Z'
      />
    </g>
    <path
      fill='#202020'
      d='M37.945 8v15.724H37V8h.945ZM42.096 23.97c-.528 0-.992-.254-1.39-.76-.397-.508-.707-1.216-.93-2.128-.222-.91-.332-1.975-.332-3.193 0-1.229.11-2.301.331-3.217.224-.916.534-1.628.93-2.135.4-.506.863-.76 1.391-.76.529 0 .991.254 1.387.76.4.507.71 1.219.93 2.135.224.916.336 1.988.336 3.217 0 1.218-.112 2.283-.336 3.194-.22.91-.53 1.62-.93 2.126-.396.507-.858.76-1.387.76Zm0-1.628c.402 0 .732-.208.991-.622.26-.415.451-.96.575-1.636.125-.675.187-1.407.187-2.195 0-.789-.062-1.523-.186-2.204-.125-.68-.317-1.23-.576-1.65-.26-.42-.59-.63-.99-.63-.402 0-.733.21-.992.63-.259.42-.45.97-.575 1.65-.125.681-.187 1.415-.187 2.204 0 .788.062 1.52.187 2.195.124.676.316 1.221.575 1.636.26.414.59.622.991.622ZM45.387 9.69V8h5.853v1.69h-2.454v14.034h-.945V9.689h-2.454ZM52.272 9.69V8h5.854v1.69h-2.454v14.034h-.945V9.689h-2.455ZM61.068 23.97c-.564 0-1.05-.252-1.46-.753-.406-.507-.72-1.213-.94-2.12-.22-.91-.329-1.97-.329-3.178 0-1.207.11-2.272.328-3.194.221-.926.529-1.648.922-2.165.397-.522.86-.783 1.388-.783.304 0 .606.103.903.308.297.204.568.537.811.997.244.456.439 1.06.584 1.812.144.753.217 1.68.217 2.78v.768H58.98v-1.567h3.597c0-.665-.066-1.259-.198-1.781-.13-.522-.315-.934-.556-1.236-.24-.302-.521-.453-.846-.453-.359 0-.669.18-.93.537-.26.354-.459.814-.599 1.382a7.63 7.63 0 0 0-.21 1.828v1.044c0 .89.077 1.645.23 2.265.154.614.37 1.082.643 1.405.275.317.594.476.957.476.236 0 .45-.067.64-.2.193-.138.36-.343.5-.614.14-.277.247-.62.323-1.029l.87.491a5.578 5.578 0 0 1-.462 1.567c-.216.445-.483.793-.8 1.044a1.706 1.706 0 0 1-1.071.368ZM65.76 16.63v7.094h-.9V11.93h.869v1.843h.076c.137-.6.345-1.08.625-1.444.28-.368.64-.553 1.082-.553.397 0 .743.164 1.04.492.298.322.53.813.694 1.474.165.655.248 1.484.248 2.487v7.494h-.9v-7.37c0-.927-.119-1.649-.358-2.166-.238-.522-.566-.783-.983-.783-.287 0-.543.125-.77.376-.223.251-.4.617-.53 1.098-.129.481-.194 1.065-.194 1.75ZM73.348 23.97c-.488 0-.919-.249-1.292-.745-.374-.502-.666-1.208-.877-2.12-.21-.916-.316-1.998-.316-3.247 0-1.239.106-2.314.316-3.225.211-.91.505-1.614.88-2.11.377-.497.811-.746 1.304-.746.381 0 .682.128.903.384.224.251.394.538.51.86.12.317.213.579.28.783h.075V8h.9v15.724h-.87v-1.812h-.106a15.2 15.2 0 0 1-.282.814 2.79 2.79 0 0 1-.522.867c-.226.25-.527.376-.903.376Zm.122-1.628c.36 0 .665-.19.914-.569.25-.383.439-.913.568-1.589.13-.68.195-1.466.195-2.357 0-.88-.064-1.65-.191-2.31-.127-.666-.315-1.183-.564-1.551-.249-.374-.556-.561-.922-.561-.381 0-.699.197-.953.591-.251.39-.44.919-.568 1.59a12.248 12.248 0 0 0-.186 2.241c0 .84.063 1.602.19 2.288.13.68.32 1.224.572 1.628.254.399.569.599.945.599ZM79.525 24c-.37 0-.707-.14-1.01-.422-.302-.287-.542-.699-.72-1.236-.178-.543-.267-1.198-.267-1.966 0-.675.066-1.223.199-1.643.132-.425.308-.757.53-.998a2.2 2.2 0 0 1 .731-.537c.27-.123.54-.22.812-.292.355-.092.644-.161.865-.207.223-.052.386-.136.488-.254.104-.117.156-.322.156-.614v-.061c0-.758-.103-1.346-.309-1.766-.203-.42-.512-.63-.926-.63-.43 0-.766.19-1.01.568a3.804 3.804 0 0 0-.514 1.213l-.854-.614c.153-.716.356-1.274.61-1.673.256-.405.536-.686.838-.845.305-.164.605-.246.9-.246.188 0 .404.046.648.139.246.087.484.268.712.545.231.276.423.693.576 1.251.152.558.228 1.305.228 2.242v7.77h-.9v-1.597h-.045c-.06.256-.163.53-.305.821-.142.292-.331.54-.568.745a1.275 1.275 0 0 1-.865.307Zm.137-1.628c.356 0 .656-.14.9-.422.246-.281.432-.645.556-1.09.127-.445.19-.914.19-1.405v-1.658c-.037.092-.121.176-.25.253a2.551 2.551 0 0 1-.443.192 10.84 10.84 0 0 1-.484.138c-.155.036-.28.067-.377.092a2.114 2.114 0 0 0-.656.3c-.2.133-.363.335-.487.606-.122.266-.183.63-.183 1.09 0 .63.115 1.106.347 1.428.233.318.53.476.887.476ZM84.75 16.63v7.094h-.9V11.93h.869v1.843h.076c.137-.6.345-1.08.625-1.444.28-.368.64-.553 1.082-.553.397 0 .743.164 1.04.492.298.322.53.813.694 1.474.165.655.248 1.484.248 2.487v7.494h-.9v-7.37c0-.927-.119-1.649-.358-2.166-.239-.522-.566-.783-.983-.783-.287 0-.544.125-.77.376-.223.251-.4.617-.53 1.098-.129.481-.194 1.065-.194 1.75ZM92.505 23.97c-.548 0-1.02-.262-1.417-.784s-.701-1.241-.915-2.157c-.213-.916-.32-1.963-.32-3.14 0-1.198.11-2.255.328-3.171.22-.921.528-1.64.922-2.158.396-.522.859-.783 1.387-.783.412 0 .783.154 1.113.461.33.307.6.737.812 1.29.21.553.341 1.197.392 1.935h-.9a3.834 3.834 0 0 0-.456-1.428c-.234-.42-.55-.63-.946-.63-.35 0-.658.184-.922.553-.261.363-.466.878-.613 1.543-.145.66-.218 1.436-.218 2.326 0 .911.072 1.705.214 2.38.145.676.348 1.2.61 1.574.264.374.574.56.93.56a.953.953 0 0 0 .636-.245c.19-.164.352-.4.484-.706.132-.308.226-.676.282-1.106h.9a7.065 7.065 0 0 1-.378 1.881c-.198.553-.461.993-.789 1.32-.325.323-.704.484-1.136.484ZM98.576 23.97c-.564 0-1.05-.252-1.46-.753-.406-.507-.72-1.213-.94-2.12-.22-.91-.328-1.97-.328-3.178 0-1.207.109-2.272.327-3.194.221-.926.529-1.648.923-2.165.396-.522.858-.783 1.387-.783.305 0 .606.103.903.308.297.204.568.537.812.997.244.456.438 1.06.583 1.812.145.753.217 1.68.217 2.78v.768h-4.512v-1.567h3.597a7.3 7.3 0 0 0-.198-1.781c-.13-.522-.315-.934-.556-1.236-.239-.302-.521-.453-.846-.453-.358 0-.668.18-.93.537-.26.354-.459.814-.598 1.382a7.634 7.634 0 0 0-.21 1.828v1.044c0 .89.076 1.645.229 2.265.155.614.37 1.082.644 1.405.274.317.593.476.956.476.237 0 .45-.067.64-.2.194-.138.36-.343.5-.614.14-.277.247-.62.324-1.029l.869.491a5.591 5.591 0 0 1-.462 1.567c-.216.445-.482.793-.8 1.044a1.706 1.706 0 0 1-1.07.368Z'
    />
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
      <pattern
        id='b'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <use xlinkHref='#c' transform='matrix(.00781 0 0 .00847 0 -.042)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,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'
        id='c'
        width={128}
        height={128}
      />
    </defs>
  </svg>
);

export default Logo;