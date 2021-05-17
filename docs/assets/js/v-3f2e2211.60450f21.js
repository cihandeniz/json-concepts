(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[80],{5201:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-3f2e2211",path:"/specs/07-concepts/03-explicit-concepts.html",title:"Explicit Concepts",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Resolving Literal Conflicts",slug:"resolving-literal-conflicts",children:[]}],filePathRelative:"specs/07-concepts/03-explicit-concepts.md"}},8296:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="explicit-concepts"><a class="header-anchor" href="#explicit-concepts">#</a> Explicit Concepts</h1><p>Consider below concepts definition;</p><p><code>CONCEPTS: class.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$class*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;$method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>   \n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>In below schema definition, it is explicitly specified that <code>logout</code> is a <code>$method</code>;</p><p><code>SCHEMA: user.class.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;logout:method&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Without <code>:method</code>, it would be a <code>$property</code>.</p><h2 id="resolving-literal-conflicts"><a class="header-anchor" href="#resolving-literal-conflicts">#</a> Resolving Literal Conflicts</h2><p>When a literal and a concept exists at the same level, literals are resolved before concepts. That puts a restriction on potential names of that concept. To workaround this problem, concept name can be given explicitly.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;response?&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$responseType&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Below schema defines a <code>$parameter</code> named <code>response</code>;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;writeLog&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;response:parameter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',14),p={render:function(n,s){return e}}}}]);