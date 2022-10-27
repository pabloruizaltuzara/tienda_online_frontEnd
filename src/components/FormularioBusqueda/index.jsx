import React from 'react'
import { Input } from 'semantic-ui-react'

import "bootstrap/dist/css/bootstrap.min.css";

function searchForm (props) {
    return(
      <Input
        action={{ icon: 'search', color: 'teal' }}
        placeholder='Search...' />
    )
}

export default searchForm;
