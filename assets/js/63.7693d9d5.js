(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{287:function(e,t,a){"use strict";a.r(t);var r=a(3),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providers"}},[e._v("#")]),e._v(" Providers")]),e._v(" "),a("p",[e._v("As explained previously, the 0xcert Framework tends to be platform-agnostic, thus it is not created for merely one blockchain or one specific platform. It aims to provide a consistently optimal developing experience, regardless of the platform you employ. To achieve this, the 0xcert Framework consists of several modules, and each module needs a provider object to tell the module how to operate.")]),e._v(" "),a("p",[e._v("Each provider operates on the same principles, but can also have its own distinctive characteristics. The current version of the Framework supports the Ethereum and the Wanchain blockchains. Soon, more platforms will be added.")]),e._v(" "),a("p",[e._v("Even within the same blockchain, you can use multiple providers depending on your needs. If you would like to communicate with the blockchain on the front-end, you could use "),a("router-link",{attrs:{to:"/framework/v2/api/ethereum-connectors.html#metamask-provider"}},[e._v("MetamaskProvider")]),e._v(", while for communication on the back-end you could use "),a("router-link",{attrs:{to:"/framework/v2/api/ethereum-connectors.html#http-provider"}},[e._v("HttpProvider")]),e._v(". For more information about other providers for Ethereum, such as Bitski, please click "),a("router-link",{attrs:{to:"/framework/v2/api/ethereum-connectors.html#api-ethereum"}},[e._v("here")]),e._v(", and to learn more about providers for Wanchain, please click "),a("router-link",{attrs:{to:"/framework/v2/api/wanchain-connectors.html#api-wanchain"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("In this guide, we will be using the MetaMask provider for the Ethereum blockchain. "),a("a",{attrs:{href:"https://metamask.io/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("MetaMask")]),e._v(" is a popular plug-in that allows you to create and store the private keys for your Ethereum account inside your browser or mobile device. It works as a bridge between your browser and the Ethereum blockchain through its own infrastructure. MetaMask can also be paired with hardware wallets such as "),a("a",{attrs:{href:"https://www.ledger.com/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("Ledger")]),e._v(" or "),a("a",{attrs:{href:"https://trezor.io/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("Trezor")]),e._v(".")]),e._v(" "),a("div",{staticClass:"card custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Live example")]),e._v(" "),a("p",[e._v("Click "),a("a",{attrs:{href:"https://codesandbox.io/s/github/0xcert/example-using-providers?module=%2FREADME.md",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("here")]),e._v(" to check the live example for this section.")])]),e._v(" "),a("h2",{attrs:{id:"installation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-process"}},[e._v("#")]),e._v(" Installation process")]),e._v(" "),a("p",[e._v("We recommend you employ the provider module as an NPM package in your application.")]),e._v(" "),a("div",{staticClass:"language-ell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm i --save @0xcert/ethereum-metamask-provider\n")])])]),a("p",[e._v("On our official "),a("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("GitHub repository")]),e._v(", we also host a compiled and minimized JavaScript file that can be directly implemented into your website. Please refer to the "),a("router-link",{attrs:{to:"/framework/v2/api/ethereum-connectors.html"}},[e._v("API")]),e._v(" section to learn more about other providers.")],1),e._v(" "),a("h2",{attrs:{id:"usage-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[e._v("#")]),e._v(" Usage overview")]),e._v(" "),a("p",[e._v("To start developing the application, we have to first instantiate the "),a("router-link",{attrs:{to:"/framework/v2/api/ethereum-connectors.html#metamask-provider"}},[e._v("MetamaskProvider")]),e._v(" provider class. This is usually only needed once within the application.")],1),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" MetamaskProvider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@0xcert/ethereum-metamask-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MetamaskProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("MetaMask needs to be authorized and unlocked to be used on the website. This is specific to this provider. Therefore, before you start interacting with the Ethereum node, you should check whether the MetaMask account has been enabled. If not, you have to enable it, as shown in the example below.")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Now that we're connected to the Ethereum blockchain, we can begin performing "),a("code",[e._v("query")]),e._v(" and "),a("code",[e._v("mutation")]),e._v(" requests.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("When you connect to MetaMask, "),a("code",[e._v("provider.accountId")]),e._v(" represents your selected account.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Make sure your MetaMask account is connected to the Ethereum Ropsten network.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("To perform this deployment step, you'll need to pay some gas on the Ethereum network. You can get free Ether in your wallet on the Ropsten network via "),a("a",{attrs:{href:"https://faucet.ropsten.be/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("this link")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"error-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[e._v("#")]),e._v(" Error handling")]),e._v(" "),a("p",[e._v("If any error happens on the blockchain, providers are able to handle it and throw a meaningful error, so you know exactly what went wrong.")]),e._v(" "),a("p",[e._v("Error example:")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ProviderError'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  issue"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'001001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  original"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// optional")]),e._v("\n  message"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Sender does not have sufficient balance.'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);