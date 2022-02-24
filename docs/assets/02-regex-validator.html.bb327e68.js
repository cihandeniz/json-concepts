import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="regex-validator" tabindex="-1"><a class="header-anchor" href="#regex-validator" aria-hidden="true">#</a> Regex Validator</h1><p>Regex validator can be applied to custom types that derive from <code>string</code>. You can define a regex pattern under <code>regex</code> key. For the following concepts definition, <code>identifier</code> type only accepts values that match the given regex pattern;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name:identifier&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;regex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[a-zA-Z]*$&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>For above concepts definition following schema is <strong>not</strong> valid;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;say hello&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Because <code>say hello</code> does <strong>not</strong> match <code>^[a-zA-Z]*$</code> pattern.</p><p><code>ERROR: &#39;greeting.service.json&#39; is not valid, &#39;say hello&#39; is not a valid identifier.</code></p><h2 id="short-hand-usage" tabindex="-1"><a class="header-anchor" href="#short-hand-usage" aria-hidden="true">#</a> Short-Hand Usage</h2><p>Following definition demonstrates a short-hand usage of <code>regex</code> validator.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name:identifier&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^[a-zA-Z]*$&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,13);function p(o,t){return e}var l=s(a,[["render",p]]);export{l as default};
