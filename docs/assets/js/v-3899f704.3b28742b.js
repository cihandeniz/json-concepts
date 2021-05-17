(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[8630],{5156:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-3899f704",path:"/specs/04-custom-types/05-inheritance.html",title:"Inheritance",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Circular Dependency",slug:"circular-dependency",children:[]}],filePathRelative:"specs/04-custom-types/05-inheritance.md"}},2136:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="inheritance"><a class="header-anchor" href="#inheritance">#</a> Inheritance</h1><p>Custom types can derive from other custom types. This means that a value of this type is going to be validated against all validators in the inheritance chain.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type:primitive&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;primitive&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;boolean&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;float&quot;</span> <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;identifier&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;boolean&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span> <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[a-zA-Z][0-9a-zA-Z]*$&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Here <code>primitive</code> custom type can have <code>float</code>, but <code>type</code> cannot. This means <code>float</code> can never be used.</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;float&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>ERROR: &#39;greeting.service.json&#39; is not valid, &#39;float&#39; is not a valid primitive.</code></p><h2 id="circular-dependency"><a class="header-anchor" href="#circular-dependency">#</a> Circular Dependency</h2><p>Inheritance chain cannot cause a circular dependency. Following concepts definition is not valid;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;circular&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type:a&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;c&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>ERROR: &#39;service.concepts.json&#39; is not valid, &#39;c&#39; cannot inherit from &#39;a&#39;.</code></p>',13),t={render:function(n,s){return p}}}}]);