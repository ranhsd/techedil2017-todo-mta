jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/sap/demo/ui/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/sap/demo/ui/test/integration/pages/Worklist",
		"com/sap/demo/ui/test/integration/pages/Object",
		"com/sap/demo/ui/test/integration/pages/NotFound",
		"com/sap/demo/ui/test/integration/pages/Browser",
		"com/sap/demo/ui/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.demo.ui.view."
	});

	sap.ui.require([
		"com/sap/demo/ui/test/integration/WorklistJourney",
		"com/sap/demo/ui/test/integration/ObjectJourney",
		"com/sap/demo/ui/test/integration/NavigationJourney",
		"com/sap/demo/ui/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});