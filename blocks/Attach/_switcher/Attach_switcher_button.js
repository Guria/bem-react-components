import { declMod } from 'bem-react-core';
import React from 'react';

import Switcher from 'e:Switcher';

export default declMod({ switcher : 'button' }, {
    block : 'Attach',

    content({ text }) {
        return [
            <Switcher key="switcher" text={text}/>,
            this.__base(...arguments)
        ];
    }
});
