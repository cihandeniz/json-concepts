(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[3293],{2338:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-7f7a91df",path:"/specs/04-custom-types/02-regex-validator.html",title:"Regex Validator",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Short-Hand Usage",slug:"short-hand-usage",children:[]}],filePathRelative:"specs/04-custom-types/02-regex-validator.md"}},3870:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="regex-validator"><a class="header-anchor" href="#regex-validator">#</a> Regex Validator</h1><p>Regex validator can be applied to custom types that derive from <code>string</code>. You can define a regex pattern under <code>regex</code> key. For the following concepts definition, <code>identifier</code> type only accepts values that match the given regex pattern;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name:identifier&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;regex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[a-zA-Z]*$&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>For above concepts definition following schema is <strong>NOT</strong> valid;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;say hello&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Because <code>say hello</code> does <strong>NOT</strong> match <code>^[a-zA-Z]*$</code> pattern.</p><p><code>ERROR: &#39;greeting.service.json&#39; is not valid, &#39;say hello&#39; is not a valid identifier.</code></p><h2 id="short-hand-usage"><a class="header-anchor" href="#short-hand-usage">#</a> Short-Hand Usage</h2><p>Following definition demonstrates a short-hand usage of <code>regex</code> validator.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name:identifier&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[a-zA-Z]*$&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',13),p={render:function(n,s){return e}}}}]);