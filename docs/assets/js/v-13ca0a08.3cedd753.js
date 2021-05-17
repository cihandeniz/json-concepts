(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[2889],{7300:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-13ca0a08",path:"/use-cases/XX-render-text-using-a-template-with-any-json.html",title:"Render text using a template with any json",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Case",slug:"case",children:[]},{level:2,title:"Solution",slug:"solution",children:[]},{level:2,title:"Class Diagram",slug:"class-diagram",children:[]},{level:2,title:"Pseudo Code of Facade Methods",slug:"pseudo-code-of-facade-methods",children:[]}],filePathRelative:"use-cases/XX-render-text-using-a-template-with-any-json.md"}},1989:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="render-text-using-a-template-with-any-json"><a class="header-anchor" href="#render-text-using-a-template-with-any-json">#</a> Render text using a template with any json</h1><h2 id="case"><a class="header-anchor" href="#case">#</a> Case</h2><p>There is a json and a template, but they don&#39;t match.</p><h2 id="solution"><a class="header-anchor" href="#solution">#</a> Solution</h2><ul><li>Create concepts for json</li><li>Create concepts for template</li><li>Create a transformation from concepts of json to concepts of template</li><li>Transform existing json to a json that matches template</li><li>Render template using new json</li></ul><h2 id="class-diagram"><a class="header-anchor" href="#class-diagram">#</a> Class Diagram</h2><p>Below diagram allows;</p><ul><li>Verifying schemas against concepts</li><li>Transforming a schema to another schema</li><li>Generate code from templates and schemas</li></ul><div class="language-plantuml ext-plantuml line-numbers-mode"><pre class="language-plantuml"><code>\nclass Concepts {\n    + loadSchema(schema: JSON, path: String): Schema\n    + validateSchema(schema: JSON, path: String): boolean\n    + {static} load(concepts: JSON, path: String): Concepts\n}\n\nclass Schema {\n    - concepts: Concepts\n    + getJSON() : JSON\n    + {static} load(schema: JSON, path: String): Schema\n}\n\nclass Transformation {\n    - source: Concepts\n    - target: Concepts\n    + transform(schema: Schema): Schema\n    + transform(schema: JSON): JSON\n}\n\nclass Template {\n    + render(schema: Schema): String\n    + render(schema: Schema, transformation: Transformation): String\n}\n\nTransformation *-- Concepts : has 2 &gt;\nSchema *-- Concepts : has &gt; \nTransformation .. Schema : transforms &gt;\nSchema .. Template : renders &lt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="pseudo-code-of-facade-methods"><a class="header-anchor" href="#pseudo-code-of-facade-methods">#</a> Pseudo Code of Facade Methods</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Concepts<span class="token punctuation">.</span><span class="token function-variable function">createSchema</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">schema</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">validateSchema</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">throw</span> error<span class="token punctuation">;</span>    \n    \n    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token operator">+</span> schema<span class="token punctuation">;</span> <span class="token comment">// =&gt; implementation</span>\n<span class="token punctuation">}</span>\n\nTransformation<span class="token punctuation">.</span><span class="token function-variable function">transform</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token operator">:</span> Schema</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">createSchema</span><span class="token punctuation">(</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>\n            source<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nTransformation<span class="token punctuation">.</span><span class="token function-variable function">transform</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token operator">:</span> <span class="token constant">JSON</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">+</span> source<span class="token punctuation">;</span> <span class="token comment">// =&gt; implementation</span>\n<span class="token punctuation">}</span>\n\nTemplate<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">schema</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token operator">+</span> schema<span class="token punctuation">;</span> <span class="token comment">// =&gt; implementation</span>\n<span class="token punctuation">}</span>\n\nTemplate<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">schema<span class="token punctuation">,</span> transformation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n        transformation<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>schema<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>',11),p={render:function(n,s){return e}}}}]);