import{_ as n,d as s}from"./app.7ccd3bcb.js";const a={},e=s(`<h1 id="render-text-using-a-template-with-any-json" tabindex="-1"><a class="header-anchor" href="#render-text-using-a-template-with-any-json" aria-hidden="true">#</a> Render text using a template with any json</h1><blockquote><p>TBD - use case</p></blockquote><h2 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> Case</h2><p>There is a json and a template, but they don&#39;t match.</p><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><ul><li>Create concepts for json</li><li>Create concepts for template</li><li>Create a transformation from concepts of json to concepts of template</li><li>Transform existing json to a json that matches template</li><li>Render template using new json</li></ul><h2 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h2><p>Below diagram allows;</p><ul><li>Verifying schemas against concepts</li><li>Transforming a schema to another schema</li><li>Generate code from templates and schemas</li></ul><div class="language-plantuml ext-plantuml line-numbers-mode"><pre class="language-plantuml"><code>
class Concepts {
    + loadSchema(schema: JSON, path: String): Schema
    + validateSchema(schema: JSON, path: String): boolean
    + {static} load(concepts: JSON, path: String): Concepts
}

class Schema {
    - concepts: Concepts
    + getJSON() : JSON
    + {static} load(schema: JSON, path: String): Schema
}

class Transformation {
    - source: Concepts
    - target: Concepts
    + transform(schema: Schema): Schema
    + transform(schema: JSON): JSON
}

class Template {
    + render(schema: Schema): String
    + render(schema: Schema, transformation: Transformation): String
}

Transformation *-- Concepts : has 2 &gt;
Schema *-- Concepts : has &gt; 
Transformation .. Schema : transforms &gt;
Schema .. Template : renders &lt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="pseudo-code-of-facade-methods" tabindex="-1"><a class="header-anchor" href="#pseudo-code-of-facade-methods" aria-hidden="true">#</a> Pseudo Code of Facade Methods</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Concepts<span class="token punctuation">.</span><span class="token function-variable function">createSchema</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">schema</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">validateSchema</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> error<span class="token punctuation">;</span>    
    
    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token operator">+</span> schema<span class="token punctuation">;</span> <span class="token comment">// =&gt; implementation</span>
<span class="token punctuation">}</span>

Transformation<span class="token punctuation">.</span><span class="token function-variable function">transform</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">source</span><span class="token operator">:</span> Schema</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">createSchema</span><span class="token punctuation">(</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>
            source<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Transformation<span class="token punctuation">.</span><span class="token function-variable function">transform</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token constant">JSON</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">+</span> source<span class="token punctuation">;</span> <span class="token comment">// =&gt; implementation</span>
<span class="token punctuation">}</span>

Template<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">schema</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token operator">+</span> schema<span class="token punctuation">;</span> <span class="token comment">// =&gt; implementation</span>
<span class="token punctuation">}</span>

Template<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">schema<span class="token punctuation">,</span> transformation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
        transformation<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,12);function p(t,c){return e}var r=n(a,[["render",p],["__file","XX-render-text-using-a-template-with-any-json.html.vue"]]);export{r as default};
