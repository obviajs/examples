var flowerCM = window.flowerCM || {};
//base Components
rjs.define("/obvia/lib/Poolable.js", "Poolable");
rjs.define("/obvia/lib/EventDispatcher.js", "EventDispatcher");
rjs.define("/obvia/lib/Literal.js", "Literal");
rjs.define("/obvia/lib/Timer.js", "Timer");
rjs.define("/obvia/lib/NumberUtils.js", "NumberUtils");
rjs.define("/obvia/components/base/EnvType.js", "EnvType");
rjs.define("/obvia/components/base/Env.js", "Env");
rjs.define("/obvia/lib/JTemplate.js", "JTemplate");
rjs.define("/obvia/lib/DataStore.js", "DataStore");
rjs.define("/obvia/lib/cache/Cache.js", "Cache");
rjs.define("/obvia/lib/cache/CachedVariable.js", "CachedVariable");
rjs.define("/obvia/components/Loader.js", "Loader");
rjs.define("/obvia/lib/ArrayUtils.js", "ArrayUtils");
rjs.define("/obvia/lib/ArrayEx.js", "ArrayEx");
rjs.define("/obvia/lib/ObjectUtils.js", "ObjectUtils");
rjs.define("/obvia/lib/StringUtils.js", "StringUtils");
rjs.define("/obvia/lib/DecoratorUtils.js", "DecoratorUtils");
rjs.define("/obvia/lib/coroutine.js", "coroutine");
rjs.define("/obvia/lib/BinUtils.js", "BinUtils");
rjs.define("/obvia/lib/CSSUtils.js", "CSSUtils");
rjs.define("/obvia/lib/BrowserUtils.js", "BrowserUtils");
rjs.define("/obvia/lib/BrowserManager.js", "BrowserManager");
rjs.define("/obvia/lib/my.js", "my");
rjs.define("/obvia/lib/Tokenizer.js", "Tokenizer");
rjs.define("/obvia/lib/binding/BindingsManager.js", "BindingsManager");
rjs.define("/obvia/lib/binding/PropertyChangeEvent.js", "PropertyChangeEvent");
rjs.define("/obvia/lib/binding/ChangeWatcher.js", "ChangeWatcher");
rjs.define("/obvia/lib/rca/RemoteDataEvent.js", "RemoteDataEvent");
rjs.define("/obvia/lib/rca/DataField.js", "DataField");
rjs.define("/obvia/lib/rca/RemoteArray.js", "RemoteArray");
rjs.define("/obvia/lib/rca/RemoteObject.js", "RemoteObject");
rjs.define("/obvia/components/base/Align.js", "Align");
rjs.define("/obvia/components/base/BrowserWindow.js", "BrowserWindow");
rjs.define("/obvia/components/Repeater/RepeaterEventArgs.js", "RepeaterEventArgs");
rjs.define("/obvia/components/base/BgStyle.js", "BgStyle");
rjs.define("/obvia/components/base/History/History.js", "History");
rjs.define("/obvia/components/base/History/HistoryStep.js", "HistoryStep");
rjs.define("/obvia/components/base/History/HistoryEventType.js", "HistoryEventType");
rjs.define("/obvia/components/base/Component.js", "Component");
rjs.define("/obvia/components/base/Spacing.js", "Spacing");
rjs.define("/obvia/components/base/AutoObject.js", "AutoObject");
rjs.define("/obvia/lib/TwoWayMap.js", "TwoWayMap");
rjs.define("/obvia/components/AutoBrowse.js", "AutoBrowse");
rjs.define("/obvia/components/DataBrowse.js", "DataBrowse");
rjs.define("/obvia/components/base/Attr.js", "Attr");
rjs.define("/obvia/components/base/Css.js", "Css");
rjs.define("/obvia/components/base/Props.js", "Props");
rjs.define("/obvia/components/base/Parent.js", "Parent");

rjs.define("/obvia/components/base/NavParent.js", "NavParent");
rjs.define("/obvia/components/base/ContainerType.js", "ContainerType");
rjs.define("/obvia/components/base/ViewStack.js", "ViewStack");
rjs.define("/obvia/components/base/App.js", "App");
rjs.define("/obvia/components/base/Applet.js", "Applet");
//TextInput
rjs.define("/obvia/lib/dependencies/scripts/jquery.inputmask.bundle.min.js", "InputMaskBundle");
rjs.define("/obvia/components/TextInput/TextInput.js", "TextInput");
rjs.define("/obvia/components/TextInput/TextInputType.js", "TextInputType");

