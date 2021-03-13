import React from "react"
import { NMFPlaylist } from "./"

import nmfW from "../img/nmf/nmfW.png";
import nmfB from "../img/nmf/nmfB.png";
import nmfD from "../img/nmf/nmfD.png";

export default () => (
    <>
        <NMFPlaylist energy="high" art={nmfW} color="#37BFDF" uri="spotify:playlist:5rDS8dw9NXPKsxPlHA9inN" />
        <NMFPlaylist energy="medium" art={nmfB} color="#218ED0" uri="spotify:playlist:24cQ3PMEkIXeo0o82DkFvK" />
        <NMFPlaylist energy="low" art={nmfD} color="#15356B" uri="spotify:playlist:27CLPaaI06cGDlgkdyuUaY" />
    </>
)