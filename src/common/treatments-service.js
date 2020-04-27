export const treatmentsService = {

    getTreatments() {
        return fetch('http://localhost:3000/treatments').then(response => response.json());
    },

    getTreatment(id) {
        return fetch(`http://localhost:3000/treatments/${id}`).then(response => response.json());
    }

};