"use strict";(self.webpackChunkdbt_sqlserver_docs=self.webpackChunkdbt_sqlserver_docs||[]).push([[394],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Nested CTES in TSQL, a treatise",sidebar_position:6},s="Nesting queries with WITH clauses in TSQL, a treatise",p={unversionedId:"nested_CTES",id:"nested_CTES",isDocsHomePage:!1,title:"Nested CTES in TSQL, a treatise",description:"Background",source:"@site/docs/nested_CTES.md",sourceDirName:".",slug:"/nested_CTES",permalink:"/dbt-msft-docs/docs/nested_CTES",editUrl:"https://github.com/dbt-msft/dbt-msft-docs/tree/documentation/docs/nested_CTES.md",version:"current",sidebarPosition:6,frontMatter:{title:"Nested CTES in TSQL, a treatise",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Azure DevOps Pipelines Example",permalink:"/dbt-msft-docs/docs/ado_pipelines_example"},next:{title:"Contributing to dbt-msft-docs",permalink:"/dbt-msft-docs/docs/contributing"}},u=[{value:"Background",id:"background",children:[{value:"TL;DR",id:"tldr",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Reasons (ordered by ease of explanation)",id:"reasons-ordered-by-ease-of-explanation",children:[{value:"1. Everyone else does it",id:"1-everyone-else-does-it",children:[]},{value:"2. Low-hanging, Syntactic Fruit",id:"2-low-hanging-syntactic-fruit",children:[]},{value:"3. more flexibility with SQL templating engines",id:"3-more-flexibility-with-sql-templating-engines",children:[]}]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nesting-queries-with-with-clauses-in-tsql-a-treatise"},"Nesting queries with WITH clauses in TSQL, a treatise"),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Allowing nested WITH statements (not in love with terminology, examples given below) would enable MSFT customers to fully take advantage of templating engines and their respective ecosystems. These templating engines are already very popular on non-MSFT database products."),(0,i.kt)("p",null,"Today in TSQL, the below example is not correct TSQL, but the following two are."),(0,i.kt)("p",null,"Our ask is to be able to do the first in TSQL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- does not work\nWITH goku_outer AS (\n    WITH goku_inner AS (\n        SELECT 9001 as power_level\n    )\n    SELECT * FROM goku_inner\n)\nSELECT * FROM goku_outer\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- works\nWITH goku_inner AS (\n    SELECT 9001 as power_level\n),\ngoku_outer AS (\n    SELECT * FROM goku_inner\n)\nSELECT * FROM goku_outer\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- works\nSELECT * FROM (\n  SELECT * FROM (\n    SELECT 9001 as power_level\n  ) random_required_alias1\n) random_required_alias2;\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The benefit of the first example above is that it allows easy query injection. Wrapping a select query in a CTE only works in TSQL today if the statement you are trying to wrap does not also have a CTE."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- template statement\nWITH goku_outer AS (\n    <MY_SELECT_STATEMENT>\n)\nSELECT * FROM goku_outer\n")),(0,i.kt)("p",null,"Say for example that ",(0,i.kt)("inlineCode",{parentName:"p"},"<MY_SELECT_STATEMENT>")," is the below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- <MY_SELECT_STATEMENT>\nWITH goku_inner AS (\n    SELECT 9001 as power_level\n)\n")),(0,i.kt)("p",null,"The only way to inject this query is to ",(0,i.kt)("em",{parentName:"p"},"modify")," the template to make the nested CTEs sequential before it works. So now the template becomes the below, but only if the <MY_SELECT_STATEMENT> contains a CTE?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- template if <MY_SELECT_STATEMENT> contains a CTE\n\n<MY_SELECT_STATEMENT>,\nWITH goku_outer AS (\n    SELECT * FROM goku_inner\n)\nSELECT * FROM goku_outer\n")),(0,i.kt)("p",null,"IMHO, this is excessive and it makes query injection via templating needlessly difficult, especially given that both nested subqueries and sequentially nested CTEs are already supported."),(0,i.kt)("h2",{id:"reasons-ordered-by-ease-of-explanation"},"Reasons (ordered by ease of explanation)"),(0,i.kt)("h3",{id:"1-everyone-else-does-it"},"1. Everyone else does it"),(0,i.kt)("p",null,"The open-source data engineering ecosystem is growing at a breakneck speed -- especially tools that work with cloud data warehouses (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Airflow"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.getdbt.com/"},"dbt"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlfluff.com/"},"SQLFluff"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://greatexpectations.io/"},"Great Expectations"),")"),(0,i.kt)("p",null,"In order for databases to stay competitive, they need to facilitate easy integration with these tools, or risk getting left behind."),(0,i.kt)("p",null,"I understand the TSQL predates, "),(0,i.kt)("p",null,"The below table shows which databases support this convention."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"database"),(0,i.kt)("th",{parentName:"tr",align:null},"support"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Postgres"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AWS Redshift"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Big Query"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spark SQL"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Azure SQL"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Azure Synapse SQL"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("h3",{id:"2-low-hanging-syntactic-fruit"},"2. Low-hanging, Syntactic Fruit"),(0,i.kt)("p",null,"Both nested subqueries and sequentially nested CTEs are already supported, so IMO, it isn't a large amount of effor to support this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH goku_outer AS (\n    WITH goku_inner AS (\n        SELECT 9001 as power_level\n    )\n    SELECT * FROM goku_inner\n)\nSELECT * FROM goku_outer\n")),(0,i.kt)("h3",{id:"3-more-flexibility-with-sql-templating-engines"},"3. more flexibility with SQL templating engines"),(0,i.kt)("p",null,"Quote from Jacob Matson (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/matsonj"},"@matsonj"),"):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Enabling "Nested CTEs" allows for an improved "application/human interface". Not for technical users, per se, but for analysts using 3rd party tools such as ',(0,i.kt)("a",{parentName:"p",href:"https://www.getdbt.com/"},"dbt"),' but also for power users of TSQL applications. An advanced pattern in many tools (including at Simetric, where I work) is providing the capability for end-users to create single queries and then string them together in templates (lego blocks). This pattern is quite difficult in SQL Server because CTEs either cannot be used at all or the application developers must work around this capability gap. This makes the underlying queries more difficult for humans to read and therefor more difficult to debug. This also makes SQL Server less attractive as self-service analytics continue to evolve and power users continue to get closer to "raw SQL" inside their respective applications.')),(0,i.kt)("h4",{id:"background-templating-in-html"},"Background: Templating in HTML"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://palletsprojects.com/p/flask/"},"Flask")," is a popular Python web application framework. At it's core is Jinja, a Python-esque library that allows users to inject imperative logic into HTML, which has traditionally been declarative language."),(0,i.kt)("p",null,"Below is a trivial example of generating an HTML list with a Python list variable and Jinja, which uses curly brackets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- BEFORE  --\x3e\n\x3c!-- name = ['Foo', 'Bar', 'Qux'] --\x3e\n<ul>\n{% for name in names %}\n   <li>{{ name }}</li>\n{% endfor %}\n</ul>\n\n\x3c!-- AFTER  --\x3e\n<ul>\n   <li>Foo</li>\n   <li>Bar</li>\n   <li>Qux</li>\n</ul>\n</ul>\n")),(0,i.kt)("h4",{id:"templating-in-sql"},"Templating in SQL?"),(0,i.kt)("p",null,"Templating is increasingly popular in data warehouse development. Some great use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameterizing database names for deploying to multiple environments"),(0,i.kt)("li",{parentName:"ul"},"making repetitive, boilerplate SQL into something more observable"),(0,i.kt)("li",{parentName:"ul"},"model abstraction logic"),(0,i.kt)("li",{parentName:"ul"},"injecting dynamic SQL"),(0,i.kt)("li",{parentName:"ul"},"functional code chaining concepts")),(0,i.kt)("p",null,"In fact, the magic of dbt is just Jinja templating. dbt goes one step further and templatizing your DDL statements like ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE AS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE VIEW AS")," allowing users to just focus on SELECT queries. (",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/introduction#what-makes-dbt-so-powerful"},"to read more about the power of dbt"),")"),(0,i.kt)("p",null,"If TSQL could allow wrapping arbitrary SELECT queries within a CTE, it would have the following effects on dbt custom adapter maintenance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dbt-sqlserver and dbt-synapse get the benefits of ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/materializations#ephemeral"},"ephemeral")," materializations and dbt tests without extra work"),(0,i.kt)("li",{parentName:"ul"},"dbt-msft users can take advantage of community-supported adapters with more confidence (many package maintainers make heavy use of CTE-query-wrapping)****")))}c.isMDXComponent=!0}}]);