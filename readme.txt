signavio-core-components

浏览地址： https://github.com/rongjihuang/signavio-core-components
源码检出： git@github.com:rongjihuang/signavio-core-components.git
基于svn仓库http://code.google.com/p/signavio-core-components/
主要修改项：
    1) 使用git版本管理
    2) 使用maven管理依赖包
    3) 汉化

一) 编译发布需要的工具
ant1.8+、maven3+、java1.5+

二) 编译运行
> mvn jetty:run

三) 迁移方法记录:
1) 按原svn仓库检出
> cd trunk
> ant build-and-deploy-all-in-one-war-to-tomcat
将生成的signaviocore.war解压,相关文件复制到本工程的webapp目录下,并进行相应的整理:
1-1) 删除WEB-INF/libs目录
1-2) WEB-INF\classes\configuration.properties迁移到src/main/resources目录,并作相应修改;之后删除WEB-INF\classes\目录

2) 模块化处理:
2-1) trunk\platform extensions\bpmn2_0 --> scc-platform-extension-bpmn2_0
2-2) trunk\platform extensions\diagram --> scc-platform-extension-diagram
2-3) trunk\platform extensions\jpdl --> scc-platform-extension-jpdl
2-4) trunk\platform extensions\syntaxchecker --> scc-platform-extension-syntaxchecker

jdk1.6-->jdk1.5:
*)trunk\platform extensions\jpdl\src\com\signavio\warehouse\business\util\jpdl4\WireObjectGroup.java -->修改toJpdl方法:!name|value.isEmpty()-->name|value.length() > 0


手动安装的包:
batik1.7,jass1.0

四）汉化说明
1) Explorer的汉化
修改 scc-platform/src/main/webapp/WEB-INF/jsp/explorer.jsp，改为引用汉化的js文件 explorer/data/i18n/translation_zh_cn.js；
修改 scc-platform/src/main/webapp/WEB-INF/json/stencilsets.json，汉化新建菜单中的 Business Process Diagram (BPMN 2.0)；

2) Editor的汉化
修改 scc-platform/src/main/java/com.signavio.editor.handler.EditorHandler的getEditorXHTML方法，改为引用汉化的js文件：
    scc-platform/src/main/webapp/editor/i18n/translation_zh_cn.js
    scc-platform/src/main/webapp/editor/i18n/translation_signavio_zh_cn.js
属性编辑器的汉化：scc-platform/src/main/webapp/editor/stencilsets/bpmn2.0/bpmn2.0.json
形状区域的汉化：scc-platform/src/main/webapp/editor/stencilsets/bpmn2.0/bpmn2.0.json
