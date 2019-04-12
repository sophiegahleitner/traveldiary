<template>
    <div class="mapComponent">
        <div id="countryMap" ref="countryMap"></div>
    </div>
</template>

<style>
    #countryMap {
        width: 100%;
        height: 98vh;
    }

</style>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4maps from "@amcharts/amcharts4/maps";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

    am4core.useTheme(am4themes_animated);

    export default {
        name: 'MapComponent',
        props: {
            countries: Array
        },
        mounted() {
            let chart = am4core.create("countryMap", am4maps.MapChart);

            // Set map definition
            chart.geodata = am4geodata_worldLow;

            // Set projection
            chart.projection = new am4maps.projections.Miller();

            // Create map polygon series
            let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;

            // Deactivate zooming
            chart.maxZoomLevel = 1;
            chart.seriesContainer.events.disableType("doublehit");
            chart.chartContainer.background.events.disableType("doublehit");
            chart.seriesContainer.draggable = false;
            chart.seriesContainer.resizable = false;

            // Configure series
            let polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = "{name}";
            polygonTemplate.fill = am4core.color("#ddd");

            // Create hover state and set alternative fill color
            let hs = polygonTemplate.states.create("hover");
            hs.properties.fill = am4core.color("#4987a5");

            // Remove Antarctica
            polygonSeries.exclude = ["AQ"];

            // Add some data
            polygonSeries.data = [{
                "name": "United States",
                "value": 100,
                "fill": am4core.color("#78AAC3")
            }, {
                "name": "France",
                "value": 50,
                "fill": am4core.color("#78AAC3")
            }];

            // Bind "fill" property to "fill" key in data
            polygonTemplate.propertyFields.fill = "fill";
        },
        beforeDestroy() {
            if (this.chart) {
                this.chart.dispose();
            }
        }
    }
</script>