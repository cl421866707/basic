var redrawPopupAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {className: 'leaflet-draw-draw-circle'}
    },

    initialize: function (map, shape, options) {
        this._map = map;
        this._shape = shape;
        this._shape.options.editing = this._shape.options.editing || {};
        L.Toolbar2.Action.prototype.initialize.call(this, map, options);
    },

    enable: function () {
        var map = this._map,
            shape = this._shape;

        shape.editing.enable();
        map.removeLayer(this.toolbar);

        map.on('click', function () {
            this.save();
            shape.editing.disable();
        }, this);
    },

    save: function () {
        var map = this._map,
            shape = this._shape;

        if (shape.edited) {
            map.fire(L.Draw.Event.EDITED, {action: "redraw", layers: L.layerGroup([shape])});
        }
        shape.edited = false;
    }
});

var editPopupAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {className: 'leaflet-draw-edit-edit', tooltip: '编辑'}
    },
    initialize: function (map, shape, options) {
        this._map = map;
        this._shape = shape;
        L.Toolbar2.Action.prototype.initialize.call(this, map, options);
    },
    addHooks: function () {
        var map = this._map;
        map.removeLayer(this.toolbar);
        map.fire(L.Draw.Event.EDITED, {action: "edit", layers: L.layerGroup([this._shape])});
    }
});

var deletePopupAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {className: 'leaflet-draw-edit-remove', tooltip: '删除'}
    },

    initialize: function (map, shape, options) {
        this._map = map;
        this._shape = shape;
        L.Toolbar2.Action.prototype.initialize.call(this, map, options);
    },

    addHooks: function () {
        var map = this._map;
        map.removeLayer(this.toolbar);
        map.fire(L.Draw.Event.DELETED, { layers: L.layerGroup([this._shape]) });
    }
});

