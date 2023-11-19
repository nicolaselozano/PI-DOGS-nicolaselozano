
export const byTemperament = (breed, tempName) => {

    if (isNaN(breed.id)) {

        if (breed.Temperaments.some((temp) => temp.name === tempName)) {
            
            return true;

        } else {
            
            return false;

        }

    } else {

        const temperaments = breed.temperament ? breed.temperament.split(",") : [];

        if (temperaments.some((temp) => temp.trim() === tempName)) {
            
            return true;

        } else {
            
            return false;
            
        }

    }
};