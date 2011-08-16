/**
 * @author dragon(rongjihuang@gmail.com)
 * 
 * explorer的中文语言包 (zh_cn)
 * 
 */



// namespace
if(window.Signavio == undefined) Signavio = {};
if(window.Signavio.I18N == undefined) Signavio.I18N = {};

Signavio.I18N.Language = "zh_cn"; //Pattern <ISO language code>_<ISO country code> in lower case!

Signavio.I18N.askForRefresh = "当前文件夹的内容可能已经有新的更改。<br/>要刷新一下视图吗？";

// DEFINE THE DEFAULT VALUES FOR THE EXT MSG-BOX
Ext.MessageBox.buttonText.yes = "是";
Ext.MessageBox.buttonText.no = "否";
Ext.MessageBox.buttonText.cancel = "取消";
Ext.MessageBox.buttonText.ok = "确定";


// REPOSITORY
if(!Signavio.I18N.Repository) Signavio.I18N.Repository = {};
Signavio.I18N.Repository.leftPanelTitle = "";
Signavio.I18N.Repository.rightPanelTitle = "";


// DATE
if(!Signavio.I18N.Repository.Date) Signavio.I18N.Repository.Date = {};
Signavio.I18N.Repository.Date.ago = "前";
// SINGULAR
Signavio.I18N.Repository.Date.year = "年";
Signavio.I18N.Repository.Date.month = "月";
Signavio.I18N.Repository.Date.day = "日";
Signavio.I18N.Repository.Date.hour = "时";
Signavio.I18N.Repository.Date.minute = "分";
Signavio.I18N.Repository.Date.second = "秒";
// PLURAL
Signavio.I18N.Repository.Date.years = "年";
Signavio.I18N.Repository.Date.months = "月";
Signavio.I18N.Repository.Date.days = "天";
Signavio.I18N.Repository.Date.hours = "小时";
Signavio.I18N.Repository.Date.minutes = "分钟";
Signavio.I18N.Repository.Date.seconds = "秒";


// LOGGING TOOL
if(!Signavio.I18N.Repository.Log) Signavio.I18N.Repository.Log = {};
Signavio.I18N.Repository.Log.ERROR = "ERROR";
Signavio.I18N.Repository.Log.CRITICAL = "CRITICAL";
Signavio.I18N.Repository.Log.FATAL = "FATAL";
Signavio.I18N.Repository.Log.LOG = "Log";

Signavio.I18N.Repository.loadingFailed = "无法加载应用程序，请确认网络连接正常后重新加载页面！";

Signavio.I18N.Repository.noFeaturesTitle = "No functions";
Signavio.I18N.Repository.noFeaturesMsg = "There are no functions available at the moment.";


// HEADER TEMPLATE
if(!Signavio.I18N.Repository.Header) Signavio.I18N.Repository.Header = {};
Signavio.I18N.Repository.Header.openIdSample = "your.openid.net";
Signavio.I18N.Repository.Header.sayHello = "Hi";
Signavio.I18N.Repository.Header.login = "登录";
Signavio.I18N.Repository.Header.logout = "注销";
Signavio.I18N.Repository.Header.loginTitle = "登录";
Signavio.I18N.Repository.Header.loginError401 = "用户名或密码不正确！";
Signavio.I18N.Repository.Header.loginError404 = "用户未激活！";
Signavio.I18N.Repository.Header.loginError500 = "Something went wrong.";

Signavio.I18N.Repository.Header.windowBtnLogin = "登录";
Signavio.I18N.Repository.Header.windowBtnCancel = "取消";
Signavio.I18N.Repository.Header.windowBtnResetPassword = "重置密码";
Signavio.I18N.Repository.Header.windowFieldName = "邮箱";
Signavio.I18N.Repository.Header.windowFieldUserName = "用户名";
Signavio.I18N.Repository.Header.windowFieldPassword = "密码";
Signavio.I18N.Repository.Header.windowFieldRemember = "记住我";
Signavio.I18N.Repository.Header.windowResetPasswordDesc = "Please enter your mail address to receive a mail with instructions how to reset your password.";
Signavio.I18N.Repository.Header.windowBtnSend = "发送";
Signavio.I18N.Repository.Header.windowResetPasswordHintOk = "Mail has been send to reset your password.";
Signavio.I18N.Repository.Header.windowResetPasswordHintFail = "Failed to send the mail to reset your password. Please try again or contact the support.";

// CONTEXT PLUGIN
if(!Signavio.I18N.Repository.ContextPlugin) Signavio.I18N.Repository.ContextPlugin = {};
Signavio.I18N.Repository.ContextPlugin.selectedElements = "Selected elements";