//Form
rjs.define("/obvia/components/Form/Form.js", "Form");
rjs.define("/obvia/components/Form/FormEventType.js", "FormEventType");
rjs.define("/obvia/components/Form/FormField.js", "FormField");
rjs.define("/obvia/components/Form/FormFieldSize.js", "FormFieldSize");
rjs.define("/obvia/components/Form/Hidden.js", "Hidden");
//Button
rjs.define("/obvia/components/Button/Button.js", "Button");
rjs.define("/obvia/components/Button/ButtonType.js", "ButtonType");
//Heading
rjs.define("/obvia/components/HeadingType.js", "HeadingType");
rjs.define("/obvia/components/Heading.js", "Heading");
//Label
rjs.define("/obvia/components/LabelType.js", "LabelType");
rjs.define("/obvia/components/Label.js", "Label");
//HRule
rjs.define("/obvia/components/HRule.js", "HRule");
// Color Picker
rjs.define("/obvia/components/Color.js", "Color");
//Container
rjs.define("/obvia/components/Container.js", "Container");
rjs.define("/obvia/components/Nav.js", "Nav");
rjs.define("/obvia/components/Header.js", "Header");
rjs.define("/obvia/components/Footer.js", "Footer");
rjs.define("/obvia/components/Section.js", "Section");
//ScrollPane
rjs.define("/obvia/components/base/ScrollPane.js", "ScrollPane");
//SideNav
rjs.define("/obvia/components/SideNav/SideNavSide.js", "SideNavSide");
rjs.define("/obvia/components/SideNav/SideNav.js", "SideNav");
//Tab
rjs.define("/obvia/components/Tab/TabNavigator.js", "TabNavigator");
rjs.define("/obvia/components/Tab/Tab.js", "Tab");
//Link
rjs.define("/obvia/components/Link/LinkTarget.js", "LinkTarget");
rjs.define("/obvia/components/Link/Link.js", "Link");
//Repeater
rjs.define("/obvia/components/Repeater/Repeater.js", "Repeater");
rjs.define("/obvia/components/Repeater/RepeaterEx.js", "RepeaterEx");
//List
rjs.define("/obvia/components/List.js", "List");
//CheckBox
rjs.define("/obvia/components/CheckBox.js", "CheckBox");
rjs.define("/obvia/components/CheckBoxEx.js", "CheckBoxEx");
//CheckBoxGroup
rjs.define("/obvia/components/CheckBoxGroup.js", "CheckBoxGroup");
//RadioButton
rjs.define("/obvia/components/RadioButton.js", "RadioButton");
//RadioGroup
rjs.define("/obvia/components/RadioGroup.js", "RadioGroup");
//Amount
rjs.define("/obvia/components/Amount.js", "Amount");
//Image
rjs.define("/obvia/components/Image.js", "Image");
//TextArea
rjs.define("/obvia/components/TextArea.js", "TextArea");
//TextEditor
rjs.define("/obvia/components/TextEditor.js", "TextEditor");
rjs.define("/obvia/lib/dependencies/summernote/summernote.min.js", "SummerNoteScript");
//Select
rjs.define("/obvia/components/Select/Option.js", "Option");
rjs.define("/obvia/components/Select/Select.js", "Select");
//Tree
rjs.define("/obvia/components/Tree/Li.js", "Li");
rjs.define("/obvia/components/Tree/Tree.js", "Tree");
//HierarchicalTree
rjs.define("/obvia/components/HierarchialTree/HierarchialTree.js", "HierarchialTree");
//CreditCard
rjs.define('/obvia/components/CreditCard/CreditCard.js', "CreditCard");
//DateTime
rjs.define("/obvia/components/DateTime/DateTime.js", "DateTime");

rjs.define("/obvia/components/DateTime/DateTimeFormat.js", "DateTimeFormat");
rjs.define("/obvia/lib/dependencies/scripts/moment.js", "MomentJS");
//DateTimeCb
rjs.define("/obvia/components/DateTime/DateTimeMode.js", "DateTimeMode");
rjs.define("/obvia/components/DateTime/DateTimeCb.js", "DateTimeCb");
//Modal
rjs.define("/obvia/components/Modal/ModalSize.js", "ModalSize");
rjs.define("/obvia/components/Modal/Modal.js", "Modal");
//AutoComplete
rjs.define("/obvia/components/AutoComplete/AutoCompleteEx.js", "AutoCompleteEx");

