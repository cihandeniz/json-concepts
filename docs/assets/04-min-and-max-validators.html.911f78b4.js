import{_ as n,d as s}from"./app.7ccd3bcb.js";const a={},e=s(`<h1 id="min-and-max-validators" tabindex="-1"><a class="header-anchor" href="#min-and-max-validators" aria-hidden="true">#</a> Min and Max Validators</h1><p>Min and max validators can be applied to <code>number</code> or <code>string</code> variables. When applied to a <code>string</code>, they validate its length. In the following concepts definition, length of <code>$name</code> is expected to be between <code>1</code> and <code>10</code>, and value of <code>$dailyCallLimit</code> to be between <code>10</code> and <code>100</code>.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name:identifier&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dailyCallLimit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$dailyCallLimit:limit&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Below schemas are <strong>invalid</strong> because of min-max validations;</p><p><code>SCHEMA: greeting-1.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dailyCallLimit&quot;</span><span class="token operator">:</span> <span class="token number">9</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>ERROR: &#39;greeting-1.service.json&#39; is not valid, &#39;9&#39; is not a valid limit.</code></p><hr><p><code>SCHEMA: greeting-2.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dailyCallLimit&quot;</span><span class="token operator">:</span> <span class="token number">101</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>ERROR: &#39;greeting-2.service.json&#39; is not valid, &#39;101&#39; is not a valid limit.</code></p><hr><p><code>SCHEMA: greeting-3.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dailyCallLimit&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>ERROR: &#39;greeting-3.service.json&#39; is not valid, &#39;&#39; is not a valid identifier.</code></p><hr><p><code>SCHEMA: greeting-4.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01234567890&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dailyCallLimit&quot;</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>ERROR: &#39;greeting-4.service.json&#39; is not valid, &#39;01234567890&#39; is not a valid identifier.</code></p>`,20);function p(o,t){return e}var l=n(a,[["render",p],["__file","04-min-and-max-validators.html.vue"]]);export{l as default};