// FOLDER PLUGIN
if(!Signavio.I18N.Repository.Folder) Signavio.I18N.Repository.Folder = {};
Signavio.I18N.Repository.Folder.folder = "&raquo; 文件夹";
Signavio.I18N.Repository.Folder.favorits = "&raquo; 收藏夹";
Signavio.I18N.Repository.Folder.savedSearch = "&raquo; Saved Search";

Signavio.I18N.Repository.Folder["public"] = "工作空间";

// INFO PLUGIN
if(!Signavio.I18N.Repository.Info) Signavio.I18N.Repository.Info = {};
Signavio.I18N.Repository.Info.noTitle = "No title";
Signavio.I18N.Repository.Info.noDescription = "No summary";
Signavio.I18N.Repository.Info.noSelection = "No elements are selected";
Signavio.I18N.Repository.Info.willBeNotified = "In case of changes, you will get an email notification.";
Signavio.I18N.Repository.Info.wontBeNotified = "";
Signavio.I18N.Repository.Info.notifyMe = "Notify me via Email, if the diagram changes.";
Signavio.I18N.Repository.Info.dontNotifyMe = "Don't notify me.";
Signavio.I18N.Repository.Info.elementSelected = "elements selected";
// DEFINE ATTRIBUTES
Signavio.I18N.Repository.Info.Attributes = {};
Signavio.I18N.Repository.Info.Attributes.name = "Name";
Signavio.I18N.Repository.Info.Attributes.description = "说明";
Signavio.I18N.Repository.Info.Attributes.noname = "No name";
Signavio.I18N.Repository.Info.Attributes.nodescription = "没有说明";
Signavio.I18N.Repository.Info.Attributes.author = "Author";
Signavio.I18N.Repository.Info.Attributes.created = "Created";
Signavio.I18N.Repository.Info.Attributes.updated = "Update";
Signavio.I18N.Repository.Info.Attributes.info = "<b>#{time}</b> 前 #{delimiter}由 <b>#{user}</b> 编辑";
Signavio.I18N.Repository.Info.Attributes.infoMulipleOne = "最后编辑于 <b>#{time}</b> 前";
Signavio.I18N.Repository.Info.Attributes.infoMulipleTwo= "最后编辑从 <b>#{time}</b> 到 <b>#{time2}</b>";

// BREADCRUMP PLUGIN
if(!Signavio.I18N.Repository.BreadCrumb) Signavio.I18N.Repository.BreadCrumb = {};
Signavio.I18N.Repository.BreadCrumb.delimiter = "&raquo; ";
Signavio.I18N.Repository.BreadCrumb.search = "Search: ";
Signavio.I18N.Repository.BreadCrumb.nrOfResults = "found in {nr} objects"; 
Signavio.I18N.Repository.BreadCrumb.none = "No directory selected";
Signavio.I18N.Repository.BreadCrumb.goBack = "Back";

// VIEW TEMPLATE
if(!Signavio.I18N.Repository.View) Signavio.I18N.Repository.View = {};
Signavio.I18N.Repository.View.foundInNames = "Found in titles";
Signavio.I18N.Repository.View.foundInDescriptions = "Found in descriptions";
Signavio.I18N.Repository.View.foundInLabels = "Found in diagram elements";
Signavio.I18N.Repository.View.foundInComments = "Found in comments";
Signavio.I18N.Repository.View.foundInRevComments = "Found in revision comments";
Signavio.I18N.Repository.View.foundInMetaData = "Found in custom attributes";

// ICONVIEW PLUGIN
if(!Signavio.I18N.Repository.IconView) Signavio.I18N.Repository.IconView = {};
Signavio.I18N.Repository.IconView.none = "No elements";
Signavio.I18N.Repository.IconView.description = "Icon view";

if(!Signavio.I18N.Repository.TableView) Signavio.I18N.Repository.TableView = {};
Signavio.I18N.Repository.TableView.foundIn = "Found in";
Signavio.I18N.Repository.TableView.name = "Name";
Signavio.I18N.Repository.TableView.description = "Description";
Signavio.I18N.Repository.TableView.revision = "Revision";
Signavio.I18N.Repository.TableView.lastChanges = "Last change";
Signavio.I18N.Repository.TableView.lastAuthor = "Last author";
Signavio.I18N.Repository.TableView.toolTip = "List view";

// ALL OFFERS
if(!Signavio.I18N.Repository.Offer) Signavio.I18N.Repository.Offer = {};

