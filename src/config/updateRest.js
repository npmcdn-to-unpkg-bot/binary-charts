import getMainSeries from '../utils/getMainSeries';

export default (chart: Chart, params: any) => {
    const { pipSize } = params;
    const mainSeries = getMainSeries(chart);
    mainSeries.update({
        tooltip: {
            valueDecimals: pipSize,
        },
    }, false);

    chart.yAxis[0].update({
        minTickInterval: pipSize,
    }, false);
};
