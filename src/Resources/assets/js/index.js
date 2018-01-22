

import jQuery from 'jquery';
import {GrapesJSAdaper} from './adapter/grapes.js';

/**
 * A simple layer between jQuery front-end and the JS grapes library.
 *
 * By default, it uses the GrapesJSApapter. You can pass other adapter by changing `adapter`setting.
 * @param options
 * @returns {GrapesJSAdapter}
 */
jQuery.fn.cmfGrapes = (options) => {
	options = jQuery.extend({
		container: 'gjs',
		adapter: null,
	}, options);

	const $output = jQuery(this);

	if (!options.adapter) {
		options.adapter = new GrapesJSAdapter(options);
	}
	const adapter = options.adapter;

	adapter.bindToElement($output);

	return adapter;
};
