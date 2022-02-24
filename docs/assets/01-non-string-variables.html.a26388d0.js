import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="non-string-variables" tabindex="-1"><a class="header-anchor" href="#non-string-variables" aria-hidden="true">#</a> Non-String Variables</h1><p>A value of a variable can be <code>string</code>, <code>boolean</code> or a <code>number</code>.</p><p>For below concepts definition;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$flag*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$enabled&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$limit&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>$enabled</code> and <code>$limit</code> variables can be <code>true</code> and <code>100</code> respectively. Below schema is <strong>valid</strong>;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayGoodbye&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;async&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Schema shadow also contains these values as they appear in definition;</p><p><code>SCHEMA SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayGoodbye&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;flag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;async&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,11);function p(o,t){return e}var l=s(a,[["render",p]]);export{l as default};
