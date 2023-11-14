import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.dc2d320f.js";const D=JSON.parse('{"title":"部署前后端项目至Nginx服务器配置事项","description":"","frontmatter":{"date":"2023-11-08T20:00:00.000Z","author":"Flyinsky","tags":["Nginx","Springboot","Vue","axios"],"categories":["Nginx"]},"headers":[],"relativePath":"docs/Nginx/UploadProjectToNginx.md","filePath":"docs/Nginx/UploadProjectToNginx.md","lastUpdated":null}'),o={name:"docs/Nginx/UploadProjectToNginx.md"},p=l(`<h1 id="部署前后端项目至nginx服务器配置事项" tabindex="-1">部署前后端项目至Nginx服务器配置事项 <a class="header-anchor" href="#部署前后端项目至nginx服务器配置事项" aria-label="Permalink to &quot;部署前后端项目至Nginx服务器配置事项&quot;">​</a></h1><h2 id="_1-跨域处理" tabindex="-1">1.跨域处理 <a class="header-anchor" href="#_1-跨域处理" aria-label="Permalink to &quot;1.跨域处理&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">情景</p><p>出于网络安全，浏览器自带有跨域访问请求保护。在开发环境下我们在前后端配置了跨域处理。前端实际仅配置了请求地址，后端需要在CorsConfig跨域配置类中为请求源添加认证。</p></div><h4 id="_1-前端axios默认请求地址修改" tabindex="-1">(1)前端axios默认请求地址修改 <a class="header-anchor" href="#_1-前端axios默认请求地址修改" aria-label="Permalink to &quot;(1)前端axios默认请求地址修改&quot;">​</a></h4><p>默认开发环境下配置:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#EEFFFF;">axios.defaults.baseURL = &#39;http://localhost:8080&#39;</span></span>
<span class="line"><span style="color:#EEFFFF;">app.config.globalProperties.$axios = axios</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">axios.defaults.baseURL = &#39;http://localhost:8080&#39;</span></span>
<span class="line"><span style="color:#000000;">app.config.globalProperties.$axios = axios</span></span></code></pre></div><p>部署配置:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#EEFFFF;">axios.defaults.baseURL = &#39;后端部署的地址,如http://175.24.164.23:8080&#39;</span></span>
<span class="line"><span style="color:#EEFFFF;">app.config.globalProperties.$axios = axios</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">axios.defaults.baseURL = &#39;后端部署的地址,如http://175.24.164.23:8080&#39;</span></span>
<span class="line"><span style="color:#000000;">app.config.globalProperties.$axios = axios</span></span></code></pre></div><h4 id="_2-后端跨域请求处理地址修改" tabindex="-1">(2)后端跨域请求处理地址修改 <a class="header-anchor" href="#_2-后端跨域请求处理地址修改" aria-label="Permalink to &quot;(2)后端跨域请求处理地址修改&quot;">​</a></h4><p>添加前端部署的HTTP地址</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#C792EA;">private</span><span style="color:#EEFFFF;"> </span><span style="color:#C792EA;">CorsConfigurationSource</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">corsConfigurationSource</span><span style="color:#89DDFF;">()</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#C792EA;">CorsConfiguration</span><span style="color:#EEFFFF;"> cors </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">CorsConfiguration</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#EEFFFF;">        cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addAllowedOriginPattern</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://175.24.164.155</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#EEFFFF;">        cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addAllowedOriginPattern</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.iloveu1314.xyz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#EEFFFF;">        cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addAllowedOriginPattern</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:5173</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#EEFFFF;">        cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAllowCredentials</span><span style="color:#89DDFF;">(true);</span></span>
<span class="line"><span style="color:#EEFFFF;">        cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addAllowedHeader</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#EEFFFF;">        cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addAllowedMethod</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#EEFFFF;">        cors</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addExposedHeader</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#C792EA;">UrlBasedCorsConfigurationSource</span><span style="color:#EEFFFF;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#EEFFFF;"> </span><span style="color:#82AAFF;">UrlBasedCorsConfigurationSource</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#EEFFFF;">        source</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerCorsConfiguration</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/**</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#EEFFFF;"> cors</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#EEFFFF;"> source</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">private</span><span style="color:#000000;"> </span><span style="color:#267F99;">CorsConfigurationSource</span><span style="color:#000000;"> </span><span style="color:#795E26;">corsConfigurationSource</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#267F99;">CorsConfiguration</span><span style="color:#000000;"> </span><span style="color:#001080;">cors</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">CorsConfiguration</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cors</span><span style="color:#000000;">.</span><span style="color:#795E26;">addAllowedOriginPattern</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;http://175.24.164.155&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cors</span><span style="color:#000000;">.</span><span style="color:#795E26;">addAllowedOriginPattern</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;http://www.iloveu1314.xyz&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cors</span><span style="color:#000000;">.</span><span style="color:#795E26;">addAllowedOriginPattern</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;http://localhost:5173&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cors</span><span style="color:#000000;">.</span><span style="color:#795E26;">setAllowCredentials</span><span style="color:#000000;">(</span><span style="color:#0000FF;">true</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cors</span><span style="color:#000000;">.</span><span style="color:#795E26;">addAllowedHeader</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;*&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cors</span><span style="color:#000000;">.</span><span style="color:#795E26;">addAllowedMethod</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;*&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">cors</span><span style="color:#000000;">.</span><span style="color:#795E26;">addExposedHeader</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;*&quot;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#267F99;">UrlBasedCorsConfigurationSource</span><span style="color:#000000;"> </span><span style="color:#001080;">source</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">UrlBasedCorsConfigurationSource</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">source</span><span style="color:#000000;">.</span><span style="color:#795E26;">registerCorsConfiguration</span><span style="color:#000000;">(</span><span style="color:#A31515;">&quot;/**&quot;</span><span style="color:#000000;">, cors);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> source;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span></code></pre></div><h2 id="_2-服务端nginx伪静态" tabindex="-1">2.服务端Nginx伪静态 <a class="header-anchor" href="#_2-服务端nginx伪静态" aria-label="Permalink to &quot;2.服务端Nginx伪静态&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">情景</p><p>因为我们开发的Vue是单页模式应用，从头至尾都停留在index.html上通过js实现内容变换。而nginx默认配置会寻找对应路由路径的html文件，故在不进行配置修改的情况下会报404。</p></div><p>只需要在root节点后部署拦截重定向：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#C792EA;">location</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#EEFFFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">           </span><span style="color:#89DDFF;"> try_files $</span><span style="color:#EEFFFF;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#EEFFFF;">uri/ @router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#545454;font-style:italic;">#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404</span></span>
<span class="line"><span style="color:#EEFFFF;">           </span><span style="color:#89DDFF;"> index </span><span style="color:#EEFFFF;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#EEFFFF;">        }</span></span>
<span class="line"><span style="color:#EEFFFF;">	</span><span style="color:#545454;font-style:italic;">#对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#545454;font-style:italic;">#因此需要rewrite到index.html中，然后交给路由在处理请求资源</span></span>
<span class="line"><span style="color:#EEFFFF;">        </span><span style="color:#C792EA;">location</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">@router </span><span style="color:#EEFFFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">            </span><span style="color:#89DDFF;">rewrite</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">^.*$</span><span style="color:#EEFFFF;"> /index.html</span><span style="color:#89DDFF;"> last;</span></span>
<span class="line"><span style="color:#EEFFFF;">        }</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">location</span><span style="color:#000000;"> / {</span></span>
<span class="line"><span style="color:#000000;">           </span><span style="color:#0000FF;"> try_files </span><span style="color:#000000;">$</span><span style="color:#001080;">uri</span><span style="color:#000000;"> $</span><span style="color:#001080;">uri</span><span style="color:#000000;">/ @router;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404</span></span>
<span class="line"><span style="color:#000000;">           </span><span style="color:#0000FF;"> index </span><span style="color:#000000;"> index.html index.htm;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">	</span><span style="color:#008000;">#对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">#因此需要rewrite到index.html中，然后交给路由在处理请求资源</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0000FF;">location</span><span style="color:#000000;"> @router {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">rewrite</span><span style="color:#000000;"> </span><span style="color:#811F3F;">^.*$</span><span style="color:#000000;"> /index.html</span><span style="color:#0000FF;"> last</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span></code></pre></div><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-darker vp-code-dark"><code><span class="line"><span style="color:#C792EA;">location</span><span style="color:#EEFFFF;"> </span><span style="color:#FFCB6B;">/</span><span style="color:#EEFFFF;">{</span></span>
<span class="line"><span style="color:#EEFFFF;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#EEFFFF;">/www/wwwroot/znzy/front/dist/</span><span style="color:#89DDFF;">;</span><span style="color:#EEFFFF;">       </span></span>
<span class="line"><span style="color:#EEFFFF;">       </span><span style="color:#89DDFF;"> index </span><span style="color:#EEFFFF;">index.html index.htm</span><span style="color:#89DDFF;">;</span><span style="color:#EEFFFF;">        </span></span>
<span class="line"><span style="color:#EEFFFF;">       </span><span style="color:#89DDFF;"> try_files $</span><span style="color:#EEFFFF;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#EEFFFF;">uri/ /index.html</span><span style="color:#89DDFF;">;</span><span style="color:#EEFFFF;"> </span></span>
<span class="line"><span style="color:#EEFFFF;">    }</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">location</span><span style="color:#000000;"> /{</span></span>
<span class="line"><span style="color:#000000;">       </span><span style="color:#0000FF;"> root </span><span style="color:#000000;">/www/wwwroot/znzy/front/dist/;       </span></span>
<span class="line"><span style="color:#000000;">       </span><span style="color:#0000FF;"> index </span><span style="color:#000000;">index.html index.htm;        </span></span>
<span class="line"><span style="color:#000000;">       </span><span style="color:#0000FF;"> try_files </span><span style="color:#000000;">$</span><span style="color:#001080;">uri</span><span style="color:#000000;"> $</span><span style="color:#001080;">uri</span><span style="color:#000000;">/ /index.html; </span></span>
<span class="line"><span style="color:#000000;">    }</span></span></code></pre></div>`,16),e=[p];function t(r,c,F,i,y,d){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{D as __pageData,u as default};
