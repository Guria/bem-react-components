import { decl } from 'bem-react-core';
import React from 'react';

import NoFile from 'e:NoFile';

export default decl({
    block : 'Attach',
    tag : 'span',
    content({ noFileText }) {
        return [
            <NoFile key="no-file">{noFileText}</NoFile>
        ];
    }
});