rjs.define("/obvia/components/AutoComplete/TokenRenderer.js", "TokenRenderer");
rjs.define("/obvia/components/AutoComplete/SuggestionRenderer.js", "SuggestionRenderer");

//Map
rjs.define("https://unpkg.com/leaflet@1.5.1/dist/leaflet.js", "LeafletJS");
rjs.define("https://unpkg.com/leaflet@1.5.1/dist/leaflet.css", "LeafletCSS");
rjs.define("/obvia/components/Map/MapLocationPicker.js", "MapLocationPicker");
//Toggle
rjs.define("/obvia/components/Toggle/ToggleBgStyle.js", "ToggleBgStyle");
rjs.define("/obvia/components/Toggle/Toggle.js", "Toggle");
//MultiSwitch
rjs.define("/obvia/components/MultiSwitch.js", "MultiSwitch");
//Upload
rjs.define("/obvia/lib/dependencies/jquery.slimscroll.js", "SlimScroll");

rjs.define("/obvia/components/Form/Upload.js", "Upload");
rjs.define("/obvia/components/UploadEx.js", "UploadEx");
rjs.define("/obvia/components/MultiUpload.js", "MultiUpload");
//Table
rjs.define("/obvia/components/Table/Table.js", "Table");
rjs.define("/obvia/components/Table/TBody.js", "TBody");
rjs.define("/obvia/components/Table/THead.js", "THead");
rjs.define("/obvia/components/Table/TFoot.js", "TFoot");
rjs.define("/obvia/components/Table/TCell.js", "TCell");
rjs.define("/obvia/components/Table/Tr.js", "Tr");
rjs.define("/obvia/components/Table/Th.js", "Th");
rjs.define("/obvia/components/Table/Td.js", "Td");
//DataGrid
rjs.define("/obvia/components/DataGrid/DataGridCellRenderer.js", "DataGridCellRenderer");
rjs.define("/obvia/components/DataGrid/DataGridColumn.js", "DataGridColumn");
rjs.define("/obvia/components/DataGrid/DataGrid.js", "DataGrid");

rjs.define("/obvia/components/CurrencyExRate/CurrencyExRate.js", "CurrencyExRate");
//Loader

//ProgressBar
rjs.define("/obvia/components/ProgressBar/ProgressBar.js", "ProgressBar");
rjs.define("/obvia/components/ProgressBar/ProgressBarStyle.js", "ProgressBarStyle");

//DropDown
rjs.define("/obvia/components/DropDown/DropDown.js", "DropDown");
rjs.define("/obvia/components/DropEdit/DropEdit.js", "DropEdit");
rjs.define("/obvia/components/DropDown/ButtonSize.js", "ButtonSize");
rjs.define("/obvia/components/DropDown/DropMenuDirection.js", "DropMenuDirection");
rjs.define("/obvia/components/DropDown/DropSplitType.js", "DropSplitType");
//Calendar
rjs.define("/obvia/components/Calendar/CalendarBase.js", "CalendarBase");
rjs.define("/obvia/components/Calendar/Calendar.js", "Calendar");
//CalendarDay
rjs.define("/obvia/components/Calendar/CalendarDay.js", "CalendarDay");
rjs.define("/obvia/components/Calendar/CalendarConstants.js", "CalendarConstants");
//CalendarWeek
rjs.define("/obvia/components/Calendar/CalendarWeek.js", "CalendarWeek");
rjs.define("/obvia/components/Calendar/CalendarMonth.js", "CalendarMonth");
rjs.define("/obvia/components/wizard/Wizard.js", "Wizard");
rjs.define("/obvia/lib/KeyboardUtils.js", "KeyboardUtils");

