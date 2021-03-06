// $FlowFixMe
import Highcharts from './highcharts/highstock';

function merge(a: Object, b: Object) {
    if (process.env.NODE_ENV !== 'production') {
        return a;
    }
    return Highcharts.merge(a, b);
}

export const colorBg = (theme: Theme, percentage: number): string =>
    theme === 'light' ?
        `rgba(42, 48, 82, ${percentage})` :
        `rgba(242, 244, 255, ${percentage})`;

export const colorText = (theme: Theme, percentage: number): string =>
    colorBg(theme === 'light' ? 'dark' : 'light', percentage);

const themeColors = (theme: Theme): Object => ({
    spacing: [100, 10, 15, 10],
    colors: [colorBg(theme, 1), '#f45b5b', '#8085e9', '#8d4654'],
    series: {
        fillColor: 'red',
    },
    xAxis: {
		gridLineColor: colorBg(theme, 0.25),
        labels: {
			style: {
				color: colorBg(theme, 0.75),
			},
		},
		lineColor: colorBg(theme, 0.25),
		title: {
			style: {
                color: colorBg(theme, 0.75),
			},
		},
	},
    yAxis: {
        gridLineColor: colorBg(theme, 0.2),
		labels: {
			style: {
				color: colorBg(theme, 0.75),
			},
		},
		tickColor: colorBg(theme, 0.2),
		title: {
			style: {
				color: colorBg(theme, 0.75),
			},
		},
	},
    navigator: {
		handles: {
			backgroundColor: colorBg(theme, 0.25),
			borderColor: colorBg(theme, 0.5),
		},
		maskFill: colorBg(theme, 0.1),
		series: {
			color: colorBg(theme, 0.25),
			lineColor: colorBg(theme, 0.25),
		},
		xAxis: {
			gridLineColor: colorBg(theme, 0.1),
            labels: {
                style: {
                    color: colorBg(theme, 0.75),
                },
            },
		},
	},
    rangeSelector: {
		buttonTheme: {
			style: {
				color: colorBg(theme, 0.75),
			},
			states: {
				select: {
                    fill: colorBg(theme, 0.1),
					style: {
                        color: colorBg(theme, 0.75),
					},
				},
			},
		},
	},
    navigation: {
        buttonOptions: {
            theme: {
                states: {
                    hover: {
                        fill: colorBg(theme, 0.1),
                        stroke: colorBg(theme, 0.1),
                    },
                },
            },
        },
    },
    tooltip: {
        borderColor: colorBg(theme, 0.25),
        style: {
            color: colorBg(theme, 1),
        },
    },
    noData: {
        style: {
            color: colorBg(theme, 0.5),
        },
    },
});

const commonTheme = {
    chart: {
		style: {
			fontFamily: "'Roboto', sans-serif",
		},
		backgroundColor: 'transparent',
	},
    plotOptions: {
        series: {
            states: {
                hover: {
                    lineWidth: 1.5,
                },
            },
        },
        area: {
            lineWidth: 1.5,
        },
        candlestick: {
            color: '#c03',
            lineColor: '#c03',
            lineWidth: 2,
            upColor: '#2E8836',
            upLineColor: '#2E8836',
        },
    },
    xAxis: {
        labels: {
            y: 15,
        },
    },
	yAxis: {
		tickWidth: 1,
	},
    labels: {
        style: {
            color: 'red',
        },
    },
    navigator: {
        enabled: false,
		outlineColor: 'none',
        series: {
            type: 'area',
        },
        height: 20,
        margin: 5,
        xAxis: {
            labels: {
                step: 1,
            },
        },
	},
    rangeSelector: {
		buttonTheme: {
			fill: 'none',
            width: null,
            padding: 2,
            r: 2,
            borderRadius: 5,
			states: {
                hover: {
                    fill: 'none',
                },
			},
		},
	},
    tooltip: {
        shadow: false,
    },
    resetZoomButton: {
        theme: {
            display: 'none',
        },
    },
    noData: {
        style: {
            fontSize: '20px',
            fontWeight: 'bold',
        },
    },
    lang: {
        noData: 'Data not available',
    },
};

export const lightTheme = merge(
    commonTheme,
    themeColors('light'),
);

export const darkTheme = merge(
    commonTheme,
    themeColors('dark'),
);
