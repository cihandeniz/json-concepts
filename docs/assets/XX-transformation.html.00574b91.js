import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="transformation" tabindex="-1"><a class="header-anchor" href="#transformation" aria-hidden="true">#</a> Transformation</h1><blockquote><p>TBD -&gt; define all transformation specs</p></blockquote><h2 id="access-parent" tabindex="-1"><a class="header-anchor" href="#access-parent" aria-hidden="true">#</a> Access Parent</h2><p>Parent access should be available in all steps <code>from</code>, <code>where</code> and <code>select</code>.</p><h2 id="allow-different-naming-conventions" tabindex="-1"><a class="header-anchor" href="#allow-different-naming-conventions" aria-hidden="true">#</a> Allow Different Naming Conventions</h2><p>SQL -&gt; from, where, select JS -&gt; source, filter, map</p><h2 id="automatic-selection" tabindex="-1"><a class="header-anchor" href="#automatic-selection" aria-hidden="true">#</a> Automatic Selection</h2><p>Selection is by default with the same key.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;select&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;returnType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;returnType&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>is equivalent to</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;select&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>is equivalent to</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="concept-name-reference" tabindex="-1"><a class="header-anchor" href="#concept-name-reference" aria-hidden="true">#</a> Concept Name Reference</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;select&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_ | pascalCase&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="multiple-transformations" tabindex="-1"><a class="header-anchor" href="#multiple-transformations" aria-hidden="true">#</a> Multiple Transformations</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;select&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_ | after &#39;say&#39; | camelCase&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rootPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;returnType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responseType | capitalize&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parameter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;select&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;_&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type | capitalize&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="treat-arrays-like-concepts" tabindex="-1"><a class="header-anchor" href="#treat-arrays-like-concepts" aria-hidden="true">#</a> Treat Arrays Like Concepts</h2><blockquote><p>TBD -&gt; Arrays require different queries, even if they are value arrays</p></blockquote><h2 id="wildcard-for-target-concept-path" tabindex="-1"><a class="header-anchor" href="#wildcard-for-target-concept-path" aria-hidden="true">#</a> Wildcard For Target Concept Path</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/service&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;returnType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responseType&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;argument&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/*/parameter&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,21);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