rjs.define("/obvia/components/Calendar/css/calendarMonth-default.css", "calendarMonth_default_css");
rjs.define("/obvia/components/Calendar/css/calendarWeek-default.css", "calendarWeek_default_css");
rjs.define("/obvia/components/Calendar/css/calendarDay-default.css", "calendarDay_default_css");
rjs.define("/obvia/components/Calendar/css/calendar-default.css", "calendar_default_css");
rjs.define('/obvia/components/CreditCard/css/creditCard-default.css', 'creditCard-default_css');
rjs.define("/obvia/components/Repeater/css/repeater-default.css", "repeater_default_css");
rjs.define("/obvia/components/DataGrid/css/datagrid-default.css", "datagrid_default_css");
rjs.define("/obvia/components/Toggle/toggle-default.css", "toggle_default_css");
rjs.define("/obvia/components/DateTime/css/dateTime_default.css", "DateTime_Default_css");
rjs.define("/obvia/components/AutoComplete/AutoCompleteEx.css", "AutoCompleteExCSS");
rjs.define("/obvia/lib/dependencies/summernote/summernote.css", "SummerNoteCSS");
rjs.define("/obvia/components/base/css/parent-default.css", "parent_default_css");
rjs.define("/obvia/components/base/css/collapse.css", "collapse_css");
rjs.define("/obvia/components/HierarchialTree/css/HierarchialTree-default.css", "HierarchialTree_css");
rjs.define("/obvia/components/SideNav/css/sidenav-default.css", "sidenav_default_css");

rjs.define("/obvia/components/Validation/ValidationManager.js", "ValidationManager");
rjs.define("/obvia/components/Validation/Validator.js", "Validator");
rjs.define("/obvia/components/Validation/RangeValidator.js", "RangeValidator");
rjs.define("/obvia/components/Validation/RequiredFieldValidator.js", "RequiredFieldValidator");
rjs.define("/obvia/components/Validation/RegularExpressionValidator.js", "RegularExpressionValidator");
rjs.define("/obvia/components/Validation/CustomValidator.js", "CustomValidator");
//rjs.define("/obvia/components/Wizard/css/wizard-default.css", "wizard_default_css");
rjs.define("/obvia/components/DropEdit/css/DropEdit.css", "DropEdit_css");
rjs.define("/obvia/components/Tree/css/tree-default.css", "tree_default_css");
rjs.define("/obvia/components/SideNav/css/sideNav.css", "sideNav_css");

rjs.define("/obvia/components/kanban/Kanban.js", "Kanban");
rjs.define("/obvia/components/kanban/css/kanban_default.css", "kanban_default_css");

rjs.define("/obvia/lib/yaml.js", "yaml");
rjs.define("/obvia/lib/http/HttpClient.js", "ApiClient");
rjs.define("/obvia/lib/OpenApi/ApiClientGen.js", "ApiClientGen");
rjs.define("/obvia/lib/OpenApi/OAMethod.js", "OAMethod");

rjs.define("/obvia/lib/LAN/ip_discovery.js", "ip_discovery");
rjs.define("/obvia/lib/P3Com/Command.js", "Command");
rjs.define("/obvia/lib/P3Com/CommandType.js", "CommandType");
rjs.define("/obvia/lib/P3Com/Host.js", "Host");
rjs.define("/obvia/lib/P3Com/P3Com.js", "P3Com");
rjs.define("/obvia/lib/P3Com/P3ComEventType.js", "P3ComEventType");
rjs.define("/obvia/lib/P3Com/P3ComManager.js", "P3ComManager");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/FiscalPrinterEventType.js", "FiscalPrinterEventType");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/FiscalPrinter.js", "FiscalPrinter");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/FiscalPrinterConfig.js", "FiscalPrinterConfig");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/FiscalPrinterProperties.js", "FiscalPrinterProperties");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/FiscalPrinterType.js", "FiscalPrinterType");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/PromoProperties.js", "PromoProperties");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/Invoice.js", "Invoice");
rjs.define("/obvia/lib/P3Com/FiscalPrinter/InvoiceItem.js", "InvoiceItem");

