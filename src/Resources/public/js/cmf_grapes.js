GrapesJSAdapter = function (options) {
	if (!options.grapes_options) {
		options.grapes_options = {};
	}
	this.grapesOptions = options.grapes_options;
	if (!options.request.load) {
		throw 'cmfGrapesjs needs an AJAX URL to lazy load the content, pass it using the `request.load` option.';
	}
	this.request = options.request;
	this.rootNode = options.root_node;
}

GrapesJSAdapter.prototype.bindToElement = function ($element) {
	this.grapesOptions.container = '#' + $element[0].id;
	const editor = grapesjs.init(this.grapesOptions);
	const domComponents = editor.DomComponents;
	const url = this.request.load(this.rootNode).url;
	jQuery.ajax(url, {
		success: (response) => {
			domComponents.addComponent(response.payload_type);
		}
	});



}

/**
 * A simple layer between jQuery front-end and the JS grapes library.
 *
 * By default, it uses the GrapesJSApapter. You can pass other adapter by changing `adapter`setting.
 * @param options
 * @returns {GrapesJSAdapter}
 */
jQuery.fn.cmfGrapes = function (options) {
	options = jQuery.extend({adapter: null}, options);
	const $output = jQuery(this);

	if (!options.adapter) {
		options.adapter = new GrapesJSAdapter(options);
	}
	const adapter = options.adapter;

	adapter.bindToElement($output);

	return adapter;
};