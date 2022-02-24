import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts" aria-hidden="true">#</a> Concepts</h1><p>When an expression on the <strong>left-hand</strong> side starts with a <code>$</code> sign, it indicates that it is a concept. In below concepts definition, there are two concepts: <code>$service</code> and <code>$parameter</code>.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$parameter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Below schema is a valid schema against above concepts file;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayGoodbye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="key-literals-under-concepts" tabindex="-1"><a class="header-anchor" href="#key-literals-under-concepts" aria-hidden="true">#</a> Key Literals Under Concepts</h2><p>You can define a key literal under a concept. For the following concepts definition <code>response</code> is a key literal under <code>$service</code> concept;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$parameter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$responseType&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Below is a valid schema for above concepts file;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayGoodbye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="conflicts-in-key-literals-and-concepts" tabindex="-1"><a class="header-anchor" href="#conflicts-in-key-literals-and-concepts" aria-hidden="true">#</a> Conflicts in Key Literals and Concepts</h2><p>For below concepts definition, <code>$parameter</code> concept cannot be <code>response</code>, because this definition already expects a key literal with that name;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$parameter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$responseType&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Below schema defines <code>response</code> key twice, which makes it an invalid JSON and an invalid schema;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayGoodbye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,21);function p(o,t){return e}var l=s(a,[["render",p]]);export{l as default};
