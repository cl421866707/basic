import {AfterViewInit, Component, ElementRef, InjectionToken, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.chinatmsproviders';
import 'leaflet-basemaps';
import 'leaflet-draw';
import 'leaflet-toolbar';
import 'leaflet-draw-toolbar';


import {AlertController, ModalController} from '@ionic/angular';
import {CreateRegionComponent} from './create-region/create-region.component';
import {CreateRoadComponent} from './create-road/create-road.component';
import {CreateConcentComponent} from './create-concent/create-concent.component';
import {CreatePoleComponent} from './create-pole/create-pole.component';
import {EditRegionComponent} from './edit-region/edit-region.component';
import {EditRoadComponent} from './edit-road/edit-road.component';
import {EditConcentComponent} from './edit-concent/edit-concent.component';
import {EditPoleComponent} from './edit-pole/edit-pole.component';
import {Concent, ConcentService, Pole, PoleService, Region, RegionService, Road, RoadService} from '@lib';


export const API_URL = new InjectionToken<string>('apiUrl');

@Component({
    selector: 'app-edit-map',
    templateUrl: './edit-map.component.html',
    styleUrls: ['./edit-map.component.scss'],
})
export class EditMapComponent implements OnInit, AfterViewInit {

    @ViewChild('edit-map') mapContainer: ElementRef;
    map: L.Map;

    regionLayer;
    roadLayer;
    concentLayer;
    poleLayer;

    constructor(private regionService: RegionService, private poleService: PoleService, private roadService: RoadService, private concentService: ConcentService,
                private modalController: ModalController, private alertController: AlertController) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.initLayers();
            this.loadMap();
            this.initCreateToolBar();
            this.initMapEvents();
        }, 1000);
    }

    loadMap() {
        this.map = L.map('edit-map', {
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
                    marker.addEventListener('click', event => {
                        const popup = new L.Toolbar2.EditToolbar.Popup(event.latlng, {
                            actions: [redrawPopupAction, editPopupAction, deletePopupAction],
                            className: 'leaflet-draw-toolbar'
                        });
                        popup.addTo(this.map, marker);
                    });
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
                    marker.addEventListener('click', event => {
                        const popup = new L.Toolbar2.EditToolbar.Popup(event.latlng, {
                            actions: [redrawPopupAction, editPopupAction, deletePopupAction],
                            className: 'leaflet-draw-toolbar'
                        });
                        popup.addTo(this.map, marker);
                    });
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
                marker.addTo(this.concentLayer);
            }
        });
        this.poleService.getAllPoles().subscribe((poles: Pole[]) => {
            for (const pole of poles) {
                const myIcon = L.icon({
                    iconUrl: API_URL + 'pole/poleImage/' + pole.poleId
                });
                const marker = L.marker([pole.coordinate.y, pole.coordinate.x], {
                    icon: myIcon,
                    draggable: false
                }).bindTooltip(pole.poleCode);
                this.poleLayer.addLayer(marker);
            }
            this.map.addLayer(this.poleLayer);
        });


    }


    initCreateToolBar() {
        // 创建区域
        const drawRegion = L.Toolbar2.DrawAction.fromHandler(L.Draw.Polygon.extend({
                options: {
                    shapeOptions: {
                        stroke: true,
                        color: '#3388ff',
                        weight: 4,
                        opacity: 0.5,
                        fill: true,
                        fillColor: null,
                        fillOpacity: 0.2,
                        clickable: true,
                        action: 'region'
                    }
                }
            }),
            {
                className: 'leaflet-draw-draw-polygon',
                tooltip: '新建区域'
            }, new L.Toolbar2({actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint]}));
        drawRegion.prototype.deleteLastVertex = function() {
            this._handler.deleteLastVertex();
        };
        // 创建道路
        const drawRoad = L.Toolbar2.DrawAction.fromHandler(L.Draw.Polyline.extend({
                options: {
                    shapeOptions: {
                        stroke: true,
                        color: '#3388ff',
                        weight: 4,
                        opacity: 0.5,
                        fill: false,
                        clickable: true,
                        action: 'road'
                    }
                }
            }),
            {
                className: 'leaflet-draw-draw-polyline',
                tooltip: '新建道路'
            }, new L.Toolbar2({actions: [L.Toolbar2.DrawAction.Cancel, L.Toolbar2.DrawAction.RemoveLastPoint]}));
        drawRoad.prototype.deleteLastVertex = function() {
            this._handler.deleteLastVertex();
        };
        // 创建箱变
        const drawConcent = L.Toolbar2.DrawAction.fromHandler(L.Draw.Marker.extend({
                options: {
                    icon: new L.Icon({
                        // shadowUrl: null,
                        // iconAnchor: new L.Point(12, 12),
                        // iconSize: new L.Point(24, 24),
                        action: 'concent',
                        iconUrl: 'assets/icons/map/concentIcon_20.png'
                    })
                }
            }),
            {
                className: 'leaflet-draw-draw-polyline',
                tooltip: '新建配电柜'
            }, new L.Toolbar2({actions: [L.Toolbar2.DrawAction.Cancel]}));
        // 创建灯杆
        const drawPole = L.Toolbar2.DrawAction.fromHandler(L.Draw.Marker.extend({
                options: {
                    icon: new L.Icon({
                        // shadowUrl: null,
                        // iconAnchor: new L.Point(12, 12),
                        // iconSize: new L.Point(24, 24),
                        action: 'pole',
                        iconUrl: 'assets/icons/map/pole_2.png'
                    })
                }
            }),
            {
                className: 'leaflet-draw-draw-polyline',
                tooltip: '新建灯杆'
            }, new L.Toolbar2({actions: [L.Toolbar2.DrawAction.Cancel]}));
        const createActions = [drawRegion, drawRoad, drawConcent, drawPole];
        new L.Toolbar2.DrawToolbar({position: 'topleft', actions: createActions}).addTo(this.map);
    }

    initMapEvents() {
        this.map.addEventListener(L.Draw.Event.CREATED, async (event) => {
            const layerType = event.layerType;
            const createMarker = event.layer;
            let action = null;
            if (layerType === 'marker') {
                action = createMarker.options.icon.options.action;
            } else {
                action = createMarker.options.action;
            }
            switch (action) {
                case 'region':
                    const modalRegion = await this.modalController.create({
                        component: CreateRegionComponent, backdropDismiss: false,
                        componentProps: {
                            latLngs: createMarker.getLatLngs()[0]
                        }
                    });
                    modalRegion.onDidDismiss().then(result => {
                    });
                    modalRegion.present();
                    break;
                case 'road':
                    const modalRoad = await this.modalController.create({
                        component: CreateRoadComponent, backdropDismiss: false,
                        componentProps: {
                            latLngs: createMarker.getLatLngs()
                        }
                    });
                    modalRoad.onDidDismiss().then(result => {
                    });
                    break;
                case 'concent':
                    const modalConcent = await this.modalController.create({
                        component: CreateConcentComponent, backdropDismiss: false,
                        componentProps: {
                            latLng: createMarker.getLatLng()
                        },
                    });
                    modalConcent.onDidDismiss().then(result => {
                    });
                    break;
                case 'pole':
                    const modalPole = await this.modalController.create({
                        component: CreatePoleComponent, backdropDismiss: false,
                        componentProps: {
                            latLng: createMarker.getLatLng()
                        },
                    });
                    modalPole.onDidDismiss().then(result => {
                    });
                    break;
            }
        });
        this.map.addEventListener(L.Draw.Event.EDITED, async event => {
            const shape: any = event.layers.getLayers()[0];
            const data = shape.options.attributes;
            let latLngs = null;
            let latLng = null;
            if (event.action === 'redraw') {
                switch (data.type) {
                    case 'region':
                        latLngs = shape.getLatLngs();
                        this.regionService.updateGeometry(data.id, latLngs[0]).subscribe(regionId => {
                        });
                        break;
                    case 'road':
                        latLngs = shape.getLatLngs();
                        this.roadService.updateGeometry(data.id, latLngs[0]).subscribe(roadid => {
                        });
                        break;
                    case 'concent':
                        latLng = shape.getLatLng();
                        this.concentService.updateGeometry(data.id, latLng).subscribe(concentId => {
                        });
                        break;
                    case 'pole':
                        // const latLng = shape.getLatLng();
                        break;
                }
            } else if (event.action === 'edit') {
                switch (data.type) {
                    case 'region':
                        const modalRegion = await this.modalController.create({
                            component: EditRegionComponent, backdropDismiss: false,
                            componentProps: {
                                regionId: data.id,
                            },
                        });
                        modalRegion.onDidDismiss().then(result => {
                        });
                        break;
                    case 'road':
                        const modalRoad = await this.modalController.create({
                            component: EditRoadComponent, backdropDismiss: false,
                            componentProps: {
                                roadId: data.id
                            },
                        });
                        modalRoad.onDidDismiss().then(result => {
                        });
                        break;
                    case 'concent':
                        const modalConcent = await this.modalController.create({
                            component: EditConcentComponent, backdropDismiss: false,
                            componentProps: {
                                concentId: data.id
                            },
                        });
                        modalConcent.onDidDismiss().then(result => {
                        });
                        break;
                    case 'pole':
                        const modalPole = await this.modalController.create({
                            component: EditPoleComponent, backdropDismiss: false,
                            componentProps: {
                                poleId: data.id
                            },
                        });
                        modalPole.onDidDismiss().then(result => {
                        });
                        break;
                }
            }
        });
        this.map.addEventListener(L.Draw.Event.DELETED, event => {
            const sharp: any = event.layers.getLayers()[0];
            const data = sharp.options.attributes;
            // console.log(sharp.options.attributes);
            this.alertController.create({
                header: '确认删除吗?',
                message: '删除数据不可恢复，是否继续',
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: '确定',
                        handler: () => {
                            this.map.removeLayer(sharp);
                            this.alertController.create({header: '提示', message: '删除成功'});
                            switch (data.type) {
                                case 'region':
                                    this.regionService.removeRegion(data.id).subscribe(regionId => {
                                    });
                                    break;
                                case 'road':
                                    this.roadService.removeRoad(data.id).subscribe(roadId => {
                                    });
                                    break;
                                case 'concent':
                                    this.concentService.removeConcent(data.id).subscribe(concentId => {
                                    });
                                    break;
                                case 'pole':
                                    this.poleService.removePole(data.id).subscribe(poleId => {
                                    });
                                    break;
                            }
                        }
                    }
                ]
            });
        });
    }
}
