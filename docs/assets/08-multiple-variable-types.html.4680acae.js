import{_ as n,d as s}from"./app.7ccd3bcb.js";const a={},e=s(`<h1 id="multiple-definitions-types" tabindex="-1"><a class="header-anchor" href="#multiple-definitions-types" aria-hidden="true">#</a> Multiple Definitions Types</h1><blockquote><p>TBD -&gt; a definition should be able to conform to one of the definitions Should also support multiple types for object arrays</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$schema*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ref | #schema&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;$class*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#properties &amp; #methods&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$schema*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;\\\\$ref&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$reference&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,4);function p(t,o){return e}var r=n(a,[["render",p],["__file","08-multiple-variable-types.html.vue"]]);export{r as default};
