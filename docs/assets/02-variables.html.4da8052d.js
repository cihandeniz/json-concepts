import{d as s}from"./app.484750ef.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h1><p>An expression is not a literal when it starts with a variable sign <code>$</code>. When it is on the <strong>right-hand</strong> side, an expression is called a <strong>variable</strong>. Below, <code>$type</code> is a variable.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Using above concepts file, now both of below schemas are valid.</p><p><code>SCHEMA: greeting-1.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>SCHEMA: greeting-2.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9);function p(o,t){return e}var c=n(a,[["render",p]]);export{c as default};
