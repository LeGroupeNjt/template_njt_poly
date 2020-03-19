		function init_echarts() {
		
				if( typeof (echarts) === 'undefined'){ return; }
				console.log('init_echarts');
			
		
				  var theme = {
				  color: [
					  '#f41aa8', '#3fbfd7', '#0fa483', '#619ff3',
					  '#ff0126', '#9630b0', '#0bfb02', '#bfd307',
					  '#ba651b', '#d1925c', '#d1af5c', '#7c6017',
					  '#0a3368', '#0a65db', '#8b9baf', '#8e527d',
					  '#6d0650','#96758d'
				  ],

				  title: {
					  itemGap: 8,
					  textStyle: {
						  fontWeight: 'normal',
						  color: '#408829'
					  }
				  },

				  dataRange: {
					  color: ['#1f610a', '#97b58d']
				  },

				  toolbox: {
					  color: ['#408829', '#408829', '#408829', '#408829']
				  },

				  tooltip: {
					  backgroundColor: 'rgba(0,0,0,0.5)',
					  axisPointer: {
						  type: 'line',
						  lineStyle: {
							  color: '#408829',
							  type: 'dashed'
						  },
						  crossStyle: {
							  color: '#408829'
						  },
						  shadowStyle: {
							  color: 'rgba(200,200,200,0.3)'
						  }
					  }
				  },

				  dataZoom: {
					  dataBackgroundColor: '#eee',
					  fillerColor: 'rgba(64,136,41,0.2)',
					  handleColor: '#408829'
				  },
				  grid: {
					  borderWidth: 0
				  },

				  categoryAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },

				  valueAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitArea: {
						  show: true,
						  areaStyle: {
							  color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },
				  timeline: {
					  lineStyle: {
						  color: '#408829'
					  },
					  controlStyle: {
						  normal: {color: '#408829'},
						  emphasis: {color: '#408829'}
					  }
				  },

				  k: {
					  itemStyle: {
						  normal: {
							  color: '#68a54a',
							  color0: '#a9cba2',
							  lineStyle: {
								  width: 1,
								  color: '#408829',
								  color0: '#86b379'
							  }
						  }
					  }
				  },
				  map: {
					  itemStyle: {
						  normal: {
							  areaStyle: {
								  color: '#ddd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  },
						  emphasis: {
							  areaStyle: {
								  color: '#99d2dd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  }
					  }
				  },
				  force: {
					  itemStyle: {
						  normal: {
							  linkStyle: {
								  strokeColor: '#408829'
							  }
						  }
					  }
				  },
				  chord: {
					  padding: 4,
					  itemStyle: {
						  normal: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  },
						  emphasis: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  }
					  }
				  },
				  gauge: {
					  startAngle: 225,
					  endAngle: -45,
					  axisLine: {
						  show: true,
						  lineStyle: {
							  color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
							  width: 8
						  }
					  },
					  axisTick: {
						  splitNumber: 10,
						  length: 12,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  axisLabel: {
						  textStyle: {
							  color: 'auto'
						  }
					  },
					  splitLine: {
						  length: 18,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  pointer: {
						  length: '90%',
						  color: 'auto'
					  },
					  title: {
						  textStyle: {
							  color: '#333'
						  }
					  },
					  detail: {
						  textStyle: {
							  color: 'auto'
						  }
					  }
				  },
				  textStyle: {
					  fontFamily: 'Arial, Verdana, sans-serif'
				  }
			  };
				  
			 
          if ($('#echart_pie2').length ){ 
			  
			  var echartPieCollapse = echarts.init(document.getElementById('echart_pie2'), theme);
			  
			  echartPieCollapse.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: legend_names
//					  ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6',
//					  'rose7', 'rose8', 'rose9', 'rose10', 'rose11', 'rose12',
//					  'rose13', 'rose14', 'rose15', 'rose16', 'rose17', 'rose18']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel']
					},
//					restore: {
//					  show: true,
//					  title: "Restore"
//					},
//					saveAsImage: {
//					  show: true,
//					  title: "Save Image"
//					}
				  }
				},
				calculable: true,
				series: [{
				  name: '',
				  type: 'pie',
				  radius: [50, 150],
				  center: ['50%', 170],
				  roseType: 'area',
				  x: '50%',
				  max: 40,
				  sort: 'ascending',
				  data: value_name
//					  [
//					  { value: 10,name: 'rose1'}, {value: 5,name: 'rose2'}, {value: 15,name: 'rose3'}, 
//					  { value: 25,name: 'rose4'}, {value: 20,name: 'rose5'}, {value: 35,name: 'rose6'},
//					  { value: 10,name: 'rose7'}, {value: 5,name: 'rose8'}, {value: 15,name: 'rose9'}, 
//					  { value: 25,name: 'rose10'}, {value: 20,name: 'rose11'}, {value: 35,name: 'rose12'},
//					  { value: 10,name: 'rose13'}, {value: 5,name: 'rose14'}, {value: 15,name: 'rose15'}, 
//					  { value: 25,name: 'rose16'}, {value: 20,name: 'rose17'}, {value: 35,name: 'rose18'}
//					 
//					  ]
				}]
			  });

			} 
		}
		
		
		/* CHART - MORRIS  */
		
		function init_morris_charts() {
			
			if ($('#graph_rating').length ){
			
				Morris.Bar({
				  element: 'graph_rating',
				  data: ar_data,
//					  [
//					{"period": "2016-10-01", "licensed": 807/10, "sorned": 660, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-30", "licensed": 1251, "sorned": 729, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-29", "licensed": 1769, "sorned": 1018, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-20", "licensed": 2246, "sorned": 1461, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-19", "licensed": 2657, "sorned": 1967, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-18", "licensed": 3148, "sorned": 2627, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-17", "licensed": 3471, "sorned": 3740, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-16", "licensed": 2871, "sorned": 2216, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-15", "licensed": 2401, "sorned": 1656, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000},
//					{"period": "2016-09-10", "licensed": 2115, "sorned": 1022, "elm3": 400, "elm4": 1000, "elm5": 2000, "elm6": 1000}
//				  ],
				  xkey: 'period',
				  barColors: ['#f41aa8', '#0fa483','#ff0126', '#9630b0', '#0bfb02', '#619ff3', '#3fbfd7'
					  //#26B99A', '#34495E', '#ACADAC', '#3498DB','#9B59B6', '#8abb6f', '#759c6a', '#bfd307'
					  ],
				  ykeys:  keys,
					  //['licensed', 'sorned', 'elm3', 'elm4', 'elm5', 'elm6'],
				  labels: keys,
					  //['Licensed', 'SORN', 'elm3', 'elm4', 'elm5', 'elm6'],
				  hideHover: 'auto',
				  xLabelAngle: 60,
				  resize: true
				});
			}
			
			if ($('#room_rating').length ){
				
				Morris.Donut({
				  element: 'room_rating',
				  data: ar_room,
				  colors: ['#ff0126','#0fa483', '#619ff3'],
				  formatter: function (y) {
					return y + "%";
				  },
				  resize: true
				});

			}
			
			if ($('#reception_rating').length ){
				
				Morris.Donut({
				  element: 'reception_rating',
				  data: ar_reception,
				  colors: [ '#ff0126','#0fa483', '#619ff3'],
				  formatter: function (y) {
					return y + "%";
				  },
				  resize: true
				});

			}
			
		};
		
  $(document).ready(function() {
	  init_echarts();
	  init_morris_charts();
              
  }); 