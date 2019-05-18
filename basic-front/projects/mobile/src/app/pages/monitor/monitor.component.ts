import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.chinatmsproviders';
import 'leaflet-basemaps';
import {Concent, ConcentService, Pole, PoleService, Region, RegionService, Road, RoadService} from '@lib';


@Component({
    selector: 'app-monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit, AfterViewInit {

    searchKey = '';

    @ViewChild('map') mapContainer: ElementRef;
    map: L.Map;

    regionLayer;
    roadLayer;
    concentLayer;
    poleLayer;

    popup = {
        state: false,
        type: '',
        id: 0
    };


    constructor(private regionService: RegionService, private poleService: PoleService, private roadService: RoadService,
                private concentService: ConcentService,  @Inject('apiUrl') public apiUrl) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.initLayers();
            this.loadMap();
        }, 1000);
    }


    loadMap() {
        this.map = L.map('map', {
            center: [22.57611981066603, 113.86302270997645],
            zoom: 12,
            zoomControl: true,
            layers: [this.regionLayer, this.roadLayer, this.concentLayer]
        });
        L.control.scale().addTo(this.map);
        const overlays = {
            '区域': this.regionLayer,
            '道路': this.roadLayer,
            '灯杆': this.poleLayer,
            '配电柜': this.concentLayer
        };
        L.control.layers(null, overlays).addTo(this.map);
        // this.map.locate({
        //   setView: true,
        //   maxZoom: 10
        // }).on('locationfound', (e) => {
        //   let markerGroup = leaflet.featureGroup();
        //   let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        //     alert('Marker clicked');
        //   });
        //   markerGroup.addLayer(marker);
        //   this.map.addLayer(markerGroup);
        // }).on('locationerror', (err) => {
        //   alert(err.message);
        // });


        const baseMaps = [new L.TileLayer.ChinaProvider('Google.Normal.Map', {
            maxZoom: 18,
            minZoom: 5
        }), new L.TileLayer.ChinaProvider('Google.Satellite.Map', {
            maxZoom: 18,
            minZoom: 5
        }), new L.TileLayer.ChinaProvider('Geoq.Normal.PurplishBlue', {
            maxZoom: 18,
            minZoom: 5
        })];
        this.map.addControl(new L.Control.Basemaps({
            basemaps: baseMaps,
            tileX: 0,
            tileY: 0,
            tileZ: 1
        }));


    }

    initLayers() {
        this.regionLayer = new L.LayerGroup();
        this.roadLayer = new L.LayerGroup();
        this.concentLayer = new L.LayerGroup();
        this.poleLayer = new L.MarkerClusterGroup();
        this.regionService.getAllRegions().subscribe((regions: Region[]) => {
            for (const region of regions) {
                if (region.coordinates) {
                    const options = {color: region.regionColor};
                    const marker = L.polygon(region.coordinates, options).bindTooltip(region.regionName);
                    this.bindMarkerPopup(marker, 'region', region.regionId);
                    marker.addTo(this.regionLayer);
                }
            }
        });

        this.roadService.getAllRoads().subscribe((roads: Road[]) => {
            for (const road of roads) {
                if (road.coordinates) {
                    const markerColor = road.roadType.roadColor ? road.roadType.roadColor : 'red';
                    const markerWeight = road.roadType.roadThickness ? road.roadType.roadThickness : 5;
                    const options = {color: markerColor, weight: markerWeight};
                    const marker = L.polyline(road.coordinates, options).bindTooltip(road.roadName);
                    this.bindMarkerPopup(marker, 'road', road.roadId);
                    marker.addTo(this.roadLayer);
                }
            }
        });

        const concentIcon = L.icon({
            iconUrl: '../assets/icons/map/concentIcon_20.png',
            // iconSize: [38, 38],
        });

        this.concentService.getAllConcents().subscribe((concents: Concent[]) => {
            for (const concent of concents) {
                const marker = L.marker([concent.coordinate.y, concent.coordinate.x], {icon: concentIcon})
                    .bindTooltip(concent.concentName);
                this.bindMarkerPopup(marker, 'concent', concent.concentId);
                marker.addTo(this.concentLayer);
            }
        });
        this.poleService.getAllPoles().subscribe((poles: Pole[]) => {
            for (const pole of poles) {
                const poleIcon = L.icon({
                    iconAnchor: [15, 15],
                    iconUrl: this.apiUrl + 'pole/poleImage/' + pole.poleId
                });
                const marker = L.marker([pole.lat, pole.lng], {
                    icon: poleIcon,
                    draggable: false
                }).bindTooltip(pole.poleCode);
                this.bindMarkerPopup(marker, 'pole', pole.poleId);
                this.poleLayer.addLayer(marker);
            }
            this.map.addLayer(this.poleLayer);
        });


    }

    async searchFilter() {
        // const modal = await this.modalCtrl.create({
        //     component: SearchFilterPage
        // });
        // return await modal.present();
    }

    async presentImage(image: any) {
        // const modal = await this.modalCtrl.create({
        //     component: ImagePage,
        //     componentProps: {value: image}
        // });
        // return await modal.present();
    }

    async notifications(ev: any) {
        // const popover = await this.popoverCtrl.create({
        //     component: NotificationsComponent,
        //     event: ev,
        //     animated: true,
        //     showBackdrop: true
        // });
        // return await popover.present();
    }

    bindMarkerPopup(marker, type, id) {
        marker.on('click', (e) => {
            this.popup.state = true;
            this.popup.type = type;
            this.popup.id = id;
        });
    }


    onOpenChange() {
        this.popup.state = !this.popup.state;
    }

    showSearchbarPopup() {
        document.getElementById('searchbarPopup').className = 'show';
    }
    hideSearchbarPopup() {
        document.getElementById('searchbarPopup').className = 'hide';
    }
}
