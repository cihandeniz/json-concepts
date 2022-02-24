import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="enum-validator" tabindex="-1"><a class="header-anchor" href="#enum-validator" aria-hidden="true">#</a> Enum Validator</h1><p>Enum validator enables you to restrict value of a custom type to be one of the items in a given list. For the following concepts definition, <code>$statusCode</code> is restricted to be either <code>200</code>, <code>400</code> or <code>500</code>.</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;statusCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$statusCode:httpStatus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;httpStatus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Below schema is <strong>not</strong> valid, because <code>404</code> is not listed in <code>httpStatus</code> definition;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;statusCode&quot;</span><span class="token operator">:</span> <span class="token number">404</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>ERROR: &#39;greeting.service.json&#39; is not valid, &#39;404&#39; is not a valid httpStatus.</code></p><h2 id="short-hand-usage" tabindex="-1"><a class="header-anchor" href="#short-hand-usage" aria-hidden="true">#</a> Short-Hand Usage</h2><p>Short-hand for enum validator is as follows;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;statusCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$statusCode:httpStatus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;httpStatus&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Here <code>httpStatus</code> automatically inherits from <code>number</code>, because every item in the array is a <code>number</code>.</p><h2 id="enum-of-any-type" tabindex="-1"><a class="header-anchor" href="#enum-of-any-type" aria-hidden="true">#</a> Enum of <code>any</code> Type</h2><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;statusCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$statusCode:httpStatus&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;httpStatus&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&quot;400&quot;</span><span class="token punctuation">,</span> <span class="token number">500</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Type of <code>httpStatus</code> is automatically set to <code>any</code>, because not all of the items are of the same type.</p>`,17);function p(t,o){return e}var u=s(a,[["render",p]]);export{u as default};
