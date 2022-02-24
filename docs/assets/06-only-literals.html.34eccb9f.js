import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="only-literals" tabindex="-1"><a class="header-anchor" href="#only-literals" aria-hidden="true">#</a> Only Literals</h1><p>A concepts definition is allowed to consist of only literals. Below example demonstrates a simple literal-only concepts definition;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parameter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$parameterName&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$parameterType&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>Here <code>parameter</code> literal cannot have <code>$name</code> variable, because it would conflict with the other <code>$name</code> variable.</p></blockquote><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parameter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Corresponding shadows are as follows;</p><p><code>CONCEPTS SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parameter&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parameterName&quot;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parameterType&quot;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><blockquote><p>Above we said that <code>parameter</code> literal cannot have <code>$name</code> variable, below you can see how it would conflict with the other <code>$name</code> variable.</p></blockquote><p><code>SCHEMA SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parameterName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parameterType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="literals-with-object-arrays-instead-of-concepts" tabindex="-1"><a class="header-anchor" href="#literals-with-object-arrays-instead-of-concepts" aria-hidden="true">#</a> Literals with Object Arrays instead of Concepts</h2><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parameters?&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$name&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
        <span class="token punctuation">}</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>Here <code>parameters</code> literal can have <code>$name</code> variable, because it has an object array as its variable, which means <code>parameters</code> will occur in schema shadow, hence there will be no conflict with other <code>$name</code> variable.</p></blockquote><p><code>CONCEPTS SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;services&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;dimensions&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;parameters&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;dimensions&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span> <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span> <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>Below is a valid schema and its shadow;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;surname&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>SCHEMA SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;surname&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>As you can see, a schema that conforms to a concepts definition which consists of only literals, is identical with its shadow.</p>`,25);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
