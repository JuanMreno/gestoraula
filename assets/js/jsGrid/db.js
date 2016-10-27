(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Practica || client.Practica.indexOf(filter.Practica) > -1)
                    && (!filter.Unidad || client.Unidad.indexOf(filter.Unidad) > -1)
                    && (!filter.Fecha || client.Fecha.indexOf(filter.Fecha) > -1)
                    && (filter.Estado === undefined || client.Estado === filter.Estado);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;

    db.clients = [
        { "Id":1, "Practica": "Ondas estacionárias", "Unidad": "Mecánica clásica", "Fecha": "25/10/2016", "Estado": true, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica": "Extensiometria y transductores", "Unidad": "Mecánica clásica", "Fecha": "25/10/2016", "Estado": false, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Péndulo balístico", "Unidad": "Mecánica clásica", "Fecha": "25/10/2016", "Estado": false, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Medida de la potencia de pedaleao", "Unidad": "Mecánica clásica", "Fecha": "25/10/2016", "Estado": true, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Movimieto bajo fuerzas centrales", "Unidad": "Mecánica clásica", "Fecha": "25/10/2016", "Estado": true, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Osciloscopio", "Unidad": "Electromagnetismo", "Fecha": "25/10/2016", "Estado": true, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Ciclo de histeresis", "Unidad": "Electromagnetismo", "Fecha": "25/10/2016", "Estado": false, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Campo magnetico terrestre", "Unidad": "Electromagnetismo", "Fecha": "25/10/2016", "Estado": true, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Magnetico-Conductor", "Unidad": "Electromagnetismo", "Fecha": "25/10/2016", "Estado": false, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Acciones entre corrientes", "Unidad": "Electromagnetismo", "Fecha": "25/10/2016", "Estado": true, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." },
        { "Id":1, "Practica" : "Campos magnéticos", "Unidad": "Electromagnetismo", "Fecha": "25/10/2016", "Estado": true, "Entrega":2, "N_PROFESOR":"3.5", "N_APP":"4.5", "N_FINAL":"4", "OBSRV":"Conclusiones acertadas y coherentes." }
    ];


}());