import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="merge-references" tabindex="-1"><a class="header-anchor" href="#merge-references" aria-hidden="true">#</a> Merge References</h1><p>References can be merged using <code>&amp;</code>. Below example merges <code>#properties</code> and <code>#methods</code> under <code>$class</code> concept;</p><p><code>CONCEPTS: class-1.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#properties &amp; #methods&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;#properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;#methods&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Merge operation is done in the order references appear in definition. Below is an equivalent concepts definition;</p><p><code>CONCEPTS: class-2.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>Any number of references can be merged, e.g. <code>#a &amp; #b &amp; #c</code></p></blockquote>`,8);function p(o,t){return e}var l=s(a,[["render",p]]);export{l as default};
