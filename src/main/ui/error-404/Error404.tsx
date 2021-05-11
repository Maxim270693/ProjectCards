import React from "react";
import s from "./Error.module.css"

function Error404() {
    return (
        <div className={s.error}>
            <div className={s.errorNumber}>404</div>
            <div className={s.errorMessage}>Page not found!</div>
            <div className={s.errorMessage}>Choose another page</div>
            <div className={s.cat}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
