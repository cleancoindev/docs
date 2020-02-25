(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{250:function(t,e,s){"use strict";s.r(e);var a=s(3),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transfer-asset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transfer-asset"}},[t._v("#")]),t._v(" Transfer asset")]),t._v(" "),s("p",[t._v("If you are an asset owner you have the ability to transfer this ownership to someone else. This action is perminent, once you transfer ownership you cannot get it back unless the new owner transfers it back. In this guide we will transfer ownership of an existing asset.")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("In this guide, we will assume you have gone through the "),s("router-link",{attrs:{to:"/api/guides/asset-ledger-deployment.html#asset-ledger-deployment"}},[t._v("Asset ledger deployment")]),t._v(" guide and have deployed an asset ledger and that you have gone trough "),s("router-link",{attrs:{to:"/api/guides/asset-ledger-deployment.html#asset-ledger-deployment"}},[t._v("Issue asset")]),t._v(" guide and created asset. You will also need a MetaMask/Bitski account with some credits.")],1),t._v(" "),s("h2",{attrs:{id:"usage-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[t._v("#")]),t._v(" Usage overview")]),t._v(" "),s("p",[t._v("We begin by importing the client modules.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ActionTransferAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActionKind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Priority "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@0xcert/client"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Before we can start transferring assets we must initialize our client first.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  apiUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api-staging.0xcert.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("For successful client initialization you need connected 0xcert framework provider instance. See "),s("router-link",{attrs:{to:"/api/guides/providers.html#providers"}},[t._v("Using providers")]),t._v(" chapter for detailed instructions. Your provider must be connected to "),s("code",[t._v("Rinkeby")]),t._v(" Ethereum test network.")],1)]),t._v(" "),s("p",[t._v("Once client is initialized, we define our transfer asset action.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actionTransferAsset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ActionTransferAsset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  kind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ActionKind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TRANSFER_ASSET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  assetLedgerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ledger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  senderId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  receiverId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" asset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("As "),s("code",[t._v("assetLedgerId")]),t._v(" we must provide the ID of our newly deployed asset ledger from guide "),s("router-link",{attrs:{to:"/api/guides/asset-ledger-deployment.html#asset-ledger-deployment"}},[t._v("Asset ledger deployment")]),t._v(" or any other deployed ledger. We specify which issued asset we want to transfer by setting "),s("code",[t._v("id")]),t._v(" to the ID of the asset. We can use asset we created in guide "),s("router-link",{attrs:{to:"/api/guides/issue-asset.html#prerequisites"}},[t._v("Issue asset")]),t._v(" or any other created asset that we own.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Asset with the provided ID must exists on the provided asset ledger.")])]),t._v(" "),s("p",[t._v("As "),s("code",[t._v("senderId")]),t._v(" we set "),s("code",[t._v("provider.accountId")]),t._v(", which means that we will be sending the asset to the receiver. We must specify the receiver of the asset by setting "),s("code",[t._v("receiverId")]),t._v(" to receiver's address.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Account address specified as "),s("code",[t._v("senderId")]),t._v(" can only transfer asset if they are either the asset's owner or if they have been authorized by the asset's owner and have the ability to operate with it on their behalf.")])]),t._v(" "),s("p",[t._v("After we defined our transfer asset action, it's time to define our order which will perform the defined action.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  signersIds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    actionTransferAsset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  wildcardSigner"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  automatedPerform"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  payerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Order must be signed by all of the accounts specified in "),s("code",[t._v("signersIds")]),t._v(" array. In our case, we are transferring our asset, so we are the only signer of the order. We add our defined transfer asset action in "),s("code",[t._v("actions")]),t._v(" array. There can be multiple different actions present in one order and they will be atomically performed. If "),s("code",[t._v("wildcardSigner")]),t._v(" is set to "),s("code",[t._v("true")]),t._v(" order can be signed by any account. In our case we need only our signature for the order to be successfully performed, so we set "),s("code",[t._v("wildcardSigner")]),t._v(" to "),s("code",[t._v("false")]),t._v(". We want our order to be performed as soon as it can be, so we enable automated performance of the order by setting "),s("code",[t._v("automatedPerform")]),t._v(" to "),s("code",[t._v("true")]),t._v(". Order will be automatically performed after all of the requirements of the order are fulfilled. If "),s("code",[t._v("automatedPerform")]),t._v(" was set to "),s("code",[t._v("false")]),t._v(" we would need to call "),s("code",[t._v("performOrder(orderRef)")]),t._v(" function after the order creation. As "),s("code",[t._v("payerId")]),t._v(" we set "),s("code",[t._v("provider.accountId")]),t._v(", so we will be paying for the execution of the order. To learn more about different scenarios check out the "),s("router-link",{attrs:{to:"/api/guides/additional-scenarios.html"}},[t._v("Additional scenarios")]),t._v(" section.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If payer is not specified "),s("code",[t._v("wildcardSigner")]),t._v(" field must be set to "),s("code",[t._v("true")]),t._v(" and order's payer will be set automatically. If payer is specified it must be listed as order signer in "),s("code",[t._v("signersIds")]),t._v(" array.")])]),t._v(" "),s("p",[t._v("After our actions order is defined we can finally create it.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actionsOrder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Priority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HIGH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Make sure you have enough credits to perform this action.")])]),t._v(" "),s("p",[t._v("Since actions order performance might take some time, we can check the order's status by requesting its data.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionsOrder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If the status of the action order equals to "),s("code",[t._v("7")]),t._v(", we know that our order was performed successfully and asset was transferred.")])])}),[],!1,null,null,null);e.default=n.exports}}]);