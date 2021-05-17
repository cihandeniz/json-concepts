(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[2529],{2491:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-6944e37c",path:"/specs/01-basics/04-schemas.html",title:"Schemas",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Self-Validating Schema",slug:"self-validating-schema",children:[]},{level:2,title:"Referring to a Remote Concepts Definition",slug:"referring-to-a-remote-concepts-definition",children:[]}],filePathRelative:"specs/01-basics/04-schemas.md"}},6790:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="schemas"><a class="header-anchor" href="#schemas">#</a> Schemas</h1><p>A json file is called a schema when it is validated against a concepts definition. Below is an example;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>This schema can be validated against following concepts definition;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$parameter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$responseType&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Below code loads and validates this schema;</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> schema <span class="token operator">=</span> Schema<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&quot;greeting.service.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;service.concepts.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="self-validating-schema"><a class="header-anchor" href="#self-validating-schema">#</a> Self-Validating Schema</h2><p>A schema file is <strong>self-validating</strong> when there exists a <code>@concepts</code> meta-data. Below is a schema that refers to <code>service.concepts.json</code> file locally;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token property">&quot;@concepts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service.concepts.json&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>For a self-validating schema, you don&#39;t need to specify its concepts definition;</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> schema <span class="token operator">=</span> Schema<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&quot;greeting.service.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="referring-to-a-remote-concepts-definition"><a class="header-anchor" href="#referring-to-a-remote-concepts-definition">#</a> Referring to a Remote Concepts Definition</h2><p>You can also write a complete URL to refer to a concepts definition. Below is an example;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token property">&quot;@concepts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://my-concepts.com/service.concepts.json&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',19),p={render:function(s,n){return e}}}}]);