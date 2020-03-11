/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * bar config options
 */
export default {
    /**
     * Set bar options
     * @name bar
     * @memberof Options
     * @type {Object}
     * @property {Number} [bar.padding=0] The padding pixel value between each bar.
     * @property {Number} [bar.radius] Set the radius of bar edge in pixel.
     * - **NOTE:** Works only for non-stacked bar
     * @property {Number} [bar.radius.ratio] Set the radius ratio of bar edge in relative the bar's width.
     * @property {Number} [bar.sensitivity=2] The senstivity offset value for interaction boundary.
     * @property {Number} [bar.width] Change the width of bar chart.
     * @property {Number} [bar.width.ratio=0.6] Change the width of bar chart by ratio.
     * @property {Number} [bar.width.max] The maximum width value for ratio.
     * @property {Number} [bar.width.dataname] Change the width of bar for indicated dataset only.
     * - **NOTE:**
     *   - Works only for non-stacked bar
     *   - Bars are centered accoding its total width value
     * @property {Number} [bar.width.dataname.ratio=0.6] Change the width of bar chart by ratio.
     * @property {Number} [bar.width.dataname.max] The maximum width value for ratio.
     * @property {Boolean} [bar.zerobased=true] Set if min or max value will be 0 on bar chart.
     * @see [Demo: bar padding](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarPadding)
     * @see [Demo: bar radius](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarRadius)
     * @see [Demo: bar width](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarWidth)
     * @see [Demo: bar width variant](https://naver.github.io/billboard.js/demo/#BarChartOptions.BarWidthVariant)
     * @example
     *  bar: {
     *      padding: 1,
     *
     *      // the 'radius' option can be used only for non-stacking bars
     *      radius: 10,
     *      // or
     *      radius: {
     *          ratio: 0.5
     *      }
     *
     *      // will not have offset between each bar elements for interaction
     *      sensitivity: 0,
     *
     *      width: 10,
     *
     *      // or
     *      width: {
     *          ratio: 0.2,
     *          max: 20
     *      },
     *
     *      // or specify width per dataset
     *      width: {
     *          data1: 20,
     *          data2: {
     *              ratio: 0.2,
     *              max: 20
     *          }
     *      },
     *
     *      zerobased: false
     *  }
     */
    bar_padding: 0,
    bar_radius: <number|{ratio: number}|undefined> undefined,
    bar_radius_ratio: <number|undefined> undefined,
    bar_sensitivity: 2,
    bar_width: <number|{ratio?: number; max?: number;}|undefined> undefined,
    bar_width_ratio: 0.6,
    bar_width_max: undefined,
    bar_zerobased: true
};