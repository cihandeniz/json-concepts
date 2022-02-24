import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="when-validator" tabindex="-1"><a class="header-anchor" href="#when-validator" aria-hidden="true">#</a> When Validator</h1><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type:type&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$format:format&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@types&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;integer&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;$type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;int32&quot;</span> <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;$type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;integer&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;int32&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;int64&quot;</span> <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;$type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;datetime&quot;</span> <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;regex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^.*$&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,2);function t(o,e){return p}var r=s(a,[["render",t]]);export{r as default};
