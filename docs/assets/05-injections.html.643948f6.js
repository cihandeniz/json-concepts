import{d as n}from"./app.484750ef.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="injections" tabindex="-1"><a class="header-anchor" href="#injections" aria-hidden="true">#</a> Injections</h1><p><code>#inject</code> is used to get a concepts definition and inject it at a path specified in <code>@path</code> meta-data. In below definition, <code>return</code> literal is defined separately and injected under <code>$property</code> concept;</p><p><code>CONCEPTS: class-1.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;#inject&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/$class/$property&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>This is equivalent to below definition;</p><p><code>CONCEPTS: class-2.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="multiple-paths" tabindex="-1"><a class="header-anchor" href="#multiple-paths" aria-hidden="true">#</a> Multiple Paths</h2><p>It can inject a definition to multiple paths. Below example injects <code>return</code> literal to both <code>$property</code> and <code>$method</code> concepts;</p><p><code>CONCEPTS: class-1.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;#inject&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/$class/$property&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/$class/$method&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>This is equivalent to below definition;</p><p><code>CONCEPTS: class-2.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="wildcard-support" tabindex="-1"><a class="header-anchor" href="#wildcard-support" aria-hidden="true">#</a> Wildcard Support</h2><p><code>@path</code> supports wildcard characters <code>*</code> and <code>**</code>. <code>*</code> means &quot;any node&quot; for one level, <code>**</code> means &quot;any node&quot; for every level.</p><p><code>CONCEPTS: class.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;$property*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$method*&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;#inject&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/*/$property&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/**/$method&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="no-path" tabindex="-1"><a class="header-anchor" href="#no-path" aria-hidden="true">#</a> No Path</h2><p>When an injection does not have a <code>@path</code> meta-data, it means that its definition is going to be injected at the root. Below is an example;</p><p><code>CONCEPTS: class-1.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;#inject&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This is equivalent to the following;</p><p><code>CONCEPTS: class-2.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="multiple-injections" tabindex="-1"><a class="header-anchor" href="#multiple-injections" aria-hidden="true">#</a> Multiple Injections</h2><p><code>#inject</code> can have an array of definitions.</p><p><code>CONCEPTS: class-1.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;#inject&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$property+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/$class&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$method+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/$class&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/**/$method&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/**/$property&quot;</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/$method&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>Above definition is equivalent to this;</p><p><code>CONCEPTS: class-2.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$property+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$method+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="order-of-injections" tabindex="-1"><a class="header-anchor" href="#order-of-injections" aria-hidden="true">#</a> Order of Injections</h2><p>The order of injections matters, they are processed in the order they appear. Below definition will only have <code>$class</code> concept after being processed, because none of the paths hit a node in the definition;</p><p><code>CONCEPTS: class-1.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;#inject&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/$method&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/**/$method&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/**/$property&quot;</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$method+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/$class&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$property+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/$class&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>This is equivalent to the following;</p><p><code>CONCEPTS: class-2.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="process-order-of-injections-references-and-include" tabindex="-1"><a class="header-anchor" href="#process-order-of-injections-references-and-include" aria-hidden="true">#</a> Process Order of Injections, References and Include</h2><p>Just like included concepts definitions, an injected definition can also have its own references.</p><p><code>CONCEPTS: dto.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#properties&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;#properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$property+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>CONCEPTS: behavior.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;#include&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dto.concepts.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;#inject&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;$method+&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#parameters&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;#parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/**/$class&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;@path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/**/$method&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/**/$property&quot;</span> <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>For this example, process order of <code>behavior.concepts.json</code> is as follows;</p><ol><li>Process <code>#include</code>s of <code>behavior.concepts.json</code>; <ol><li>Process <code>#include</code>s of <code>dto.concepts.json</code><ol><li>None found</li></ol></li><li>Process <code>#</code> references at the root of <code>dto.concepts.json</code><ol><li>Process <code>#properties</code> reference</li></ol></li><li>Process <code>#inject</code>s of <code>dto.concepts.json</code><ol><li>None found</li></ol></li></ol></li><li>Process <code>#</code> references at the root of <code>behavior.concepts.json</code><ol><li>None found</li></ol></li><li>Process <code>#inject</code>s of <code>behavior.concepts.json</code><ol><li>Process <code>#</code> references of first <code>#inject</code> (<code>$method</code>) <ol><li>Process <code>#parameters</code> reference</li></ol></li><li>Place first <code>#inject</code> to paths matching <code>/**/$class</code></li><li>Process <code>#</code> references of second <code>#inject</code> (<code>$return</code>) <ol><li>None found</li></ol></li><li>Place second <code>#inject</code> to paths matching <code>/**/$method</code> or <code>/**/$property</code></li></ol></li></ol><p>Therefore <code>behavior.concepts.json</code> is equivalent to below definition;</p><p><code>CONCEPTS: class.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$class+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;$property+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;$method+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
            <span class="token property">&quot;$parameter*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;returns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$returnType&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,50);function e(o,t){return p}var l=s(a,[["render",e]]);export{l as default};