rjs.define("/obvia/lib/LocalizationManager.js", "LocalizationManager");
let dependencies = [
    ["EventDispatcher", "Literal",
    [
        "Poolable",
        "Timer",
        "AutoObject",
        "TwoWayMap",
        "NumberUtils",
        "JTemplate",
        "DataStore",
        "Cache",
        "CachedVariable",
        "Loader",
        "DOMContentLoaded",
        "ArrayUtils",
        "ArrayEx",
        "ObjectUtils",
        "StringUtils",
        "DecoratorUtils",
        "coroutine",
        "BinUtils",
        "CSSUtils",
        "BrowserUtils",
        "BrowserManager",
        "my",
        "Tokenizer",
        "BindingsManager",
        "PropertyChangeEvent",
        "ChangeWatcher",
        "DataField",
        "RemoteDataEvent",
        "RemoteObject",
        "RemoteArray",
        "Align",
        "BrowserWindow",
        "RepeaterEventArgs",
        "BgStyle",
        "HistoryStep",
        "History",
        "HistoryEventType",
        "Component",
        "Spacing",
        "Form",
        "FormField",
        "FormFieldSize",
        "FormEventType",
        "AutoBrowse",
        "DataBrowse",
        "Attr",
        "Css",
        "Props",
        "Parent",
        "ContainerType",
        "NavParent",
        "Container",
        "ScrollPane",
        "SideNav",
        "SideNavSide",
        "Nav",
        "Header",
        "Footer",
        "Section",
        "TabNavigator",
        "Tab",
        "ViewStack",
        "EnvType",
        "Env",
        "App",
        "Applet",
        "Hidden",
        "Repeater",
        "RepeaterEx",
        "List",
        "Amount",
        "Button",
        "ButtonType",
        "HeadingType",
        "Heading",
        "LabelType",
        "Label",
        "LinkTarget",
        "Link",
        "InputMaskBundle",
        "TextInput",
        "TextInputType",
        "TextArea",
        "Option",
        "Select",
        "SummerNoteScript",
        "TextEditor",
        "DateTime",
        "DateTimeFormat",
        "MomentJS",
        "CheckBox",
        "CheckBoxEx",
        "CheckBoxGroup",
        "RadioButton",
        "RadioGroup",
        "DateTimeMode",
        "DateTimeCb",
        "TokenRenderer",
        "SuggestionRenderer",
        "AutoCompleteEx",
        "ModalSize",
        "Modal",
        "LeafletJS",
        "LeafletCSS",
        "MapLocationPicker",
        "ToggleBgStyle",
        "Toggle",
        "MultiSwitch",
        "Upload",
        "SlimScroll",
        "UploadEx",
        "Table",
        "TBody",
        "THead",
        "TFoot",
        "TCell",
        "Tr",
        "Th",
        "Td",
        "DataGridCellRenderer",
        "DataGridColumn",
        "DataGrid",
        "HRule",
        "Color",
        "Image",
        "ProgressBarStyle",
        "ProgressBar",
        "CurrencyExRate",
        "Li",
        "Tree",
        "HierarchialTree",
        "CreditCard",
        "DropDown",
        "DropEdit",
        "ButtonSize",
        "DropMenuDirection",
        "DropSplitType",
        "CalendarBase",
        "Calendar",
        "CalendarDay",
        "CalendarConstants",
        "CalendarWeek",
        "CalendarMonth",
        "Wizard",
        "KeyboardUtils",
        "ValidationManager",
        "Validator",
        "RangeValidator",
        "RequiredFieldValidator",
        "RegularExpressionValidator",
        "CustomValidator",
        "calendarMonth_default_css",
        "calendarWeek_default_css",
        "DropEdit_css",
        "calendarDay_default_css",
        "calendar_default_css",
        "creditCard-default_css",
        "repeater_default_css",
        "datagrid_default_css",
        "toggle_default_css",
        "AutoCompleteExCSS",
        "DateTime_Default_css",
        "SummerNoteCSS",
        "collapse_css",
        "parent_default_css",
        "HierarchialTree_css",
        "sidenav_default_css",
        //"wizard_default_css",
        "tree_default_css",
        "sideNav_css",
        "Kanban",
        "kanban_default_css",
        "yaml",
        "ApiClient",
        "ApiClientGen",
        "OAMethod",
        "LocalizationManager"]
    ],
    [
        "ip_discovery", "Command", "CommandType", "Host", "P3Com", "P3ComEventType", "P3ComManager",
        "FiscalPrinterEventType", "FiscalPrinter", "FiscalPrinterConfig", "FiscalPrinterProperties",
        "FiscalPrinterType", "PromoProperties", "Invoice", "InvoiceItem"
    ]
];
rjs.grequire(dependencies).then(() => {
    window.main();
});