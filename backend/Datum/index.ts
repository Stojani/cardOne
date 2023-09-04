import { PPubKeyHash, int, pstruct } from "@harmoniclabs/plu-ts";

// Datum where could add data to validate
const CardOneDatum = pstruct({
    CardOneDatum: {
        beneficiary: PPubKeyHash.type
        //deadline: int // posix time
    }
});

export default CardOneDatum;