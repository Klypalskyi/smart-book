import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Backdrop from '../../components/Backdrop'
import FormOfRegistration from '../../components/FormOfRegistration/FormOfRegistration'
// import PropTypes from 'prop-types'

function App () {
  return (
    <>
      <CssBaseline />
      <Backdrop component={FormOfRegistration} />
      {/* ... bottom place your components */}
    </>
  )
}

export default App
