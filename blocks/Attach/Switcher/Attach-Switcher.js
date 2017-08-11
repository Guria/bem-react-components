import { decl } from 'bem-react-core';
import React from 'react';

import Button from 'b:Button';
import Control from 'e:Control';

export default decl({
    block : 'Attach',
    elem : 'Switcher',
    tag : 'span',
    content({ text }) {
        return [
            <Button
                key="button"
                mix={{ block : this.block, elem : 'button' }} >
                {text}
            </Button>,
            <Control key="control"/>
        ];
    }
});
