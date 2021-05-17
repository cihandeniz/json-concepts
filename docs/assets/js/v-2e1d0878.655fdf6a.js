(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[9581],{7514:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-2e1d0878",path:"/specs/03-variables/02-variable-types.html",title:"Variable Types",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Available Variable Types",slug:"available-variable-types",children:[]}],filePathRelative:"specs/03-variables/02-variable-types.md"}},5749:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="variable-types"><a class="header-anchor" href="#variable-types">#</a> Variable Types</h1><p>Variable types can be defined explicitly.</p><p>For this concepts definition, <code>$enabled:boolean</code> denotes that <code>$enabled</code> should be a <code>boolean</code>;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$flag*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$enabled:boolean&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Concepts shadow contains type of a variable under <code>type</code> key;</p><p><code>CONCEPTS SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flag&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;enabled&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Below is an <strong>invalid</strong> schema;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;sayGoodbye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;async&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yes&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>ERROR: &#39;greeting.service.json&#39; is not valid, &#39;yes&#39; is not valid a boolean.</code></p><h2 id="available-variable-types"><a class="header-anchor" href="#available-variable-types">#</a> Available Variable Types</h2><ul><li><code>:any</code> allows any type of value to be set to corresponding variable</li><li><code>:string</code> allows only string values</li><li><code>:boolean</code> allows only <code>true</code> or <code>false</code></li><li><code>:number</code> allows only numbers</li></ul><p>By default a variable type is implicitly <code>:any</code>, but it can be defined explicitly;</p><p><code>explicit.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$extra:any&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>implicit.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$extra&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>Note that <code>explicit.concepts.json</code> will have <code>type: &quot;any&quot;</code> in its shadow, whereas <code>implicit.concepts.json</code> won&#39;t.</p></blockquote>',20),p={render:function(n,s){return e}}}}]);