// DELETE
Signavio.I18N.Repository.Offer.deleteTitle = "删除";
Signavio.I18N.Repository.Offer.deleteDescription = "Move the selected elements to the trash";
Signavio.I18N.Repository.Offer.removeTitle = "Remove";
Signavio.I18N.Repository.Offer.removeDescription = "Remove the selected elements. This action is irreversible.";
Signavio.I18N.Repository.Offer.restoreTitle = "Restore";
Signavio.I18N.Repository.Offer.restoreDescription = "Restore the elements from the trash";
Signavio.I18N.Repository.Offer.deleteQuestion = "Are you sure you want to move the diagram(s) to the trash?";
Signavio.I18N.Repository.Offer.removeQuestion = "真的要永久删除选择的流程图吗？此操作将无法恢复！";
// MOVE
Signavio.I18N.Repository.Offer.copyPrefix = " (复制)";
Signavio.I18N.Repository.Offer.moveTitle = "移动";
Signavio.I18N.Repository.Offer.moveDescription = "Move the selected elements to the specified folder";
Signavio.I18N.Repository.Offer.moveCreateCopy = "Create a copy";
Signavio.I18N.Repository.Offer.moveCreateCopyNot = "Only available if all elements are diagrams.";
Signavio.I18N.Repository.Offer.moveWindowHeader = "移动 '#{title}' 到:";
Signavio.I18N.Repository.Offer.moveWindowHeaderMultiple = "Move all #{count} selected elements to:";
Signavio.I18N.Repository.Offer.moveBtnOk = "移动";
Signavio.I18N.Repository.Offer.moveBtnCancel = "取消";
Signavio.I18N.Repository.Offer.moveAlertTitle = "移动";
Signavio.I18N.Repository.Offer.moveAlertDesc = "You dont have write access for the selected target folder.";


Signavio.I18N.Repository.Offer.copyTitle = "复制";
Signavio.I18N.Repository.Offer.copyDescription = "Copies the selected elements to a specified folder";
Signavio.I18N.Repository.Offer.copyWindowHeader = "复制 '#{title}' 到:";
Signavio.I18N.Repository.Offer.copyWindowHeaderMultiple = "Copy all #{count} selected diagrams to:";
Signavio.I18N.Repository.Offer.copyBtnOk = "复制";
Signavio.I18N.Repository.Offer.copyAlertTitle = "复制";
Signavio.I18N.Repository.Offer.copyAlertDesc = "You dont have write access for the selected target folder.";


// NEW
Signavio.I18N.Repository.Offer.newTitle = "新建";
Signavio.I18N.Repository.Offer.newFolderTitle = "文件夹";
Signavio.I18N.Repository.Offer.newFolderDescription = "创建新的文件夹";
Signavio.I18N.Repository.Offer.newFolderDefaultTitle = "新文件夹";
Signavio.I18N.Repository.Offer.newFFOnly = "当前浏览器不受支持，支持的浏览器列表参考<a target='_blank' href='http://www.signavio.com/en/browser-compatibility.html' >这里</a>."
Signavio.I18N.Repository.Offer.newWindowFolderTitle = "创建新的文件夹";
Signavio.I18N.Repository.Offer.newWindowFolderDesc = "请输入文件夹的名称:";

// Edit
Signavio.I18N.Repository.Offer.editGroupTitle = "编辑";
Signavio.I18N.Repository.Offer.edit = "编辑流程图";
Signavio.I18N.Repository.Offer.editDescription = "编辑当前流程图";

// SEARCH
Signavio.I18N.Repository.Offer.search = "搜索";
// UPDATE
Signavio.I18N.Repository.Offer.updateTitle = "刷新";
Signavio.I18N.Repository.Offer.updateDescription = "更新整个仓库";

// HOVERBUTTON
if(!Signavio.I18N.Repository.HoverButton) Signavio.I18N.Repository.HoverButton = {};
Signavio.I18N.Repository.HoverButton.deleteString = "Delete";

if(!Signavio.I18N.Repository.FormStorePanel) Signavio.I18N.Repository.FormStorePanel = {};
Signavio.I18N.Repository.FormStorePanel.commit = "Save";
Signavio.I18N.Repository.FormStorePanel.reject = "Discard";
Signavio.I18N.Repository.FormStorePanel.language = "Requires a <a href='/p/explorer'>refresh</a> of the page.";

if(!Signavio.I18N.Repository.Hint) Signavio.I18N.Repository.Hint = {};
Signavio.I18N.Repository.Hint.supportedBrowserEditor = "Currently, modeling is not supported for your browser (see <a href='http://www.signavio.com/en/browser-compatibility.html' target='_blank'>browser compatibility</a>).<br/>Please use Firefox 3.5 or our Thin Client for Windows."

if(!Signavio.I18N.Repository.SearchFields) Signavio.I18N.Repository.SearchFields = {};
Signavio.I18N.Repository.SearchFields.labels = "Attributes";
Signavio.I18N.Repository.SearchFields.text1 = "Revision comment";
Signavio.I18N.Repository.SearchFields.text2 = "Attributes";
Signavio.I18N.Repository.SearchFields.comments = "Comments";
Signavio.I18N.Repository.SearchFields.description = "Description";
Signavio.I18N.Repository.SearchFields.name = "Name";
