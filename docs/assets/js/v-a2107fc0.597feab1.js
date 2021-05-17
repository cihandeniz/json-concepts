(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[5946],{9657:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>p});const p={key:"v-a2107fc0",path:"/specs/01-basics/05-shadows.html",title:"Shadows",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Schema Shadow",slug:"schema-shadow",children:[]}],filePathRelative:"specs/01-basics/05-shadows.md"}},6334:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="shadows"><a class="header-anchor" href="#shadows">#</a> Shadows</h1><p>Shadows are traversable versions of concepts and schemas. They are to be generated automatically given a schema or concepts.</p><blockquote><p>These are called shadows because they are not direct output of JSON Concepts, rather they are handy data structures.</p></blockquote><p>Let&#39;s begin with a concept;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$parameter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$responseType&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Corresponding shadow is as follows;</p><p><code>CONCEPTS SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;response&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responseType&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> \n            <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parameter&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>By default <code>_</code> key is added to represent name of an element.</p></blockquote><h2 id="schema-shadow"><a class="header-anchor" href="#schema-shadow">#</a> Schema Shadow</h2><p>Assume there is below schema that conforms to above concepts;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>In this case <code>greeting.service.json</code> schema is expected to cast below shadow;</p><p><code>SCHEMA SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;parameter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;responseType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>This way, schema becomes traversable. Following is an example in <code>javascript</code>;</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> schema <span class="token operator">=</span> Schema<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;greeting.service.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> shadow <span class="token operator">=</span> schema<span class="token punctuation">.</span>shadow<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> service <span class="token operator">=</span> shadow<span class="token punctuation">.</span>service<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>service<span class="token punctuation">.</span>_<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints &quot;sayHello&quot;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>service<span class="token punctuation">.</span>responseType<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints &quot;string&quot;</span>\n\n<span class="token keyword">const</span> parameter <span class="token operator">=</span> service<span class="token punctuation">.</span>parameter<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parameter<span class="token punctuation">.</span>_<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints &quot;name&quot;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parameter<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints &quot;string&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',19),e={render:function(s,n){return p}}}}]);