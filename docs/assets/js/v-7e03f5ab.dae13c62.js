(self.webpackChunkjson_concepts=self.webpackChunkjson_concepts||[]).push([[6152],{3117:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-7e03f5ab",path:"/specs/06-literals/03-multi-literals.html",title:"Multi Literals",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Multiple Variables in a Concept",slug:"multiple-variables-in-a-concept",children:[]}],filePathRelative:"specs/06-literals/03-multi-literals.md"}},6945:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="multi-literals" tabindex="-1"><a class="header-anchor" href="#multi-literals" aria-hidden="true">#</a> Multi Literals</h1><p>Any number of literals can be defined at the same level. Below concepts definition has <code>services</code> and <code>models</code> literals at the root;</p><p><code>CONCEPTS: service.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;services?&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$service+&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$response&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;models?&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;$model+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;$field*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$type&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>In this case, concepts shadow has an array of literals instead of a single literal object;</p><p><code>CONCEPTS SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;literal&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;services&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;response&quot;</span> <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;models&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;model&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;concept&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;quantifier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;variable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type&quot;</span> <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Below is a valid schema;</p><p><code>SCHEMA: greeting.service.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;sayHello&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;sayGoodbye&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;models&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Schema shadow is expected to be as the following;</p><p><code>SCHEMA SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayHello&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sayGoodbye&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span>\n                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;number&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="multiple-variables-in-a-concept" tabindex="-1"><a class="header-anchor" href="#multiple-variables-in-a-concept" aria-hidden="true">#</a> Multiple Variables in a Concept</h2><p>Multiple literals allow more than one variable in a concept. Below example demonstrates that <code>$filter</code> concept has <code>$input</code> and <code>$output</code> variables;</p><p><code>CONCEPTS: filters.concepts.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;$filter+&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$input&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$output&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>A valid schema with multiple variables;</p><p><code>SCHEMA: default.filters.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;append&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;split&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Schema shadow lists all variables of a concept next to each other.</p><p><code>SCHEMA SHADOW</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;append&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;split&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;output&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array&quot;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',23),t={render:function(n,s){return p}}}}]);