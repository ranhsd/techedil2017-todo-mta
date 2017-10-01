sap.ui.define([
		"com/sap/demo/ui/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.demo.ui.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);