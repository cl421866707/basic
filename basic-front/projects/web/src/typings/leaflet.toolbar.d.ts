import * as L from 'leaflet';
import {ControlOptions} from 'leaflet';
import {CrossOrigin} from 'leaflet';
import {Map} from 'leaflet';
import {LayerGroup} from 'leaflet';
import {Evented} from 'leaflet';


declare module 'leaflet' {

    export interface LeafletEvent {
        type: string;
        target: any;
        latlng: any;
        layerType: string;
        layer: any;
        layers: any;
        action: any;
    }

    export interface LayerOptions {
        attributes?: any;
    }


    namespace Draw {
        namespace Event {
        }
    }

    namespace TileLayer {
        interface ChinaProviderOptions extends L.TileLayerOptions {
            minZoom?: number;
            maxZoom?: number;
            maxNativeZoom?: number;
            minNativeZoom?: number;
            subdomains?: string | string[];
            errorTileUrl?: string;
            zoomOffset?: number;
            tms?: boolean;
            zoomReverse?: boolean;
            detectRetina?: boolean;
            crossOrigin?: CrossOrigin;
        }

        class ChinaProvider extends L.TileLayer {
            constructor(type, options?: ChinaProviderOptions);

            initialize(type, options?: ChinaProviderOptions): void;
        }

        function chinaProvider(type, options?: ChinaProviderOptions): ChinaProvider;
    }

    namespace Control {
        interface BasemapsOptions extends ControlOptions {
            basemaps: L.TileLayer.ChinaProvider[];
            tileX: number;
            tileY: number;
            tileZ: number;
        }

        class MiniMap extends L.Control {
            constructor(layer?: any, options?);
        }

        class Basemaps extends L.Control {
            constructor(options?: BasemapsOptions);
        }


        function basemaps(options?: BasemapsOptions): Basemaps;
    }

    interface Toolbar2Options {
        className?: string;
        actions?: any[];
    }

    class Toolbar2 extends L.Layer {
        constructor(options?: Toolbar2Options);

        initialize(options?: Toolbar2Options): void;

        addTo(map: Map | LayerGroup, args?: any): this;
    }

    export namespace Toolbar2 {


        class Control extends Toolbar2 {
            initialize(options?: Toolbar2Options);
        }

        export interface DrawToolbarOptions extends Toolbar2Options {
            position?: string;
        }

        class DrawToolbar extends Control {
            constructor(options?: DrawToolbarOptions);
        }

        class Action extends L.Handler {
            constructor(options?);

            prototype?: any;

            initialize(options?);

        }

        class Popup extends Toolbar2 {
            constructor(latlng?, options?);

            initialize(latlng?, options?): void;
        }

        class DrawAction {
            static fromHandler(Handler, defaultToolbarIcon, defaultSubToolbar): Action;
        }

        function fromHandler(Handler, defaultToolbarIcon, defaultSubToolbar): Action;

        namespace DrawAction {
            class Cancel extends Action {
            }

            class RemoveLastPoint extends Action {
            }
        }

        namespace EditToolbar {

            class Popup extends L.Toolbar2.Popup {
                constructor(latlng?, options?: any);
            }
        }

        namespace EditAction {

            class Popup {
            }

            namespace Popup {
                class Edit extends Action {
                }

                class Delete extends Action {
                }


            }
        }
    }


}


