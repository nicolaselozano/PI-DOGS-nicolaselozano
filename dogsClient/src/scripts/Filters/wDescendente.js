
export const wDescendente = (breed) => {
    const sortedData = [...breed];
    return sortedData.sort((a, b) => {
        let weightA = getWeight(a);
        let weightB = getWeight(b);

        // Convierte las cadenas a números para garantizar una comparación numérica
        weightA = parseFloat(weightA);
        weightB = parseFloat(weightB);

        // Ordena de manera descendente
        return weightB - weightA;
    });
};

const getWeight = (breed) => {
    let weight = breed && breed.weight ? breed.weight : null;

    if (weight) {
        if (weight.metric) {
            // Si hay un rango, tomo el valor menor
            if (weight.metric.includes("-")) {
                return weight.metric.split("-")[0];
            } else {
                // Si no hay un rango, tomo el valor directo
                return weight.metric;
            }
        } else {
            // En el caso de la base de datos
            if (weight.includes("-")) {
                return weight.split("-")[0];
            } else {
                return weight;
            }
        }
    }

    return 0; // Valor predeterminado si no hay peso definido
};