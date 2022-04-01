import{_ as n,d as s}from"./app.7ccd3bcb.js";const a={},p=s(`<h1 id="default-types" tabindex="-1"><a class="header-anchor" href="#default-types" aria-hidden="true">#</a> Default Types</h1><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service:identifier+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$method:method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$parameter:identifier*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type:string&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/^[a-zA-Z0-9]*$/&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>is equivalent to</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$method:method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/^[a-zA-Z0-9]*$/&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token string">&quot;identifier&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,4);function t(e,o){return p}var r=n(a,[["render",t],["__file","XX-default-type.html.vue"]]);export{r as default};
