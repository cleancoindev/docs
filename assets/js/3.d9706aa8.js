(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{220:function(e,t,a){e.exports=a.p+"assets/img/notarized.e62f8d82.svg"},221:function(e,t,a){e.exports=a.p+"assets/img/part-proved.c1187f5f.svg"},222:function(e,t,a){e.exports=a.p+"assets/img/exposed-part.5e486307.svg"},223:function(e,t,a){e.exports=a.p+"assets/img/zero-info.eab30f82.svg"},224:function(e,t,a){e.exports=a.p+"assets/img/no-conflicting-proogs.a3213736.svg"},225:function(e,t,a){e.exports=a.p+"assets/img/conflicts-explained.c37f02a2.svg"},297:function(e,t,a){"use strict";a.r(t);var r=a(3),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"threat-models"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#threat-models"}},[e._v("#")]),e._v(" Threat models")]),e._v(" "),r("p",[e._v("The 0xcert Framework includes a novel and efficient approach for taking arbitrary information, notarizing it, and putting the notarization on a blockchain. Doing this relies on certain cryptographic primatives and techniques and the Framework provides certain assurances.")]),e._v(" "),r("p",[e._v("Everybody that designs a system with 0xcert Framework should understand the system assurances so that your product is secure for the use cases you are considering. You do not need to understand cryptography to read this page, but you must have a complete understanding of your intended use case and the assurances you need to provide your end-users.")]),e._v(" "),r("h2",{attrs:{id:"assurances"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assurances"}},[e._v("#")]),e._v(" Assurances")]),e._v(" "),r("p",[e._v("The security of your product depends on the assurances provided by 0xcert Framework. Let's spell them out.")]),e._v(" "),r("h3",{attrs:{id:"_1-any-document-can-be-notarized"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-any-document-can-be-notarized"}},[e._v("#")]),e._v(" 1. Any document can be notarized")]),e._v(" "),r("p",[e._v("Using the language of 0xcert Conventions, you can notarize any document type. This includes:")]),e._v(" "),r("ul",[r("li",[e._v("Opaque documents — like a Microsoft Work .DOCX file")]),e._v(" "),r("li",[e._v("Record — like rows in a relational database")]),e._v(" "),r("li",[e._v("Structural documents — like the output of "),r("a",{attrs:{href:"https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids",target:"_self",rel:"noopener noreferrer alternate"}},[r("code",[e._v("followers/ids.json")])]),e._v(", part of the Twitter programmer interface")])]),e._v(" "),r("p",[e._v("The person that has access to the document is able to notarize it, generating an "),r("strong",[e._v("imprint")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language-mermaid extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("graph LR\n    Document--\x3e|Notarize|Imprint\n    classDef good fill:lightgreen,stroke:darkgreen,stroke-width:2px;\n    class Imprint good;\n")])])]),r("p",[r("img",{attrs:{src:a(220),alt:"Notarized"}})]),e._v(" "),r("p",[e._v("This imprint can be published as part of an Asset in the 0xcert Framework.")]),e._v(" "),r("h3",{attrs:{id:"_2-any-part-of-a-document-can-be-proved"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-any-part-of-a-document-can-be-proved"}},[e._v("#")]),e._v(" 2. Any part of a document can be proved")]),e._v(" "),r("p",[e._v("The person that has access to the document is able to expose part of a document, generating a "),r("strong",[e._v("proof")]),e._v(". This allows them to share that part with somebody else.")]),e._v(" "),r("div",{staticClass:"language-mermaid extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("graph LR\n    PartA--\x3eDocument\n    PartB--\x3eDocument\n    PartC--\x3eDocument\n    PartD--\x3eDocument\n    PartE--\x3eDocument\n    Document--\x3e|Notarize|Imprint\n    PartE--\x3e|Expose|Proof\n    classDef good fill:lightgreen,stroke:darkgreen,stroke-width:2px;\n    class Proof good\n")])])]),r("p",[r("img",{attrs:{src:a(221),alt:"Part of a document being proved"}})]),e._v(" "),r("h3",{attrs:{id:"_3-a-proof-convinces-the-recipient-that-the-exposed-part-is-true"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-a-proof-convinces-the-recipient-that-the-exposed-part-is-true"}},[e._v("#")]),e._v(" 3. A proof convinces the recipient that the exposed part is true")]),e._v(" "),r("p",[e._v("Everyone that receives the proof will be sure that "),r("strong",[e._v("PartE")]),e._v(" is part of the document that has the given imprint.")]),e._v(" "),r("p",[e._v("And further, everyone will be sure that PartE is in a specific part of the document.")]),e._v(" "),r("div",{staticClass:"language-mermaid extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("graph LR\n    ?1--\x3e?\n    ?2--\x3e?\n    ?3--\x3e?\n    ?4--\x3e?\n    PartE--\x3e?\n    ?--\x3e|Notarize|Imprint\n    PartE--\x3e|Expose|Proof\n    classDef good fill:lightgreen,stroke:darkgreen,stroke-width:2px;\n    class PartE good\n")])])]),r("p",[r("img",{attrs:{src:a(222),alt:"Exposed part"}})]),e._v(" "),r("p",[e._v('When we say "sure" this specifically means: if an attacker has all the resources of every computer on Earth and they used them for the next 10 years entirely for the purpose of convincing anybody that X (which is not ParteE) is in this part of the document then they are very unlikely to succeed.')]),e._v(" "),r("p",[e._v('⚠️ This assurance depends on the security of your hash function. By default, we use the SHA-256 algorithm. And currently, about 0.5% of the Earth\'s electricity consumption is dedicated to attacking the SHA-256 algorithm[[1]](When we say "cannot" this specifically means if that person has all the resources of every computer on Earth and they used them entirely for the purpose of this task for the next 10 years they are very unlikely to succeed. ). If you use a different hash function then your implementation may not be able to provide this strong assurance.')]),e._v(" "),r("h3",{attrs:{id:"_4-an-imprint-provides-zero-information-about-the-document-or-its-parts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-an-imprint-provides-zero-information-about-the-document-or-its-parts"}},[e._v("#")]),e._v(" 4. An imprint provides zero information about the document or its parts")]),e._v(" "),r("p",[e._v("If somebody has only the imprint (these are succinct, smaller than a Tweet) then they cannot reverse engineer, guess, or figure out the original document, or any of the document parts.")]),e._v(" "),r("div",{staticClass:"language-mermaid extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("graph LR\n    Imprint--\x3e|Guess/figure out|Document\n\n    classDef bad fill:lightred,stroke:darkred,stroke-width:2px;\n    class Document bad;\n")])])]),r("p",[r("img",{attrs:{src:a(223),alt:"An imprint provides zero information"}})]),e._v(" "),r("p",[e._v('When we say "cannot" this specifically means if an attacker has all the resources of every computer on Earth and they used them for the next 10 years entirely for the purpose of reverse engineering an imprint to learn any part of a document then they are very unlikely to succeed.')]),e._v(" "),r("p",[e._v('⚠️ This assurance depends on the security of your hash function. By default, we use the SHA-256 algorithm. And currently, about 0.5% of the Earth\'s electricity consumption is dedicated to attacking the SHA-256 algorithm[[1]](When we say "cannot" this specifically means if that person has all the resources of every computer on Earth and they used them entirely for the purpose of this task for the next 10 years they are very unlikely to succeed. ). If you use a different hash function then your implementation may not be able to provide this strong assurance.')]),e._v(" "),r("p",[e._v("💣 TODO: Need to confirm that nonces and master keys are never reused. In other words, changing one part of a huge document will recalculate the entire Merkle proof for that document with new nonces. If not then one attack includes verifying that other parts of a document did not change. Or worse, data can be leaked if the same nonce is reused to hash a new value.")]),e._v(" "),r("h3",{attrs:{id:"_5-conflicting-proofs-cannot-be-created"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-conflicting-proofs-cannot-be-created"}},[e._v("#")]),e._v(" 5. Conflicting proofs cannot be created")]),e._v(" "),r("p",[e._v("Nobody can create a valid proof for a part of the document which is different than the true proof for that part of the document. Also, nobody can use the true proof for part of the document to convince anybody that another value, not the true value is a part of the document.")]),e._v(" "),r("p",[e._v('This assurance is a logical consequence of the assurances "A proof convinces the recipient that the exposed part is true" and "An imprint provides zero information about the document or its parts" above.')]),e._v(" "),r("div",{staticClass:"language-mermaid extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("graph LR\n    ??--\x3e?\n    ?2--\x3e?\n    ?3--\x3e?\n    ?4--\x3e?\n    PartE--\x3e?\n    ?--\x3e|Notarize|Imprint\n    PartE--\x3e|Expose|Proof\n    Something_Else--\x3e|Expose|Proof\n    classDef bad fill:lightred,stroke:darkred,stroke-width:2px;\n    class Something_Else bad;    \n")])])]),r("p",[r("img",{attrs:{src:a(224),alt:"No conflicting proofs"}})]),e._v(" "),r("div",{staticClass:"language-mermaid extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("graph LR\n    ??--\x3e?\n    ?2--\x3e?\n    ?3--\x3e?\n    ?4--\x3e?\n    PartE--\x3e?\n    ?--\x3e|Notarize|Imprint\n    PartE--\x3e|Expose|Proof\n    PartE--\x3e|Expose|Other_Proof\n    classDef bad fill:lightred,stroke:darkred,stroke-width:2px;\n    class Other_Proof bad;    \n")])])]),r("p",[r("img",{attrs:{src:a(225),alt:"No conflicting proofs"}})]),e._v(" "),r("p",[e._v('When we say "cannot" this specifically means if an attacker has all the resources of every computer on Earth and they used them for the next 10 years entirely for the purpose of creating the conflicting proofs described above then they are very unlikely to succeed.')]),e._v(" "),r("p",[e._v('⚠️ This assurance depends on the security of your hash function. By default, we use the SHA-256 algorithm. And currently, about 0.5% of the Earth\'s electricity consumption is dedicated to attacking the SHA-256 algorithm[[1]](When we say "cannot" this specifically means if that person has all the resources of every computer on Earth and they used them entirely for the purpose of this task for the next 10 years they are very unlikely to succeed. ). If you use a different hash function then your implementation may not be able to provide this strong assurance.')]),e._v(" "),r("h2",{attrs:{id:"threat-models-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#threat-models-2"}},[e._v("#")]),e._v(" Threat models")]),e._v(" "),r("p",[e._v("This analysis describes common scenarios and the security 0xcert Framework providers for each. By reading this, as a system designer, you are less likely to rely on the Framework in ways that would make your system and your end-users vulnerable.")]),e._v(" "),r("p",[e._v("The scenarios are ordered according to the strength of the adversary, weakest to strongest. This threat model technique is based on research published by Taylor Hornby - Defuse Security, 6 Mar 2017"),r("a",{attrs:{href:"https://defuse.ca/audits/gocryptfs.htm",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("[1]")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"bob-the-block-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bob-the-block-explorer"}},[e._v("#")]),e._v(" Bob: the block explorer")]),e._v(" "),r("p",[e._v("Bob watches the entirety of transactions published on the public blockchain and your implementation publishes imprints as part of the 0xcert Framework Assets. Bob is able to see every transaction, including historical transactions, the old versions of Assets that have been modified and Assets that have been burned. Bob does not have access to any proofs.")]),e._v(" "),r("h4",{attrs:{id:"document-version-tracking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#document-version-tracking"}},[e._v("#")]),e._v(" Document version tracking")]),e._v(" "),r("p",[e._v("Bob will not be able to learn any parts of the document. However, he will be able to see how often the document changes. If your application is an append-only list of information inside a document and each append operation is a blockchain transaction then Bob can accurately guess the number of items on your list by watching the number of transactions.")]),e._v(" "),r("p",[e._v("💡 Mitigation: You may create decoy transactions that modify an unimportant part of the document. This now means Bob may only accurately guess a lower bound on the list size")]),e._v(" "),r("p",[e._v("💡 Mitigation: You may batch transactions that modify any important parts of the document. This now means Bob may only accurately guess an upper bound on the list size.")]),e._v(" "),r("p",[e._v("If you use these two mitigations together then Bob is unable to make any bound on the actual list size.")]),e._v(" "),r("h3",{attrs:{id:"transactor-tracking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transactor-tracking"}},[e._v("#")]),e._v(" Transactor tracking")]),e._v(" "),r("p",[e._v("If you are using the Ethereum or Wanchain blockchains or similar, Bob will see which entity committed each transaction. This is a fundamental property of how blockchains work. If your application publishes documents which are imprinted in a 0xcert Framework Asset and a part of that document includes the identity of the publisher then Bob would be able to guess the part of the document representing the document publisher insofar as it is equal to the identity of the person performing the blockchain transaction.")]),e._v(" "),r("p",[e._v("💡 Mitigation: You may use an Order Gateway and claims to create Assets. In this scenario, the publisher would create a claim and a separate entity (your application) would publish the transaction to the blockchain. The identity of the beneficial publisher can be hidden in several ways using this technique. The specific ways are outside the scope of this document.")]),e._v(" "),r("h2",{attrs:{id:"penny-publishes-a-proof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#penny-publishes-a-proof"}},[e._v("#")]),e._v(" Penny: publishes a proof")]),e._v(" "),r("p",[e._v("You have exposed part of the document and created a proof, which you shared with Penny.")]),e._v(" "),r("h3",{attrs:{id:"publish-document-parts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#publish-document-parts"}},[e._v("#")]),e._v(" Publish document parts")]),e._v(" "),r("p",[e._v("Penny is able to share this proof with a third party or publish it. This third party, or the public, will have access to the data. In addition, the third party or the public will be sure that this document part is authentic.")]),e._v(" "),r("h3",{attrs:{id:"anonymous-publishing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#anonymous-publishing"}},[e._v("#")]),e._v(" Anonymous publishing")]),e._v(" "),r("p",[e._v("If you are the only person that has access to the document parts and you expose data to Penny and her friend then you will be unable to know which of the two of them published data if it is ever published.")]),e._v(" "),r("h2",{attrs:{id:"sheryl-can-control-your-cloud-provider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sheryl-can-control-your-cloud-provider"}},[e._v("#")]),e._v(" Sheryl: can control your cloud provider")]),e._v(" "),r("p",[e._v("You are running part of your application on Amazon Web Services and Sheryl has read-write access to this service.")]),e._v(" "),r("h3",{attrs:{id:"read-document-parts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read-document-parts"}},[e._v("#")]),e._v(" Read document parts")]),e._v(" "),r("p",[e._v("Obviously, if your document parts are stored on AWS then Sheryl can read those document parts. But below we assume your document parts are kept offline and only your asset master keys or nonces are kept on AWS.")]),e._v(" "),r("h3",{attrs:{id:"brute-force-guess-document-parts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#brute-force-guess-document-parts"}},[e._v("#")]),e._v(" Brute force guess document parts")]),e._v(" "),r("p",[e._v("If Sheryl has access to asset master keys or nonces then she will be able to confirm if a guessed document part is correct. She can use this to brute force specific parts of your document.")]),e._v(" "),r("h3",{attrs:{id:"make-proofs-unprovable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#make-proofs-unprovable"}},[e._v("#")]),e._v(" Make proofs unprovable")]),e._v(" "),r("p",[e._v("If Sheryl can delete the master keys or nonces then your application will not be able to expose parts from your document unless you have a backup of those master keys or nonces.")]),e._v(" "),r("h2",{attrs:{id:"larry-the-leaker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#larry-the-leaker"}},[e._v("#")]),e._v(" Larry: the leaker")]),e._v(" "),r("p",[e._v("Larry works at your company and he has access to every document before your application notarizes them.")]),e._v(" "),r("h3",{attrs:{id:"publish-the-documents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-documents"}},[e._v("#")]),e._v(" Publish the documents")]),e._v(" "),r("p",[e._v("Obviously, Larry could just publish the documents since he has them.")]),e._v(" "),r("h3",{attrs:{id:"prove-the-documents-are-authentic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prove-the-documents-are-authentic"}},[e._v("#")]),e._v(" Prove the documents are authentic")]),e._v(" "),r("p",[e._v("Larry will NOT be able to prove the documents are authentic because he does not have access to the master keys or nonces which are used in the notarization process.")])])}),[],!1,null,null,null);t.default=o.exports}}]);